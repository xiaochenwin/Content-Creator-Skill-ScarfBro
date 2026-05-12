# 演示文稿生成器 — 参考指南

> 本文件是 `SKILL.md` 的参考附件，包含了完整的 HTML/CSS/JS 模板代码和设计规范。**按需加载**，不需要在每次使用时全部读取。

---

## 目录

1. HTML 文件结构规范
2. CSS 动画模板（4 种风格）
3. JavaScript 交互逻辑
4. PPT 转换脚本
5. 部署与分享指南

---

## 1. HTML 文件结构规范

生成的 HTML 演示文稿必须遵循以下结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>演示文稿标题</title>
  <style>
    /* 所有 CSS 内联，不使用外部文件 */
  </style>
</head>
<body>
  <!-- 幻灯片容器 -->
  <div class="presentation">
    
    <!-- 第 1 张：封面 -->
    <section class="slide slide--cover" data-slide="1">
      <div class="slide__content">
        <h1 class="slide__title">演讲标题</h1>
        <p class="slide__subtitle">副标题</p>
        <p class="slide__author">演讲者姓名</p>
        <p class="slide__date">2026年5月</p>
      </div>
    </section>

    <!-- 第 2 张：目录 -->
    <section class="slide slide--toc" data-slide="2">
      <div class="slide__content">
        <h2 class="slide__heading">目录</h2>
        <ol class="toc__list">
          <li>章节 1</li>
          <li>章节 2</li>
          <li>章节 3</li>
        </ol>
      </div>
    </section>

    <!-- 第 3-N 张：内容页 -->
    <section class="slide slide--content" data-slide="3">
      <div class="slide__content">
        <h2 class="slide__heading">本页标题</h2>
        <div class="slide__body">
          <p>核心内容...</p>
        </div>
      </div>
    </section>

    <!-- 最后一张：结束 -->
    <section class="slide slide--end" data-slide="N">
      <div class="slide__content">
        <h2 class="slide__title">感谢聆听</h2>
        <p>联系信息 / Q&A</p>
      </div>
    </section>

  </div>

  <!-- 导航控制 -->
  <nav class="controls">
    <button class="controls__prev">←</button>
    <span class="controls__counter">1 / N</span>
    <button class="controls__next">→</button>
  </nav>

  <!-- 导航点 -->
  <div class="nav-dots"></div>

  <script>
    /* 所有 JS 内联 */
  </script>
</body>
</html>
```

### 关键设计原则

1. **零依赖**：所有 CSS 和 JS 必须内联在 HTML 文件中，不使用外部 CDN
2. **响应式**：使用 `vw`/`vh`/`%` 等相对单位，确保在任何屏幕上都能正常显示
3. **动画流畅**：使用 CSS `transition` 和 `@keyframes`，避免 JavaScript 动画
4. **语义化**：使用 `<section>` 标签包裹每张幻灯片，使用语义化类名
5. **键盘导航**：支持左右方向键、空格键翻页
6. **触摸支持**：支持移动端触摸滑动翻页

---

## 2. CSS 动画模板

### 风格 A：专业商务（深色主题）

```css
/* 风格 A：专业商务 */
:root {
  --color-bg: #0f1117;
  --color-surface: #1a1d27;
  --color-primary: #3b82f6;
  --color-accent: #60a5fa;
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;
  --font-heading: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-body: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.slide {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}

.slide__title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 1rem;
}

.slide__heading {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--color-accent);
  border-left: 4px solid var(--color-primary);
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.slide__body p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-text);
}

/* 入场动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide.active .slide__content > * {
  animation: fadeInUp 0.6s ease-out forwards;
}

.slide.active .slide__content > *:nth-child(1) { animation-delay: 0.1s; }
.slide.active .slide__content > *:nth-child(2) { animation-delay: 0.2s; }
.slide.active .slide__content > *:nth-child(3) { animation-delay: 0.3s; }
.slide.active .slide__content > *:nth-child(4) { animation-delay: 0.4s; }
```

### 风格 B：创意活力（亮色主题）

```css
/* 风格 B：创意活力 */
:root {
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-primary: #6366f1;
  --color-accent: #ec4899;
  --color-secondary: #14b8a6;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --font-heading: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-body: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.slide {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}

.slide__title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
}

.slide__heading {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--color-primary);
  margin-bottom: 2rem;
  position: relative;
}

.slide__heading::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 2px;
}

/* 弹跳入场动画 */
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.8); }
  50% { transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}

.slide.active .slide__content > * {
  animation: bounceIn 0.5s ease-out forwards;
}

