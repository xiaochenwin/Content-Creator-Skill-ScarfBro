# 书籍生成器 — 参考指南

> 本文件是 `SKILL.md` 的参考附件，包含完整的书籍结构规范、撰写指南和生成脚本。**按需加载**。

---

## 目录

1. 书籍结构规范（约 10 万字）
2. 章节撰写模板
3. 风格与语气指南
4. 书籍生成脚本
5. 排版与格式规范

---

## 1. 书籍结构规范（约 10 万字）

### 标准结构

| 部分 | 章节数 | 预估字数 | 核心内容 |
|------|--------|---------|---------|
| **前言** | 1 | 3000-5000 | 背景、缘起、书籍适合谁、作者心路 |
| **第一部分：认知与基础** | 3-4 | 25000-35000 | 理论基础、历史背景、核心概念 |
| **第二部分：方法与实践** | 4-5 | 35000-45000 | 核心方法论、工具与资源、实操指南 |
| **第三部分：进阶与应用** | 2-3 | 15000-20000 | 高级技巧、行业案例、未来趋势 |
| **结语** | 1 | 3000-5000 | 核心要点回顾、行动建议、展望 |
| **附录** | 可选 | 5000-10000 | 工具推荐、参考文献、延伸阅读 |

**总计：约 100,000 字**

### 详细章节规划模板

```
前言
  - 写这本书的缘起
  - 这本书适合谁
  - 如何阅读这本书
  - 致谢

第一部分：认知与基础（25,000-35,000字）
  第1章：概述与背景（8,000-10,000字）
    - 本章导读
    - 主题的起源与演变
    - 当前发展现状
    - 为什么现在关注这个话题很重要
    - 本章小结

  第2章：核心概念解析（8,000-10,000字）
    - 本章导读
    - 关键术语定义
    - 核心概念之间的关系
    - 常见误解澄清
    - 本章小结

  第3章：理论基础与底层逻辑（8,000-10,000字）
    - 本章导读
    - 相关理论框架
    - 支撑这些理论的证据
    - 不同观点的碰撞
    - 本章小结

第二部分：方法与实践（35,000-45,000字）
  第4章：核心方法论（10,000-12,000字）
    - 本章导读
    - 方法论的整体框架
    - 每一步骤的详细拆解
    - 关键要点与注意事项
    - 本章小结

  第5章：工具与资源（8,000-10,000字）
    - 本章导读
    - 推荐工具清单
    - 每种工具的优缺点分析
    - 如何选择适合自己的工具
    - 工具组合方案
    - 本章小结

  第6章：实操指南——从0到1（8,000-10,000字）
    - 本章导读
    - 准备阶段清单
    - 执行阶段详解
    - 常见问题与解决方案
    - 成功案例拆解
    - 本章小结

  第7章：实操指南——从1到100（8,000-10,000字）
    - 本章导读
    - 进阶技巧
    - 规模化方法
    - 质量保证体系
    - 效率优化策略
    - 本章小结

第三部分：进阶与应用（15,000-20,000字）
  第8章：行业案例分析（8,000-10,000字）
    - 本章导读
    - 案例一：XXX公司
    - 案例二：XXX产品
    - 案例三：XXX个人
    - 案例分析的共同规律
    - 本章小结

  第9章：未来趋势与展望（6,000-8,000字）
    - 本章导读
    - 当前趋势观察
    - 未来3-5年预测
    - 机遇与挑战
    - 如何做好准备
    - 本章小结

结语
  - 核心要点回顾
  - 三步行动计划
  - 给读者的一句话

附录
  - 附录A：推荐资源清单
  - 附录B：术语表
  - 附录C：参考文献
```

---

## 2. 章节撰写模板

### 每章的标准结构

```markdown
## [章节标题]

### 本章导读
[100-200字，引导读者了解本章将要讲述的内容，以及学完本章后能获得什么]

### [第一节标题]
[1500-2500字]

#### [分论点1]
[500-800字，包含概念解释或背景说明]

#### [分论点2]
[500-800字，包含案例或数据支撑]

#### [分论点3]
[500-800字，包含实践建议或操作步骤]

### [第二节标题]
[1500-2500字，结构同上]

### [第三节标题]
[1500-2500字，结构同上]

### 本章小结
[300-500字，总结本章的核心要点，可以用3-5个关键词或句子概括]
```

### 章节撰写技巧

