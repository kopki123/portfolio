---
slug: "building-my-portfolio"
title: "Portfolio 網站製作筆記"
description: "簡要記錄這個 Portfolio 網站的設計方向、技術選擇與結構規劃。"
date: "2026-01-02T00:00:00.000Z"
tags:
  - Portfolio
  - Frontend
  - Nuxt
  - Vue 3
---

Portfolio 網站的目標：
**用清楚、可維護的方式，整理我的專案與經歷。**

設計上避免過度視覺效果，以資訊結構與閱讀體驗為優先，並參考：

- https://canvas.hrcd.fr
- https://zooper.pages.dev
- https://portfolio-template.nuxt.dev

### 技術選擇

- **Nuxt 3 + TypeScript**：整體架構與型別安全
- **Nuxt UI + Tailwind CSS**：一致且簡潔的介面
- **Nuxt Content**：用 Markdown 管理文章與專案內容
- **SEO 基礎優化**：設定 Meta / Open Graph，並提供 sitemap 與 robots.txt，提升搜尋引擎可索引性與分享預覽效果
- **ESLint**：統一程式碼風格與規範，提升可讀性與長期維護性

### 結論

整體以「可維護、固定流程」為核心：內容用 Markdown 管理、介面保持一致，並補上 ESLint 與基礎 SEO。
後續新增專案或文章只要照同一套格式更新即可。