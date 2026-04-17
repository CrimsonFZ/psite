# 网站整体信息架构

## 一、推荐站点结构

建议采用“首页 + 子页面”的结构，而不是纯单页。

```text
/
├── Home
├── Projects
│   ├── GRAFT
│   ├── LaST-BO
│   └── DC-GIS
├── CV
├── Publications（预留）
├── Awards（可并入首页）
├── Contact
└── 404
```

## 二、首页模块结构

首页建议按以下顺序组织：

1. Navbar
2. Hero
3. About Me
4. Research Interests
5. Education
6. Selected Projects
7. Awards & Honors
8. Skills
9. Contact
10. Footer

## 三、推荐导航栏结构

```text
Home | Projects | CV | Contact
```

如需更完整，也可使用：

```text
Home | About | Projects | Awards | CV | Contact
```

## 四、信息层次设计

### 第一层：快速识别
用户进入网站后，必须在 3 秒内识别出：
- 你是谁
- 你来自哪里
- 你的方向是什么

### 第二层：核心成果
用户向下滚动后，需要快速看到：
- 你的研究项目
- 论文成果
- 软件成果
- 奖项与竞赛

### 第三层：深入了解
有兴趣的访客进一步查看：
- 项目详情页
- 简历
- 联系方式
- GitHub / 论文链接

## 五、页面之间的关系

- 首页负责建立整体印象与入口导航
- Projects 页面负责集中展示项目
- 单个项目详情页负责深入呈现背景、方法、成果、图示
- CV 页面负责正式简历展示与下载