#### 1. 开头吸引读者
```
[场景描述/故事切入]
你有没有遇到过这种情况：……？

[痛点共鸣]
很多人都会……，但其实……

[解决方案预告]
在这章里，我会告诉你……

[核心概念定义]
首先，让我们来理解什么是……
```

#### 2. 正文展开方式

**方式一：总分总结构**
```
[总起] 这个问题可以从三个维度来理解……
[分述1] 第一，……（解释 + 案例）
[分述2] 第二，……（解释 + 数据）
[分述3] 第三，……（解释 + 对比）
[总结] 综上所述，……
```

**方式二：递进结构**
```
[起点] 很多人第一步就会犯的错误是……
[进阶] 当你避开了这个错误之后，接下来要……
[深入] 但更重要的是……
[升华] 最终，你会发现……
```

**方式三：对比结构**
```
[错误做法] 常见的误区是……
[原因分析] 为什么会这样？因为……
[正确做法] 更好的做法是……
[效果对比] 这样做的效果是……
```

#### 3. 结尾收束方式

```
[要点回顾] 这章我们讲了三个核心要点：1）…… 2）…… 3）……
[承上启下] 理解了这些之后，下一章我们将探讨……
[行动建议] 现在，你可以试着……
[金句收尾] [一句能概括核心观点的精彩句子]
```

---

## 3. 风格与语气指南

### 语气风格分类

| 风格 | 特征 | 适用场景 | 示例句子 |
|------|------|---------|---------|
| **专业权威** | 严谨、数据驱动、引用丰富 | 商业、学术、技术 | "研究表明，采用 X 方法后效率提升 47%（来源）。" |
| **亲切分享** | 第一人称、个人经历、真诚 | 个人成长、自传 | "我最开始做这件事的时候，也遇到了同样的问题……" |
| **教练指导** | 鼓励、指令清晰、正向反馈 | 教程、指南、工具书 | "现在，让我们一起来做这个练习。准备好了吗？" |
| **故事驱动** | 叙事性强、情节起伏、人物鲜明 | 传记、商业故事 | "2019 年的一个雨天，张明坐在咖啡馆里……" |

### 混合使用建议

一本好的书通常会混合使用多种语气：
- **核心理论部分**：使用专业权威的语气
- **个人经历部分**：使用亲切分享的语气
- **实操指南部分**：使用教练指导的语气
- **案例分析部分**：使用故事驱动的语气

### 语言风格要点

| 要点 | ✅ 推荐 | ❌ 避免 |
|------|--------|-------|
| 句子长度 | 长短交替，平均 15-25 字 | 全部长句或全部短句 |
| 专业术语 | 首次出现时解释，之后使用 | 不解释直接使用 |
| 数字使用 | 大数字用类比解释 | 堆砌抽象数字 |
| 案例选择 | 具体、真实、有细节 | 模糊、虚构、无血肉 |
| 段落长度 | 3-5 句一段 | 一段超过 10 句 |

---

## 4. 书籍生成脚本

### generate-book.js

