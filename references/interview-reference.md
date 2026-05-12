# 访谈音频生成器 — 参考指南

> 本文件是 `SKILL.md` 的参考附件，包含访谈脚本模板、TTS 集成方案和音频生成脚本。**按需加载**。

---

## 目录

1. 访谈脚本结构规范
2. 角色设定模板
3. TTS 集成方案
4. 音频脚本生成代码

---

## 1. 访谈脚本结构规范

一份完整的访谈脚本应包含以下部分：

```markdown
# 访谈脚本：《[访谈主题]》

## 基本信息

| 字段 | 内容 |
|------|------|
| 主题 | [核心话题] |
| 时长 | [目标时长，如 8-12 分钟] |
| 风格 | [轻松/正式/深度/幽默] |
| 角色 | 主持人 + 1-2 位嘉宾 |

## 角色设定

### 主持人
- 身份：[职业背景]
- 风格：[引导性强/善于追问/轻松幽默]
- 声音特征：[男声/女声，语速中等]

### 嘉宾 A
- 身份：[职业背景 + 专业领域]
- 观点倾向：[乐观/中立/批判]
- 声音特征：[沉稳/活泼/学术]

### 嘉宾 B（如有）
- 身份：[职业背景 + 专业领域]
- 观点倾向：[补充/对立/延伸]
- 声音特征：[理性/感性]

---

## 脚本正文

### 开场（0:00 - 0:30）

**[主持人的开场白]**
各位听众大家好，欢迎来到《[播客名称]》。我是主持人[名字]。

今天我们邀请到了[嘉宾 A 名字]——[嘉宾 A 简短介绍，1-2 句话]。

今天我们要聊的话题是[主题]。为什么要聊这个话题呢？因为[切入点，1-2 句话]。

让我们正式开始吧。

---

### 第一部分：背景与现状（0:30 - 3:00）

**[主持人的问题 1]**
[主题]这个话题最近很多人都在讨论，但大家的理解可能还比较模糊。我想先请您[嘉宾 A]给我们科普一下，[核心问题]？

**[嘉宾 A 的回答]**
[100-300 字的回答，包含背景介绍、核心概念解释、1-2 个数据或案例]

**[主持人的追问 1]**
您刚才提到[上一个回答中的某个点]，能展开说说吗？这个对听众理解[核心问题]很关键。

**[嘉宾 A 的深入回答]**
[150-200 字的深入回答]

---

### 第二部分：核心讨论（3:00 - 8:00）

**[主持人的问题 2]**
现在市场上[描述现状]，[嘉宾 B]从您的角度看，您觉得[核心争议点]？

**[嘉宾 B 的回答]**
[150-300 字，包含观点、分析和案例]

**[主持人的追问 2]**
这个观点很有意思。但我听说也有人认为[对立观点]，您怎么看？

**[嘉宾 A/B 的回应]**
[100-200 字，对立观点的回应]

**[主持人的过渡]**
聊了这么多，我想用一个比喻来总结一下我的理解：[用 1-2 句话总结核心观点]。

---

### 第三部分：实践建议与总结（8:00 - 10:00）

**[主持人的问题 3]**
对于我们的听众来说，如果他们想[学习/了解/实践]这个领域，您有什么建议？

**[嘉宾 A 的建议]**
[3-5 条具体建议，每条 20-50 字]

**[主持人的收尾]**
非常感谢[嘉宾 A/B]今天做客我们的节目。今天的讨论让我们对[主题]有了更深入的了解。

各位听众，今天的节目就到这里。如果您有任何问题或想法，欢迎在评论区留言。

我是[主持人名字]，我们下期再见。

---

## 脚注/备注

- 重点金句摘录
- 需要补充的数据来源
- 相关背景资料的链接
```

---

## 2. 角色设定模板

### 主持人风格变体

| 风格 | 特征 | 开场白示例 |
|------|------|-----------|
| **专业引导型** | 逻辑清晰、善于追问、推动讨论深入 | "欢迎来到今天的深度对话，让我们一起探讨..." |
| **轻松聊天型** | 亲切自然、幽默风趣、降低嘉宾紧张感 | "大家好！今天我和[嘉宾]来聊个有意思的话题..." |
| **故事驱动型** | 善于讲故事、用案例切入、情感共鸣强 | "三年前，我第一次遇到这个问题..." |
| **挑战辩论型** | 敢于质疑、提出对立观点、推动思维碰撞 | "有人认为[观点]，但我对此有不同看法..." |

