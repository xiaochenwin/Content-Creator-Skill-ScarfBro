# 封面设计生成器 — 参考指南

> 本文件是 `SKILL.md` 的参考附件，包含封面设计规范、模板代码和生成脚本。**按需加载**。

---

## 目录

1. 封面设计规范
2. HTML/CSS 封面模板
3. 16:9 与 3:4 尺寸处理
4. Canvas 封面生成脚本
5. 设计风格参考

---

## 1. 封面设计规范

### 尺寸标准

| 比例 | 推荐尺寸（像素） | 适用场景 | 说明 |
|------|----------------|---------|------|
| **16:9** | 1920 × 1080 | YouTube 视频封面、Banner 广告、演讲背景 | 最常用的横版比例 |
| **3:4** | 1080 × 1440 | 小红书笔记封面、Instagram 推送、公众号头图 | 竖版比例，视觉冲击力强 |
| **1:1** | 1080 × 1080 | Instagram 头像、方形卡片 | 社交媒体常用 |
| **4:3** | 1440 × 1080 | 传统 PPT、教学视频 | 经典比例 |

### 设计原则

1. **聚焦核心**：封面只能传达一个核心信息，通常是标题或主题
2. **对比鲜明**：前景与背景要有足够的色彩对比，确保可读性
3. **留白适度**：不要让画面太满，适度留白能提升品质感
4. **字体醒目**：标题字体要大、要清晰，避免使用装饰性过强的字体
5. **适配缩略图**：封面经常以小尺寸显示，确保缩小后依然清晰可读

### 文字排版规范

| 元素 | 字号建议 | 位置 | 说明 |
|------|---------|------|------|
| 主标题 | 画面宽度的 8-12% | 居中或偏上 | 最大最醒目 |
| 副标题 | 主标题的 50-70% | 主标题下方 | 补充说明 |
| 装饰文字 | 主标题的 30-50% | 角落或底部 | 品牌标识、日期等 |

---

## 2. HTML/CSS 封面模板

### 风格 1：科技感（深色主题）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>封面 - 科技感</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    .cover {
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f0f2f 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }
    
    /* 背景光效 */
    .cover::before {
      content: '';
      position: absolute;
      width: 150%;
      height: 150%;
      background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
      animation: float 8s ease-in-out infinite;
    }
    
    /* 网格线 */
    .cover::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 60% 60% at center, black 20%, transparent 70%);
    }
    
    .cover__content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 2rem;
    }
    
    .cover__badge {
      display: inline-block;
      padding: 0.4em 1.2em;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.5);
      border-radius: 2em;
      color: #60a5fa;
      font-size: clamp(0.8rem, 2vw, 1.2rem);
      margin-bottom: 1.5em;
      letter-spacing: 0.1em;
    }
    
    .cover__title {
      font-size: clamp(2rem, 6vw, 5rem);
      font-weight: 800;
      color: #ffffff;
      text-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
      margin-bottom: 0.5em;
      line-height: 1.2;
    }
    
    .cover__subtitle {
      font-size: clamp(1rem, 2.5vw, 2rem);
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 2em;
      font-weight: 400;
    }
    
    .cover__meta {
      font-size: clamp(0.7rem, 1.5vw, 1rem);
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.2em;
    }
    
    /* 装饰圆圈 */
    .cover__decoration {
      position: absolute;
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 50%;
    }
    
    .cover__decoration--1 {
      width: 30vw; height: 30vw;
      top: -10vw; right: -10vw;
      animation: rotate 30s linear infinite;
    }
    
    .cover__decoration--2 {
      width: 20vw; height: 20vw;
      bottom: -5vw; left: -5vw;
      animation: rotate 20s linear infinite reverse;
    }
    
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-5%, 5%); }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="cover" id="cover">
    <div class="cover__decoration cover__decoration--1"></div>
    <div class="cover__decoration cover__decoration--2"></div>
    <div class="cover__content">
      <div class="cover__badge">2026</div>
      <h1 class="cover__title">封面标题</h1>
      <p class="cover__subtitle">副标题描述</p>
      <p class="cover__meta">作者 / 日期</p>
    </div>
  </div>
