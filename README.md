# Content-Creator-Skill-ScarfBro — 围巾哥全能内容创作套件技能

> **让创作者专注于内容本身，把重复性工作交给 AI**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()

## 功能概览

| 模块 | 功能 | 输入 | 输出 |
|------|------|------|------|
| 🖥️ **演示文稿** | HTML 幻灯片生成 + PPT 转换 | 音频/演讲稿/PPT/文档 | 动画 HTML 演示文稿 |
| 🎙️ **访谈音频** | 多角色对话脚本 + 音频生成 | 主题/访谈大纲 | 访谈脚本/音频文件 |
| 🖼️ **封面设计** | 多尺寸封面图生成 | 任意内容主题 | 16:9 / 3:4 封面图 |
| 📚 **书籍生成** | 将内容扩展为出版级书籍 | 任意内容 | 约 10 万字 .docx 书籍 |

## 安装

### 方式一：适用于 Claude Code / Trae IDE

```bash
# 克隆到 skills 目录
git clone https://github.com/your-repo/content-creator-suite.git ~/.claude/skills/content-creator-suite

# 或手动复制
mkdir -p ~/.claude/skills/content-creator-suite
cp -r content-creator-suite/* ~/.claude/skills/content-creator-suite/
```

安装后，在 Claude Code 中直接输入 `/content-creator-suite` 即可使用。

### 方式二：复制 SKILL.md

将 `SKILL.md` 的内容复制到你的 AI 助手的 skill 配置中。

## 快速开始

### 模块 1：演示文稿生成

```
用户：请帮我把这份演讲稿转成 PPT
AI：[分析内容结构] → [选择风格] → [生成 HTML 演示文稿]
```

**支持的输入**：
- 音频文件（需先转写为文字）
- 演讲稿文本
- 现有 PPT 文件
- Markdown / 文章链接

### 模块 2：访谈音频生成

```
用户：帮我制作一期关于 AI 发展趋势的播客访谈
AI：[确认主题和角色] → [生成访谈脚本] → [生成音频文件（如有 TTS 工具）]
```

### 模块 3：封面设计

```
用户：帮我生成一个关于 AI 的封面图
AI：[分析主题] → [确认尺寸 16:9/3:4] → [确认风格] → [生成封面图]
```

### 模块 4：书籍生成

```
用户：把这份内容扩展成一本 10 万字的书
AI：[规划书籍结构] → [用户确认大纲] → [逐章撰写] → [生成 .docx 书籍]
```

## 目录结构

```
content-creator-suite/
├── SKILL.md                          # 技能主文件（核心指令）
├── README.md                          # 使用说明
│
├── references/                        # 参考文档（按需加载）
│   ├── slides-reference.md            # 演示文稿生成参考
│   ├── interview-reference.md         # 访谈音频生成参考
│   ├── cover-reference.md             # 封面设计参考
│   └── book-reference.md              # 书籍生成参考
│
└── scripts/                           # 辅助脚本
    └── export-pptx.js                # PPTX 转换脚本
```

## 设计哲学

1. **渐进式披露**：不在第一次交互中倾倒所有选项，让用户逐步深入
2. **先做出来，再迭代完美**：不要追求一步到位，先交付可用版本
3. **零依赖**：生成的 HTML 文件内联所有代码，十年后仍能使用
4. **用户选择权**：用"视觉预览"替代"文字描述"，降低沟通成本

## 更新日志

### v1.0.0 (2026-05)
- 初始版本
- 四大模块：演示文稿、访谈音频、封面设计、书籍生成

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
