#!/usr/bin/env node

/**
 * 演示文稿转 PPTX 工具
 * 将 HTML 演示文稿转换为 PowerPoint 格式
 * 
 * 使用方法:
 *   node scripts/export-pptx.js <html文件> [输出文件]
 *   node scripts/export-pptx.js ./my-presentation.html ./output.pptx
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ASPECT_RATIO = {
  '16:9': { width: 1920, height: 1080 },
  '4:3': { width: 1440, height: 1080 },
  '1:1': { width: 1080, height: 1080 }
};

/**
 * 从 HTML 中提取幻灯片内容
 */
function extractSlides(htmlContent) {
  const slides = [];
  const slideRegex = /<section[^>]*class="[^"]*slide[^"]*"[^>]*data-slide="(\d+)"[^>]*>([\s\S]*?)<\/section>/gi;
  
  let match;
  while ((match = slideRegex.exec(htmlContent)) !== null) {
    const slideNumber = match[1];
    const slideContent = match[2];
    
    // 提取标题
    const titleMatch = slideContent.match(/<h[1-2][^>]*class="[^"]*slide__(?:title|heading)[^"]*"[^>]*>([\s\S]*?)<\/h[1-2]>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    
    // 提取正文
    const bodyMatch = slideContent.match(/<div[^>]*class="[^"]*slide__body[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    const body = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
    
    slides.push({ number: slideNumber, title, body });
  }
  
  return slides;
}

/**
 * 使用 pptxgenjs 生成 PPTX（如果安装了的话）
 */
async function generatePPTX(slides, outputPath, options = {}) {
  let pptxgen;
  try {
    pptxgen = require('pptxgenjs');
  } catch (e) {
    console.log('⚠️  pptxgenjs 未安装，将使用 PDF 替代方案');
    console.log('   安装命令: npm install pptxgenjs');
    return await generatePDFAlternative(slides, outputPath, options);
  }
  
  const { title = '演示文稿' } = options;
  const pres = new pptxgen();
  
  // 设置演示文稿属性
  pres.layout = 'LAYOUT_16x9';
  pres.title = title;
  
  // 添加每张幻灯片
  for (const slide of slides) {
    const pptSlide = pres.addSlide();
    
    // 背景色
    pptSlide.background = { color: 'FFFFFF' };
    
    // 标题
    if (slide.title) {
      pptSlide.addText(slide.title, {
        x: 0.5,
        y: 0.5,
        w: '90%',
        h: 1,
        fontSize: 32,
        bold: true,
        color: '333333'
      });
    }
    
    // 正文
    if (slide.body) {
      pptSlide.addText(slide.body, {
        x: 0.5,
        y: slide.title ? 1.8 : 0.5,
        w: '90%',
        h: '70%',
        fontSize: 18,
        color: '555555',
        valign: 'top'
      });
    }
    
    // 页码
    pptSlide.addText(`${slide.number}`, {
      x: '90%',
      y: '90%',
      w: '8%',
      h: 0.5,
      fontSize: 12,
      color: 'AAAAAA',
      align: 'right'
    });
  }
  
  // 保存
  await pres.writeFile({ fileName: outputPath });
  console.log(`✅ PPTX 已生成: ${outputPath}`);
  return outputPath;
}

/**
 * PDF 替代方案
 */
async function generatePDFAlternative(slides, outputPath, options = {}) {
  const outputHtml = generatePrintableHTML(slides, options);
  const tempHtml = outputPath.replace('.pptx', '.html');
  
  fs.writeFileSync(tempHtml, outputHtml);
  console.log(`📄 已生成可打印的 HTML 文件: ${tempHtml}`);
  console.log('💡 请在浏览器中打开该文件，然后使用"打印 > 保存为 PDF"');
  console.log(`   建议输出文件重命名为: ${outputPath.replace('.pptx', '.pdf')}`);
  
  return tempHtml;
}

/**
 * 生成可打印的 HTML（用于 PDF 替代）
 */
function generatePrintableHTML(slides, options = {}) {
  const { title = '演示文稿' } = options;
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body { font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; margin: 20px; }
    .slide { page-break-after: always; border: 1px solid #ddd; padding: 40px; margin-bottom: 30px; min-height: 500px; }
    .slide:last-child { page-break-after: avoid; }
    h1 { font-size: 28px; color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
    p { font-size: 16px; color: #555; line-height: 1.8; }
    .page-number { font-size: 12px; color: #aaa; text-align: right; margin-top: 20px; }
    @media print { .slide { border: none; margin: 0; } }
  </style>
</head>
<body>
  ${slides.map(slide => `
    <div class="slide">
      ${slide.title ? `<h1>${slide.title}</h1>` : ''}
      ${slide.body ? `<p>${slide.body}</p>` : ''}
      <div class="page-number">第 ${slide.number} 页</div>
    </div>
  `).join('\n')}
</body>
</html>`;
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('演示文稿转 PPTX 工具');
    console.log('');
    console.log('使用方法:');
    console.log('  node scripts/export-pptx.js <html文件> [输出文件]');
    console.log('');
    console.log('示例:');
    console.log('  node scripts/export-pptx.js ./presentation.html ./output.pptx');
    console.log('');
    console.log('注意: 如需生成 PPTX 文件，请先安装: npm install pptxgenjs');
    console.log('      否则将生成可打印的 HTML 文件，需要手动打印为 PDF');
    return;
  }
  
  const inputFile = args[0];
  const outputFile = args[1] || inputFile.replace('.html', '.pptx');
  
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ 文件不存在: ${inputFile}`);
    process.exit(1);
  }
  
  console.log(`📖 读取文件: ${inputFile}`);
  const htmlContent = fs.readFileSync(inputFile, 'utf-8');
  
  console.log('🔍 提取幻灯片内容...');
  const slides = extractSlides(htmlContent);
  console.log(`📊 检测到 ${slides.length} 张幻灯片`);
  
  if (slides.length === 0) {
    console.log('⚠️  未检测到标准格式的幻灯片，尝试使用 Puppeteer 截图...');
    // 使用 Puppeteer 截图方式（备用方案）
    await screenshotSlides(inputFile, outputFile);
    return;
  }
  
  console.log('🎨 正在生成 PPTX...');
  await generatePPTX(slides, outputFile, { title: path.basename(inputFile, '.html') });
}

main().catch(console.error);
