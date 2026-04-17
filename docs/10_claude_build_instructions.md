# 给 Claude 的开发规则

## 一、项目目标

请构建一个**学术风格的个人网站**，用于展示个人身份、教育背景、研究方向、科研项目、竞赛奖项、技术能力和联系方式。

整体风格应：
- 简洁
- 专业
- 具有学术感
- 有现代交互
- 但不过度炫技

## 二、技术要求

请使用以下技术栈：

- Next.js（App Router）
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- lucide-react

## 三、代码风格要求

1. 组件化开发
2. 路由与组件分离
3. 数据与页面分离，简历内容放在 `data/` 目录
4. 不要把所有内容写在单一页面文件中
5. 保持类型定义清晰
6. 保证移动端适配
7. 页面应具有良好的可维护性

## 四、设计要求

1. 网站必须体现 academic personal website 风格
2. 首页应包含 Hero / About / Projects / Awards / Skills / Contact
3. Projects 页面应支持卡片展示
4. 项目详情页应清晰展示项目背景、方法和成果
5. 必须支持深浅色主题切换
6. 必须有良好的导航和滚动体验
7. 动画应克制且优雅

## 五、交互要求

请至少加入以下交互：

- Theme toggle
- Smooth scroll
- Scroll reveal animation
- Project card hover effect
- Copy email button
- Responsive mobile navigation
- Projects filter/search（如实现难度适中）

## 六、不要这样做

- 不要使用过度花哨的视觉风格
- 不要加入无意义的大型粒子背景
- 不要让动画影响可读性
- 不要过度使用鲜艳颜色
- 不要写成简历截图式网页

## 七、输出顺序建议

请按以下顺序生成代码：

1. 项目初始化结构
2. layout / navbar / footer
3. 首页各 section
4. Projects 页面
5. 项目详情页
6. CV 页面
7. 样式优化
8. SEO 与 metadata
