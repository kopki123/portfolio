# Portfolio

以 Nuxt 4、Nuxt UI 與 Nuxt Content 打造的作品集，集中展示專案、文章與聯絡方式。內容以 Markdown 維護，便於快速更新。

## 功能與特色

- Markdown 驅動內容：`@nuxt/content` 搭配 `content.config.ts` 的 zod schema，確保欄位完整。
- UI 與深淺色：使用 `@nuxt/ui` 元件庫並支援系統色彩模式。
- SEO 內建：整合 `@nuxtjs/seo`、Open Graph 圖片與 robots 設定，利於分享與搜尋。
- 響應式佈局：首頁、專案、文章列表皆針對行動與桌面優化。

## 技術棧

- Nuxt 4 + TypeScript
- Nuxt UI + Tailwind CSS
- @nuxt/content（Markdown 內容）
- @nuxtjs/seo、@nuxt/image、@nuxt/hints

## 環境需求

- Node.js 22+
- npm

## 安裝相依套件

```bash
npm install
```

## 啟動開發伺服器

```bash
npm run dev
# 預設 http://localhost:3000
```

## 打包

```bash
# 建置 production 產物（.output）
npm run build

# 驗證 production 輸出
npm run preview

# 如需靜態化輸出
npm run generate
```
