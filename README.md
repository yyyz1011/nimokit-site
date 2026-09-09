# Nimokit

Nimokit 产品官网。纯 HTML/CSS/JavaScript，包含中英文首页、三个产品介绍页、关于和隐私页。独立部署到 `nimokit.com`，原有产品子域名不变。

## 开发

Node.js 22+，无 npm 依赖。运行 `npm run build`、`npm test`，再运行 `npm run dev`，预览地址为 `http://127.0.0.1:4180/`。

- `src/content.mjs`：产品事实和双语文案。
- `scripts/build.mjs`：生成 12 个静态页面、404、sitemap、robots、ads.txt。
- `assets/`：本地字体、SVG 标志、主题和交互代码。Manrope 使用 OFL，许可附在目录中。
- 首页演示仅使用示例数据；不读取文件、不扫描站点、不发送请求。默认英文，中文使用 `/zh/`；外观选择保存在本机。
- `dist/` 是唯一部署目录，开发文档不发布。

## 发布

推送 `main` 后 GitHub Actions 构建、测试并发布到 Pages。Pages 来源选择 GitHub Actions，自定义域名为 `nimokit.com`。DNS 在腾讯云 DNSPod 管理：根域名两条 A 记录指向 GitHub Pages 官方地址 185.199.108.153 和 185.199.109.153（DNSPod 免费套餐限制同一主机的记录数量；无需升级）；待证书签发后开启 HTTPS 强制跳转。

本项目不修改 one-page-answer、sheetdelta、shiplens 的代码或部署。产品链接指向其各自站点，功能介绍和限制以各项目文档为准。

## AdSense

发布商由用户截图提供：`ca-pub-1733665913500809`。每页 head 包含 `google-adsense-account` 元标记，根目录提供 ads.txt。本版没有广告脚本和第三方统计，不会显示广告，也不宣称审核通过。

官网上线后，在 AdSense 的 `nimokit.com` 页面选择「元标记」，确认放置后验证，并由账号持有人完成申请审核。提交、通过和广告投放是不同状态，官网部署不会自动完成这些步骤。

## 产品资料来源

- [One Page Answer](https://github.com/yyyz1011/one-page-answer)
- [SheetDelta](https://github.com/yyyz1011/sheetdelta)
- [ShipLens](https://github.com/yyyz1011/shiplens)

没有库存或交付评分等线上统计。页面中的表格数据、网页轮廓和问题提示均为标明用途的演示。

当前 SheetDelta 子域名的 HTTPS 证书仍在签发，首版产品入口暂时指向其公开 GitHub 文档。证书正常后，在 src/content.mjs 中将 url/zhUrl 恢复为 https://sheetdelta.nimokit.com/docs/ 和 /docs/zh/。
