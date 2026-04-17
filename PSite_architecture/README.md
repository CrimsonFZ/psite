# PSite 项目文档总览

本目录用于指导使用 Claude / Claude Code 构建个人学术风格网站，目标是形成一个具有较强交互性、便于后续绑定自定义域名的个人主页项目。

## 项目定位

该网站不是普通简历网页，而是一个兼具以下功能的个人学术主页：

- 学术身份展示
- 科研项目展示
- 竞赛与荣誉展示
- 技术栈与研究兴趣展示
- 可扩展的项目详情页 / 博客 / CV 页面
- 后续部署到自定义域名

## 推荐技术路线

推荐优先使用：

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Vercel（首选部署）
- 自定义域名绑定

## 文档清单

- `01_project_positioning.md`：项目定位与设计原则
- `02_site_architecture.md`：网站整体信息架构
- `03_folder_structure.md`：推荐文件夹结构
- `04_page_spec.md`：页面级详细说明
- `05_component_spec.md`：组件说明
- `06_interaction_design.md`：交互设计说明
- `07_content_mapping_from_resume.md`：简历内容映射
- `08_visual_style_guide.md`：视觉风格指南
- `09_domain_and_deployment.md`：域名与部署说明
- `10_claude_build_instructions.md`：给 Claude 的开发规则
- `11_initial_tasks.md`：第一阶段开发任务拆解
- `12_data_schema.md`：结构化数据设计
- `13_seo_and_metadata.md`：SEO 与元信息规划
- `14_future_extensions.md`：后续可扩展方向

## 使用建议

建议将本目录整体复制到你的项目目录，例如：

`D:/PSite/docs/`

然后让 Claude 按文档顺序逐步生成项目代码，而不是一次性生成全部内容。
