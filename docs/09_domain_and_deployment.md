# 域名与部署说明

## 一、推荐部署方式

优先推荐：

- Vercel + 自定义域名

原因：
- 对 Next.js 支持最好
- 部署流程简单
- 免费层足够个人主页使用
- 域名绑定方便
- HTTPS 自动配置

## 二、域名建议

建议使用简洁、学术风格域名，例如：

- fangzhoulin.com
- fangzhoulin.me
- linfangzhou.com
- fzlin.site
- fangzhou.dev

如果 `.com` 不可用，可考虑：
- `.me`
- `.site`
- `.dev`
- `.xyz`

## 三、域名绑定流程

1. 在域名注册商购买域名
2. 将项目部署到 Vercel
3. 在 Vercel 中添加自定义域名
4. 在域名注册商配置 DNS
5. 等待解析生效
6. 完成 HTTPS 自动签发

## 四、部署前准备

上线前应完成：

- favicon
- Open Graph 图片
- 页面 title / description
- 自定义 404 页面
- GitHub 链接检查
- PDF 简历链接检查
- 移动端适配检查

## 五、后续升级方向

后续可增加：

- 自定义邮箱转发
- Google Analytics / Plausible
- 独立博客
- 学术论文列表
