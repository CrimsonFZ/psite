# 推荐文件夹结构

## 一、项目根目录建议

```text
D:/PSite
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projects
│   │   ├── page.tsx
│   │   ├── graft
│   │   │   └── page.tsx
│   │   ├── last-bo
│   │   │   └── page.tsx
│   │   └── dc-gis
│   │       └── page.tsx
│   ├── cv
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   └── not-found.tsx
├── components
│   ├── layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── home
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ResearchInterests.tsx
│   │   ├── Education.tsx
│   │   ├── SelectedProjects.tsx
│   │   ├── Awards.tsx
│   │   ├── Skills.tsx
│   │   └── ContactPreview.tsx
│   ├── project
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectHeader.tsx
│   │   ├── ProjectTimeline.tsx
│   │   ├── TechTag.tsx
│   │   └── ImageGallery.tsx
│   └── ui
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionTitle.tsx
│       └── Badge.tsx
├── data
│   ├── profile.ts
│   ├── projects.ts
│   ├── awards.ts
│   ├── skills.ts
│   ├── education.ts
│   └── contact.ts
├── public
│   ├── avatar.jpg
│   ├── resume.pdf
│   ├── favicon.ico
│   ├── og-image.png
│   └── project-images
│       ├── graft
│       ├── last-bo
│       └── dc-gis
├── lib
│   ├── utils.ts
│   └── constants.ts
├── docs
│   └── （本套 md 文档）
├── prompts
│   ├── claude_system_prompt.md
│   ├── claude_homepage_prompt.md
│   └── claude_project_pages_prompt.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## 二、结构原则

### 1. 数据与视图分离
简历内容不要写死在页面组件中，而应抽到 `data/` 目录。

### 2. 页面与组件分离
路由页只负责拼装，具体内容模块放到 `components/`。

### 3. 静态资源集中管理
图片、PDF、favicon、Open Graph 图统一放在 `public/`。

### 4. 文档与代码并行
`docs/` 用于约束 Claude 的生成行为，降低理解偏差。