```javascript
// scripts/generate-book.js
const { Document, Packer, Paragraph, TextRun, HeadingLevel, 
        AlignmentType, PageBreak, LevelFormat } = require('docx');
const fs = require('fs');
const path = require('path');

/**
 * 生成出版级书籍文档
 * 使用方法: node scripts/generate-book.js [章节内容JSON文件]
 */

const CJK_FONT = 'Microsoft YaHei';
const ASCII_FONT = 'Arial';

// 书籍元数据（从用户输入推断或指定）
const BOOK_META = {
  title: '书籍标题',
  subtitle: '副标题',
  author: '作者',
  publisher: '出版社（占位）',
  year: new Date().getFullYear()
};

/**
 * 创建书籍文档
 */
async function createBook(chapters = [], options = {}) {
  const {
    title = BOOK_META.title,
    subtitle = BOOK_META.subtitle,
    author = BOOK_META.author
  } = options;

  // 收集所有段落
  const allChildren = [];

  // ===== 封面页 =====
  allChildren.push(
    new Paragraph({ children: [new TextRun({ text: '', size: 48 })] }),
    new Paragraph({ children: [new TextRun({ text: '', size: 48 })] }),
    new Paragraph({ 
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ 
        text: title, 
        bold: true, 
        size: 72,
        font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
      })]
    }),
    new Paragraph({ 
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ 
        text: subtitle, 
        size: 36,
        color: '666666',
        font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
      })]
    }),
    new Paragraph({ children: [new TextRun({ text: '', size: 48 })] }),
    new Paragraph({ 
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ 
        text: author, 
        size: 28,
        font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
      })]
    }),
    new Paragraph({ children: [new PageBreak()] })
  );

  // ===== 目录页 =====
  allChildren.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ 
        text: '目录', 
        font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
      })]
    }),
    new Paragraph({ children: [new TextRun({ text: '', size: 24 })] })
  );

  // 添加章节标题到目录
  for (const chapter of chapters) {
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ 
          text: chapter.title,
          size: 24,
          font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
        })]
      })
    );
    // 添加子章节
    if (chapter.sections) {
      for (const section of chapter.sections) {
        allChildren.push(
          new Paragraph({
            indent: { left: 720 },
            children: [new TextRun({ 
              text: section.title,
              size: 22,
              font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
            })]
          })
        );
      }
    }
  }

  allChildren.push(new Paragraph({ children: [new PageBreak()] }));

  // ===== 正文章节 =====
  for (const chapter of chapters) {
    // 章节标题
    allChildren.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ 
          text: chapter.title,
          font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
        })]
      })
    );

    // 本章导读
    if (chapter.intro) {
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ 
            text: '本章导读',
            bold: true,
            size: 24,
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
          })]
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ 
            text: chapter.intro,
            size: 24,
            color: '555555',
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
          })]
        })
      );
    }

    // 添加子章节内容
    if (chapter.sections) {
      for (const section of chapter.sections) {
        allChildren.push(
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [new TextRun({ 
              text: section.title,
              font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
            })]
          })
        );

        // 添加段落内容
        if (section.content) {
          for (const para of section.content) {
            allChildren.push(
              new Paragraph({
                spacing: { after: 200 },
                children: [new TextRun({ 
                  text: para,
                  size: 24,
                  font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
                })]
              })
            );
          }
        }
      }
    }

    // 章节小结
    if (chapter.summary) {
      allChildren.push(
        new Paragraph({ children: [new TextRun({ text: '', size: 24 })] }),
        new Paragraph({
          children: [new TextRun({ 
            text: '本章小结',
            bold: true,
            size: 24,
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
          })]
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ 
            text: chapter.summary,
            size: 24,
            color: '333333',
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
          })]
        })
      );
    }

    // 章节结束，换页
    allChildren.push(new Paragraph({ children: [new PageBreak()] }));
  }

  // ===== 结语 =====
  if (options.conclusion) {
    allChildren.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ 
          text: '结语',
          font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
        })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ 
          text: options.conclusion,
          size: 24,
          font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
        })]
      })
    );
  }

  // 创建文档
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT },
            size: 24
          }
        }
      },
      paragraphStyles: [
        {
          id: 'Heading1', name: 'Heading 1',
          basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: {
            size: 36, bold: true,
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
          },
          paragraph: {
            spacing: { before: 400, after: 200 },
            outlineLevel: 0,
            keepNext: false,
            keepLines: false
          }
        },
        {
          id: 'Heading2', name: 'Heading 2',
          basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: {
            size: 28, bold: true,
            font: { ascii: CJK_FONT, hAnsi: CJK_FONT, eastAsia: CJK_FONT }
          },
          paragraph: {
            spacing: { before: 300, after: 150 },
            outlineLevel: 1,
            keepNext: false,
            keepLines: false
          }
        }
      ]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A5
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      children: allChildren
    }]
  });

  return doc;
}

/**
 * 保存文档
 */
async function saveBook(doc, outputPath) {
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ 书籍已生成: ${outputPath}`);
  return outputPath;
}