.slide.active .slide__content > *:nth-child(1) { animation-delay: 0.1s; }
.slide.active .slide__content > *:nth-child(2) { animation-delay: 0.25s; }
.slide.active .slide__content > *:nth-child(3) { animation-delay: 0.4s; }
```

### 风格 C：学术严谨（极简主题）

```css
/* 风格 C：学术严谨 */
:root {
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-primary: #1e293b;
  --color-accent: #334155;
  --color-text: #0f172a;
  --color-text-muted: #475569;
  --color-border: #e2e8f0;
  --font-heading: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-body: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.slide {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide__title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  color: var(--color-primary);
  text-align: center;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.slide__heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-primary);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-border);
}

.slide__body p {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 2;
  color: var(--color-text);
  max-width: 80%;
}

/* 淡入动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide.active .slide__content {
  animation: fadeIn 0.8s ease-out;
}
```

### 风格 D：文艺简约（温暖主题）

```css
/* 风格 D：文艺简约 */
:root {
  --color-bg: #f5f0e8;
  --color-surface: #ebe5d9;
  --color-primary: #2d3436;
  --color-accent: #b8860b;
  --color-text: #2d3436;
  --color-text-muted: #636e72;
  --font-heading: 'Georgia', 'PingFang SC', serif;
  --font-body: 'Georgia', 'PingFang SC', serif;
}

.slide {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide__title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  color: var(--color-primary);
  text-align: center;
  font-style: italic;
  margin-bottom: 1rem;
  position: relative;
}

.slide__title::before,
.slide__title::after {
  content: '"';
  color: var(--color-accent);
  font-size: 1.5em;
}

.slide__heading {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
}

.slide__body p {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 2.2;
  color: var(--color-text);
  text-align: justify;
  font-family: var(--font-body);
}