### 嘉宾类型

| 类型 | 适用场景 | 脚本策略 |
|------|---------|---------|
| **导师型** | 新人指导、入门科普 | 循序渐进、由浅入深、多给具体建议 |
| **实践型** | 案例分享、经验传授 | 以故事为主、细节丰富、强调可操作性 |
| **理论型** | 深度分析、学术讨论 | 概念清晰、逻辑严密、引用数据和案例 |
| **对立型** | 观点碰撞、多角度分析 | 明确立场、正反对比、推动思考 |

---

## 3. TTS 集成方案

### 方案 A：ElevenLabs API

```javascript
// scripts/tts-elevenlabs.js
const fs = require('fs');
const path = require('path');

/**
 * 使用 ElevenLabs API 生成访谈音频
 * 需要安装: npm install axios
 * 需要设置环境变量: ELEVENLABS_API_KEY
 */

async function generateAudio(text, voiceId, outputPath) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': process.env.ELEVENLABS_API_KEY
    },
    body: JSON.stringify({
      text: text,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75
      }
    })
  });

  if (!response.ok) {
    throw new Error(`TTS API 错误: ${response.status}`);
  }

  const audioBuffer = await response.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
  
  return outputPath;
}

async function generateInterview(script, options = {}) {
  const {
    hostVoice = '21m00Tcm4TlvDq8ikWAM',     // Rachel (女声)
    guestVoice = '29vD33N1KpCaiZxawcbzz',   // Josh (男声)
    outputDir = './audio'
  } = options;

  fs.mkdirSync(outputDir, { recursive: true });

  let segmentIndex = 0;

  for (const segment of script) {
    const voice = segment.speaker === 'host' ? hostVoice : guestVoice;
    const outputFile = path.join(outputDir, `segment_${String(segmentIndex).padStart(3, '0')}.mp3`);
    
    console.log(`生成第 ${segmentIndex + 1} 段: ${segment.speaker} - ${outputFile}`);
    await generateAudio(segment.text, voice, outputFile);
    
    segmentIndex++;
  }

  console.log(`✅ 共生成 ${segmentIndex} 个音频片段`);
  return outputDir;
}

module.exports = { generateAudio, generateInterview };
```

### 方案 B：Azure 认知服务

```javascript
// scripts/tts-azure.js
const fs = require('fs');
const path = require('path');
const { CognitiveServicesCredentials } = require('@azure/cognitiveservices-speech-services');
const { SpeechSynthesisOutputFormat, SpeechSynthesizer } = require('@azure/cognitiveservices-speech-services');

/**
 * 使用 Azure 认知服务生成访谈音频
 * 需要安装: npm install @azure/cognitiveservices-speech-services
 */

async function generateAudio(text, voice, outputPath, options = {}) {
  const {
    subscriptionKey = process.env.AZURE_SPEECH_KEY,
    region = process.env.AZURE_SPEECH_REGION
  } = options;

  const credentials = new CognitiveServicesCredentials(subscriptionKey);
  const synthesizer = new SpeechSynthesizer(credentials, {
    speechSynthesisRegion: region
  });

  return new Promise((resolve, reject) => {
    synthesizer.speakText(text, (result) => {
      if (result.errorDetails) {
        reject(new Error(result.errorDetails));
      } else {
        fs.writeFileSync(outputPath, result.audioData);
        resolve(outputPath);
      }
    }, {
      voiceName: voice,
      outputFormat: SpeechSynthesisOutputFormat.Audio16Khz64KBitRateMonoMp3
    });
  });
}

// 常用中文语音
const CHINESE_VOICES = {
  hostFemale: 'zh-CN-XiaoxiaoNeural',
  hostMale: 'zh-CN-YunxiNeural',
  guestFemale: 'zh-CN-XiaoyouNeural',
  guestMale: 'zh-CN-YunyangNeural'
};

module.exports = { generateAudio, CHINESE_VOICES };
```

### 方案 C：讯飞语音合成