</body>
</html>
```

### 风格 2：清新自然（柔和渐变）

```css
/* 清新自然风格 */
.cover {
  background: linear-gradient(180deg, #e0f2fe 0%, #fce7f3 50%, #fef3c7 100%);
  position: relative;
}

.cover__title {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 700;
  background: linear-gradient(135deg, #0369a1, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 装饰性植物元素 */
.cover__plant {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  opacity: 0.3;
}
```

### 风格 3：简约现代（大字体）

```css
/* 简约现代风格 */
.cover {
  background: #ffffff;
  display: flex;
  align-items: flex-end;
  padding: 5%;
}

.cover__title {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  color: #0f172a;
  line-height: 0.9;
  letter-spacing: -0.02em;
}

.cover__accent {
  display: block;
  width: 15%;
  height: 8px;
  background: #3b82f6;
  margin-top: 1em;
}
```

### 风格 4：插画风格（手绘感）

```css
/* 插画风格 */
.cover {
  background: #fef9f3;
  position: relative;
}

.cover__title {
  font-family: 'Georgia', serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 400;
  font-style: italic;
  color: #292524;
}

.cover__illustration {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 40%;
  opacity: 0.8;
}
```

---

## 3. 16:9 与 3:4 尺寸处理

### 自适应布局策略

```javascript
// scripts/cover-generator.js

/**
 * 根据不同尺寸生成封面图
 * 使用 Canvas API 将 HTML 转换为图片
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ASPECTS = {
  '16:9': { width: 1920, height: 1080 },
  '3:4': { width: 1080, height: 1440 },
  '1:1': { width: 1080, height: 1080 }
};

const STYLES = ['tech', 'nature', 'minimal', 'illustration'];

/**
 * 生成封面图
 * @param {Object} options - 生成选项
 */
async function generateCover(options = {}) {
  const {
    title = '封面标题',
    subtitle = '副标题',
    style = 'tech',
    aspect = '16:9',
    outputDir = './covers'
  } = options;

  fs.mkdirSync(outputDir, { recursive: true });

  // 获取尺寸
  const size = ASPECTS[aspect] || ASPECTS['16:9'];

  // 生成 HTML
  const html = generateCoverHTML({ title, subtitle, style, ...size });

  // 使用 Puppeteer 渲染并截图
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: size.width, height: size.height });
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const outputPath = path.join(outputDir, `${aspect}-${Date.now()}.png`);
  await page.screenshot({
    path: outputPath,
    type: 'png',
    omitBackground: false
  });

  await browser.close();

  console.log(`✅ 封面已生成: ${outputPath}`);
  return outputPath;
}

/**
 * 生成封面 HTML
 */
function generateCoverHTML(options) {
  const { title, subtitle, style, width, height } = options;
  const styleConfig = getStyleConfig(style);

  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
      ${styleConfig.css}
    }
    .cover {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8%;
      text-align: center;
    }
    .title { ${styleConfig.title} }
    .subtitle { ${styleConfig.subtitle} }
    .meta { ${styleConfig.meta} }
  </style>
</head>
<body>
  <div class="cover">
    <h1 class="title">${title}</h1>
    ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
    <p class="meta">${new Date().getFullYear()}</p>
  </div>
</body>
</html>
  `;
}

/**
 * 获取风格配置
 */
function getStyleConfig(style) {
  const configs = {
    tech: {
      css: `background: linear-gradient(135deg, #0a0a1a, #1a1a3a);`,
      title: `font-size: ${size * 0.08}px; font-weight: 800; color: #fff; text-shadow: 0 0 30px rgba(59,130,246,0.5);`,
      subtitle: `font-size: ${size * 0.035}px; color: rgba(255,255,255,0.7); margin-top: 0.5em;`,
      meta: `font-size: ${size * 0.02}px; color: rgba(255,255,255,0.5); margin-top: 2em;`
    },
    nature: {
      css: `background: linear-gradient(180deg, #e0f2fe, #fce7f3);`,
      title: `font-size: ${size * 0.08}px; font-weight: 700; background: linear-gradient(135deg, #0369a1, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`,
      subtitle: `font-size: ${size * 0.035}px; color: #475569; margin-top: 0.5em;`,
      meta: `font-size: ${size * 0.02}px; color: #94a3b8; margin-top: 2em;`
    },
    minimal: {
      css: `background: #ffffff;`,
      title: `font-size: ${size * 0.1}px; font-weight: 900; color: #0f172a; letter-spacing: -0.02em; line-height: 0.9;`,
      subtitle: `font-size: ${size * 0.03}px; color: #64748b; margin-top: 0.8em;`,
      meta: `font-size: ${size * 0.02}px; color: #94a3b8; margin-top: 2em;`
    },
    illustration: {
      css: `background: #fef9f3;`,
      title: `font-family: Georgia, serif; font-size: ${size * 0.07}px; font-weight: 400; font-style: italic; color: #292524;`,
      subtitle: `font-size: ${size * 0.03}px; color: #78716c; margin-top: 0.5em;`,
      meta: `font-size: ${size * 0.02}px; color: #a8a29e; margin-top: 2em;`
    }
  };

  // 动态计算字号
  const size = 1920; // 基准尺寸
  return configs[style] || configs.tech;
}

// 批量生成多个尺寸和风格
async function generateMultiple(options) {
  const { title, subtitle } = options;
  const results = [];

  for (const aspect of Object.keys(ASPECTS)) {
    for (const style of STYLES) {
      try {
        const result = await generateCover({
          title,
          subtitle,
          aspect,
          style,
          outputDir: options.outputDir || './covers'
        });
        results.push(result);
      } catch (e) {
        console.error(`生成失败 (${aspect}, ${style}):`, e.message);
      }
    }
  }

  console.log(`✅ 共生成 ${results.length} 个封面`);
  return results;
}

module.exports = { generateCover, generateMultiple };
```

---

## 4. Canvas 封面生成脚本（无 Puppeteer 方案）

```javascript
// scripts/cover-canvas.js

/**
 * 使用纯 Canvas API 生成封面图
 * 不需要 Puppeteer，但功能相对简单
 */

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