// 主函数
async function main() {
  const args = process.argv.slice(2);
  const inputFile = args[0] || './book-content.json';
  const outputFile = args[1] || './book-output.docx';

  // 读取输入数据
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ 文件不存在: ${inputFile}`);
    console.log('使用默认示例数据生成书籍...');
    
    // 使用示例数据
    const sampleBook = {
      title: 'AI 时代的创作者手册',
      subtitle: '如何用人工智能放大你的创意能力',
      author: 'Content Creator Suite',
      conclusion: 'AI 不会取代创作者，但会用 AI 的创作者会取代不用 AI 的创作者。现在就是开始的最好时机。',
      chapters: [
        {
          title: '第一章：AI 时代的创作新范式',
          intro: '在这一章中，我们将探讨 AI 如何改变了创作的本质，以及为什么每个创作者都需要重新思考自己的工具箱。',
          sections: [
            {
              title: '1.1 从手工到智能：创作的演进之路',
              content: [
                '创作从来不是凭空产生的行为。从最早的岩壁绘画到活字印刷，从胶片相机到数字摄影，每一次技术革命都在重塑创作者的边界。',
                '今天，我们正站在另一个临界点上：人工智能不再是冰冷的计算工具，而是开始具备理解意图、生成内容、甚至参与创意过程的能力。',
                '这意味着什么？意味着创作的核心技能正在发生变化。过去，我们需要花费大量时间在"执行"上——打字、排版、调色、剪辑。而现在，这些重复性的执行工作可以交给 AI 处理。',
                '但这不意味着创作本身变得无关紧要。恰恰相反，当执行变得廉价，创意和判断力就变得更为珍贵。'
              ]
            },
            {
              title: '1.2 AI 辅助创作的三个层次',
              content: [
                '第一层是"工具层"：用 AI 来加速执行。比如用 AI 写作助手来检查语法，用 AI 图像工具来生成配图。这是大多数人在用的方式，也是最容易上手的起点。',
                '第二层是"协作层"：将 AI 视为合作伙伴，不仅执行指令，还能提出建议、挑战假设、激发灵感。这种深度协作需要创作者学会更清晰地表达意图，也需要学会接受 AI 的"创意"。',
                '第三层是"系统层"：将 AI 整合到整个创作流程中，从选题策划到内容生成，从分发传播到数据分析，形成一个高效的创作闭环。这是专业创作者应该追求的目标。'
              ]
            }
          ],
          summary: '本章的核心观点：AI 不是威胁，而是杠杆。关键在于理解如何使用它，以及在哪个层次上使用它。'
        }
      ]
    };

    const doc = await createBook(sampleBook.chapters, sampleBook);
    await saveBook(doc, outputFile);
    return;
  }

  // 从文件读取内容
  const bookData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
  const doc = await createBook(bookData.chapters || [], bookData);
  await saveBook(doc, outputFile);
}

main().catch(console.error);
```

---

## 5. 排版与格式规范

### 页面设置

| 项目 | 标准值 | 说明 |
|------|--------|------|
| 纸张大小 | A5 (148 × 210 mm) | 便于携带阅读 |
| 页边距 | 上 20mm，下 20mm，左 25mm，右 20mm | 天头略大，地脚略小 |
| 正文字号 | 10.5 pt (五号) | 约 24 磅 |
| 行间距 | 1.5 倍 | 约 15 pt |
| 段间距 | 段前 0，段后 6 pt |  |

### 字体使用

| 元素 | 字体 | 字重 | 说明 |
|------|------|------|------|
| 书名 | 黑体/微软雅黑 | Bold | 封面使用 |
| 章节标题 | 黑体/微软雅黑 | Bold | 一级标题 |
| 小节标题 | 黑体/微软雅黑 | 半粗 | 二级标题 |
| 正文 | 宋体/微软雅黑 | Regular | 主要内容 |
| 引用文字 | 楷体/微软雅黑 | Regular | 引文、对话 |
| 脚注 | 宋体/微软雅黑 | Regular | 字号略小 |

### 标点规范

| 项目 | 规范 |
|------|------|
| 中文标点 | 使用全角符号，如 "、" "。" "，" |
| 引号 | 先「」再『』，嵌套使用 |
| 省略号 | 使用 "……" 而不是 "..." |
| 破折号 | 使用 "——" 居中 |
| 数字 | 纯数学内容用半角，其他用全角 |

---

## 快速参考：书籍撰写自检清单

在完成每章后，检查以下要点：

- [ ] 开篇是否吸引读者？有没有用故事/问题/数据开头？
- [ ] 核心概念是否解释清楚？有没有避免术语堆砌？
- [ ] 是否有足够的案例支撑？案例是否具体？
- [ ] 篇幅是否合适？（每节 1500-2500 字）
- [ ] 语言是否流畅？长句是否过多？
- [ ] 是否保留了用户的原始表达风格？
- [ ] 章节小结是否清晰？能否用 3 句话概括全章？
- [ ] 与前后章节的衔接是否自然？