```javascript
// scripts/tts-iflytek.js
const crypto = require('crypto');
const https = require('https');

/**
 * 使用讯飞语音合成 API 生成音频
 * 需要安装: npm install crypto
 */

function createSign(paramStr, key) {
  return crypto.createHmac('sha1', key)
    .update(paramStr)
    .digest('base64');
}

async function generateAudio(text, options = {}) {
  const {
    appId = process.env.IFLYTEK_APP_ID,
    apiKey = process.env.IFLYTEK_API_KEY,
    voiceName = 'xiaoyan',
    outputPath = './output.mp3'
  } = options;

  const voiceMap = {
    'xiaoyan': { vcn: 'xiaoyan', speed: 50, pitch: 50, vol: 50 },
    'aisjiuxu': { vcn: 'aisjiuxu', speed: 50, pitch: 50, vol: 50 },
    'aisxping': { vcn: 'aisxping', speed: 50, pitch: 50, vol: 50 }
  };

  const voice = voiceMap[voiceName] || voiceMap['xiaoyan'];

  const params = {
    auf: 'audio/L16;rate=16000',
    aue: 'lame',
    ent: 'iphone',
    voice_name: voice.vcn,
    speed: voice.speed,
    pitch: voice.pitch,
    volume: voice.vol,
    tte: 'utf8',
    text: Buffer.from(text).toString('base64')
  };

  const currentTime = Math.floor(Date.now() / 1000).toString();
  const paramStr = Buffer.from(JSON.stringify(params)).toString('base64');
  const signStr = appId + currentTime;
  const signature = createSign(signStr, apiKey);

  const postData = JSON.stringify({
    common: { app_id: appId },
    business: params,
    data: { text: paramStr, status: 2 }
  });

  const options = {
    hostname: 'api.xf-yun.com',
    path: '/v1/private/xx',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CurTime': currentTime,
      'X-Param': Buffer.from(JSON.stringify({
        auf: params.auf,
        aue: params.aue,
        vcn: voice.vcn
      })).toString('base64'),
      'X-Appid': appId,
      'X-CheckSum': signature
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const audioBase64 = result.data;
          if (audioBase64) {
            const audioBuffer = Buffer.from(audioBase64, 'base64');
            fs.writeFileSync(outputPath, audioBuffer);
            resolve(outputPath);
          } else {
            reject(new Error('TTS 生成失败'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

module.exports = { generateAudio };
```

---

## 4. 音频脚本生成代码

### 生成访谈脚本的辅助函数