/**
 * 创建纯色/渐变背景
 */
function drawBackground(ctx, style, width, height) {
  switch (style) {
    case 'tech':
      // 科技感深色渐变
      const gradient1 = ctx.createLinearGradient(0, 0, width, height);
      gradient1.addColorStop(0, '#0a0a1a');
      gradient1.addColorStop(0.5, '#1a1a3a');
      gradient1.addColorStop(1, '#0f0f2f');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);
      
      // 添加网格
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = Math.min(width, height) * 0.05;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      break;
      
    case 'nature':
      // 清新自然渐变
      const gradient2 = ctx.createLinearGradient(0, 0, 0, height);
      gradient2.addColorStop(0, '#e0f2fe');
      gradient2.addColorStop(0.5, '#fce7f3');
      gradient2.addColorStop(1, '#fef3c7');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);
      break;
      
    case 'minimal':
      // 简约白色
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      break;
      
    case 'illustration':
      // 温暖米色
      ctx.fillStyle = '#fef9f3';
      ctx.fillRect(0, 0, width, height);
      break;
  }
}

/**
 * 绘制标题
 */
function drawTitle(ctx, text, style, width, height) {
  const fontSize = Math.min(width, height) * (style === 'minimal' ? 0.12 : 0.08);
  
  ctx.font = `bold ${fontSize}px "PingFang SC", "Microsoft YaHei", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  if (style === 'tech') {
    ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
    ctx.shadowBlur = 40;
    ctx.fillStyle = '#ffffff';
  } else if (style === 'nature') {
    // 渐变文字
    const gradient = ctx.createLinearGradient(0, height * 0.4, 0, height * 0.5);
    gradient.addColorStop(0, '#0369a1');
    gradient.addColorStop(1, '#7c3aed');
    ctx.fillStyle = gradient;
  } else {
    ctx.fillStyle = '#0f172a';
  }
  
  ctx.fillText(text, width / 2, height / 2);
  ctx.shadowBlur = 0;
}

/**
 * 生成封面
 */
function generateCover(options = {}) {
  const {
    title = '封面标题',
    subtitle = '',
    style = 'tech',
    aspect = '16:9',
    outputPath = './cover.png'
  } = options;

  const sizes = {
    '16:9': { width: 1920, height: 1080 },
    '3:4': { width: 1080, height: 1440 },
    '1:1': { width: 1080, height: 1080 }
  };

  const size = sizes[aspect] || sizes['16:9'];
  const canvas = createCanvas(size.width, size.height);
  const ctx = canvas.getContext('2d');

  // 绘制背景
  drawBackground(ctx, style, size.width, size.height);

  // 绘制标题
  drawTitle(ctx, title, style, size.width, size.height);

  // 绘制副标题
  if (subtitle) {
    const subFontSize = Math.min(size.width, size.height) * 0.035;
    ctx.font = `${subFontSize}px "PingFang SC", "Microsoft YaHei", sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = style === 'tech' ? 'rgba(255,255,255,0.7)' : '#64748b';
    ctx.fillText(subtitle, size.width / 2, size.height / 2 + size.height * 0.08);
  }

  // 保存
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  
  console.log(`✅ 封面已生成: ${outputPath}`);
  return outputPath;
}

module.exports = { generateCover };
```

---

## 5. 设计风格参考

### 科技感

| 元素 | 推荐 | 避免 |
|------|------|------|
| 颜色 | 深色背景 + 蓝/紫/青色光效 | 过于花哨的渐变 |
| 字体 | 无衬线 Bold/Black | 衬线字体、细体 |
| 装饰 | 几何线条、网格、光粒子 | 卡通图案、手绘元素 |
| 适用 | AI/科技/数据相关主题 | 生活/美食/文艺类 |

### 清新自然

| 元素 | 推荐 | 避免 |
|------|------|------|
| 颜色 | 柔和渐变（蓝→粉→黄）、植物绿 | 深色、高对比色 |
| 字体 | 圆润的无衬线、衬线字体 | 过于粗重的黑体 |
| 装饰 | 植物叶片、光斑、渐变云朵 | 科技线条、金属质感 |
| 适用 | 生活/旅行/美食/个人品牌 | 严肃商务/技术类 |

### 简约现代

| 元素 | 推荐 | 避免 |
|------|------|------|
| 颜色 | 纯白/浅灰 + 单色点缀 | 多色渐变、复杂图案 |
| 字体 | 超大 Bold、紧密字间距 | 装饰字体、小字号 |
| 装饰 | 单一色块、细线条 | 任何装饰性元素 |
| 适用 | 设计师/品牌/个人 IP | 需要大量信息展示的场景 |

### 插画风格

| 元素 | 推荐 | 避免 |
|------|------|------|
| 颜色 | 暖色调、手绘质感纹理 | 过于现代的扁平设计 |
| 字体 | 手写体、衬线体 | 黑体、等宽字体 |
| 装饰 | 手绘插图、涂鸦元素、印章 | 3D 效果、光效 |
| 适用 | 个人分享/文艺内容/儿童教育 | 正式商务/数据展示 |