/* 优雅滑入动画 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide.active .slide__content > * {
  animation: slideIn 0.8s ease-out forwards;
}

.slide.active .slide__content > *:nth-child(1) { animation-delay: 0.2s; }
.slide.active .slide__content > *:nth-child(2) { animation-delay: 0.4s; }
.slide.active .slide__content > *:nth-child(3) { animation-delay: 0.6s; }
```

---

## 3. JavaScript 交互逻辑

```javascript
(function() {
  'use strict';

  const presentation = document.querySelector('.presentation');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.controls__prev');
  const nextBtn = document.querySelector('.controls__next');
  const counter = document.querySelector('.controls__counter');
  const navDots = document.querySelector('.nav-dots');

  let currentSlide = 0;
  const totalSlides = slides.length;

  // 初始化
  function init() {
    // 设置第一张幻灯片为活动状态
    slides[0].classList.add('active');
    
    // 生成导航点
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'nav-dot' + (i === 0 ? ' nav-dot--active' : '');
      dot.setAttribute('aria-label', `跳转到第 ${i + 1} 张`);
      dot.addEventListener('click', () => goToSlide(i));
      navDots.appendChild(dot);
    }

    // 更新计数器
    updateCounter();
  }

  // 跳转到指定幻灯片
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    
    // 更新导航点
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
      dot.classList.toggle('nav-dot--active', i === currentSlide);
    });
    
    updateCounter();
  }

  // 上一张
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // 下一张
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // 更新计数器
  function updateCounter() {
    counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
  }

  // 事件监听
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // 键盘导航
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      prevSlide();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'Home') {
      goToSlide(0);
    } else if (e.key === 'End') {
      goToSlide(totalSlides - 1);
    }
  });

  // 触摸滑动
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide(); // 左滑下一页
      } else {
        prevSlide(); // 右滑上一页
      }
    }
  }

  init();
})();
```

---

## 4. PPT 转换脚本

### extract-pptx.py（提取 PPT 内容）

```python
#!/usr/bin/env python3
"""
从 PowerPoint 文件中提取文本和图片内容。
用于将现有 PPT 转换为 HTML 演示文稿。
"""

import sys
import os
from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET
from pptx import Presentation
from pptx.util import Inches, Pt
import argparse


def extract_pptx(pptx_path, output_dir):
    """提取 PPT 文件中的所有内容"""
    pptx_path = Path(pptx_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    prs = Presentation(pptx_path)

    slides_content = []

    for i, slide in enumerate(prs.slides, start=1):
        slide_data = {
            'number': i,
            'title': '',
            'content': [],
            'images': []
        }

        # 提取标题
        if slide.shapes.title:
            slide_data['title'] = slide.shapes.title.text

        # 提取所有文本
        for shape in slide.shapes:
            if shape.has_text_frame:
                for paragraph in shape.text_frame.paragraphs:
                    text = paragraph.text.strip()
                    if text and text != slide_data['title']:
                        slide_data['content'].append(text)

        # 提取图片
        for shape in slide.shapes:
            if hasattr(shape, 'image'):
                try:
                    image = shape.image
                    image_bytes = image.blob
                    image_ext = image.ext
                    image_name = f'slide_{i}_{len(slide_data["images"]) + 1}.{image_ext}'
                    image_path = output_dir / image_name
                    
                    with open(image_path, 'wb') as f:
                        f.write(image_bytes)
                    
                    slide_data['images'].append(image_name)
                except Exception as e:
                    print(f"警告：无法提取第 {i} 张幻灯片中的图片: {e}")

        slides_content.append(slide_data)

    # 生成摘要文件
    summary_path = output_dir / 'slides_summary.md'
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write(f"# {pptx_path.stem} - 内容摘要\n\n")
        f.write(f"共 {len(slides_content)} 张幻灯片\n\n")
        
        for slide in slides_content:
            f.write(f"## 第 {slide['number']} 张: {slide['title'] or '无标题'}\n\n")
            for item in slide['content']:
                f.write(f"- {item}\n")
            if slide['images']:
                f.write(f"\n图片: {', '.join(slide['images'])}\n")
            f.write("\n---\n\n")

    print(f"✅ 已提取 {len(slides_content)} 张幻灯片到 {output_dir}")
    print(f"📄 摘要文件: {summary_path}")

    return slides_content


def main():
    parser = argparse.ArgumentParser(description='从 PPT 文件中提取内容')
    parser.add_argument('pptx_file', help='PPT 文件路径')
    parser.add_argument('-o', '--output', default='./extracted_pptx', help='输出目录')
    
    args = parser.parse_args()

    if not os.path.exists(args.pptx_file):
        print(f"❌ 文件不存在: {args.pptx_file}")
        sys.exit(1)

    try:
        from pptx import Presentation
    except ImportError:
        print("❌ 需要安装 python-pptx 库: pip install python-pptx")
        sys.exit(1)

    extract_pptx(args.pptx_file, args.output)


if __name__ == '__main__':
    main()
```

---

## 5. 部署与分享指南

### 部署到 Vercel（生成永久 URL）

```bash
#!/bin/bash
# scripts/deploy.sh

if [ -z "$1" ]; then
  echo "用法: bash scripts/deploy.sh <文件或目录路径>"
  exit 1
fi

TARGET="$1"

# 检查是否已登录 Vercel
if ! npx vercel whoami &> /dev/null; then
  echo "📋 请先登录 Vercel:"
  echo "   npx vercel login"
  echo ""
  echo "或者访问: https://vercel.com/login"
  exit 1
fi

echo "🚀 正在部署到 Vercel..."
npx vercel --yes --public "$TARGET"

echo ""
echo "✅ 部署完成！"
echo "💡 提示: 使用 'npx vercel --prod' 可以更新生产环境链接"
```

### 导出为 PDF

```bash
#!/bin/bash
# scripts/export-pdf.sh

if [ -z "$1" ]; then
  echo "用法: bash scripts/export-pdf.sh <HTML文件路径> [输出PDF路径]"
  exit 1
fi

HTML_FILE="$1"
OUTPUT_FILE="${2:-./presentation.pdf}"

echo "📄 正在导出为 PDF..."

# 使用 Playwright 截图并合并
npx playwright install chromium 2>/dev/null || true

node -e "
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  const filePath = 'file://' + path.resolve('${HTML_FILE}');
  await page.goto(filePath);
  
  // 等待页面加载
  await page.waitForTimeout(1000);
  
  // 获取幻灯片数量
  const slideCount = await page.evaluate(() => document.querySelectorAll('.slide').length);
  
  console.log('📊 检测到 ' + slideCount + ' 张幻灯片');
  
  const pdfPages = [];
  
  for (let i = 0; i < slideCount; i++) {
    // 模拟点击导航到每张幻灯片
    await page.evaluate((idx) => {
      const dots = document.querySelectorAll('.nav-dot');
      if (dots[idx]) dots[idx].click();
    }, i);
    
    await page.waitForTimeout(500);
    
    const screenshot = await page.screenshot({ type: 'png' });
    pdfPages.push(screenshot);
    console.log('  已处理第 ' + (i + 1) + ' 张');
  }
  
  await browser.close();
  console.log('✅ PDF 导出完成！');
})();
"
```

---

## 快速参考：风格选择表

| 风格 | 关键词 | CSS 变量主题 | 动画类型 | 适用场景 |
|------|--------|-------------|---------|---------|
| **A: 专业商务** | 深色、科技、蓝白 | `--color-bg: #0f1117` | `fadeInUp` 渐入 | 商业汇报、技术演讲 |
| **B: 创意活力** | 渐变、弹跳、彩色 | `--color-bg: #ffffff` + 渐变 | `bounceIn` 弹入 | 路演、培训、创意展示 |
| **C: 学术严谨** | 极简、边框、灰白 | `--color-bg: #fafafa` | `fadeIn` 淡入 | 论文答辩、学术报告 |
| **D: 文艺简约** | 衬线、留白、金色 | `--color-bg: #f5f0e8` | `slideIn` 滑入 | 个人演讲、随想分享 |