```javascript
// scripts/script-generator.js

/**
 * 根据主题自动生成访谈脚本
 */

const TEMPLATES = {
  hostOpenings: [
    '各位听众大家好，欢迎来到《{podcast}》。我是主持人{host}。',
    '大家好！今天我和{host}来聊个有意思的话题...',
    '欢迎收听今天的节目。今天我们要探讨的是{topic}。'
  ],
  hostQuestions: [
    '我想先请您给我们科普一下，{question}？',
    '您觉得{question}，这是为什么呢？',
    '关于{question}，您有什么独特的见解？',
    '很多人对{question}有误解，您怎么看？'
  ],
  guestResponses: {
    positive: [
      '确实如此。我认为{point}，而且{evidence}。',
      '这确实是个好问题。从我的经验来看，{point}。',
      '是的，我完全同意。{point}，这在{context}中表现得很明显。'
    ],
    neutral: [
      '这个情况比较复杂。我认为{point}，但也要考虑{counterpoint}。',
      '从不同角度来看，{point}。不过{alternative_view}。',
      '这取决于很多因素。{point}，同时{qualification}。'
    ],
    critical: [
      '坦白说，我觉得{counterargument}。',
      '我不完全同意这种观点。{counterargument}。',
      '这里面存在一个常见误区：{misconception}。'
    ]
  },
  transitions: [
    '说到这儿，我想追问一下...',
    '这让我想到另一个问题...',
    '好的，那我们来聊聊...',
    '很有意思的观点。接下来...'
  ],
  closings: [
    '非常感谢今天的分享。希望对各位听众有所启发。',
    '感谢您抽出宝贵时间。我们下期再见！',
    '好的，今天的讨论就到这里。欢迎在评论区留言交流。'
  ]
};

/**
 * 生成访谈脚本
 * @param {Object} options - 配置选项
 * @returns {Array} 脚本段落数组
 */
function generateInterviewScript(options = {}) {
  const {
    topic = 'AI 技术发展',
    podcast = 'AI 对话录',
    host = '小明',
    guest = '张老师',
    guestRole = 'AI 研究者',
    style = 'professional',
    duration = 10 // 分钟
  } = options;

  const segments = [];
  const segmentDuration = 30; // 每段平均 30 秒
  const totalSegments = Math.floor(duration * 60 / segmentDuration);

  // 开场
  segments.push({
    speaker: 'host',
    text: TEMPLATES.hostOpenings[0]
      .replace('{podcast}', podcast)
      .replace('{host}', host) + 
      `今天我们邀请到了${guest}——${guestRole}。` +
      `我们要聊的话题是${topic}。让我们正式开始吧。`,
    timing: '0:00'
  });

  // 生成问题-回答序列
  const questionCount = Math.min(6, Math.floor(totalSegments / 4));
  
  for (let i = 0; i < questionCount; i++) {
    // 问题
    const questionTemplate = TEMPLATES.hostQuestions[i % TEMPLATES.hostQuestions.length];
    segments.push({
      speaker: 'host',
      text: questionTemplate.replace('{question}', getSubQuestion(topic, i)),
      timing: `约 ${(i * 2 + 1) * 2} 分钟`
    });

    // 回答
    const responseType = style === 'professional' ? 'neutral' : 
                        style === 'optimistic' ? 'positive' : 'critical';
    const responseTemplates = TEMPLATES.guestResponses[responseType];
    const responseTemplate = responseTemplates[i % responseTemplates.length];
    
    segments.push({
      speaker: 'guest',
      text: responseTemplate
        .replace('{point}', getResponsePoint(topic, i))
        .replace('{evidence}', getEvidence(topic, i))
        .replace('{context}', getContext(topic, i)),
      timing: `约 ${(i * 2 + 2) * 2} 分钟`
    });

    // 过渡（穿插在部分问题之间）
    if (i < questionCount - 1 && i % 2 === 1) {
      segments.push({
        speaker: 'host',
        text: TEMPLATES.transitions[i % TEMPLATES.transitions.length],
        timing: '过渡'
      });
    }
  }

  // 结尾
  segments.push({
    speaker: 'host',
    text: TEMPLATES.closings[0],
    timing: '结尾'
  });

  return segments;
}

// 辅助函数：根据主题和索引生成子问题
function getSubQuestion(topic, index) {
  const questions = {
    0: `${topic}的核心概念是什么？`,
    1: `为什么现在这么多人关注${topic}？`,
    2: `${topic}的发展现状如何？`,
    3: `${topic}面临哪些挑战？`,
    4: `普通人如何参与${topic}？`,
    5: `${topic}的未来趋势是什么？`
  };
  return questions[index] || `关于${topic}，您怎么看？`;
}

// 辅助函数：生成回答要点
function getResponsePoint(topic, index) {
  const points = [
    `${topic}的本质是[核心原理]，它解决了[关键问题]`,
    `这个趋势的驱动因素包括[因素1]、[因素2]和[因素3]`,
    `目前的发展方向主要集中在[方向]和[方向]`,
    `最大的挑战在于[挑战]，这需要[解决方案]`,
    `对于普通人来说，可以从[入门方式]开始`,
    `未来三到五年，我认为[趋势预测]`
  ];
  return points[index] || `这是关于${topic}的一个重要观点`;
}

// 辅助函数：生成证据/案例
function getEvidence(topic, index) {
  const evidences = [
    '大量研究数据表明',
    '从最近的产品发布可以看出',
    '行业报告的预测也支持这一点',
    '一些领先企业的实践已经验证了这一点',
    '用户反馈也证实了这个方向',
    '技术突破为这个趋势提供了支撑'
  ];
  return evidences[index] || '有相关数据支持';
}

// 辅助函数：生成上下文
function getContext(topic, index) {
  const contexts = [
    '企业数字化转型中',
    '最近的技术发展中',
    '市场竞争格局中',
    '行业标准制定过程中',
    '用户的实际使用中',
    '未来的技术规划中'
  ];
  return contexts[index] || '实践中';
}

module.exports = { generateInterviewScript, TEMPLATES };
```

---

## 快速参考：TTS 方案对比

| 方案 | 优点 | 缺点 | 推荐指数 |
|------|------|------|---------|
| **ElevenLabs** | 声音自然、支持情感调节 | 需要付费、海外服务 | ⭐⭐⭐⭐ |
| **Azure TTS** | 质量稳定、中文支持好 | 配置复杂、需要 Azure 账号 | ⭐⭐⭐⭐ |
| **讯飞 TTS** | 中文语音优秀、本地化服务 | 文档较复杂 | ⭐⭐⭐ |
| **方案 B（脚本导出）** | 免费、灵活 | 需要用户自行配音 | ⭐⭐⭐⭐ |
| **方案 C（SRT 字幕）** | 可导入剪映等工具 | 不是真音频 | ⭐⭐⭐ |
