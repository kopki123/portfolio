---
slug: "building-my-portfolio"
title: "Portfolio 網站製作筆記"
description: "簡要記錄這個 Portfolio 網站的設計方向、技術選擇與結構規劃。"
date: "2026-01-02T00:00:00.000Z"
tags:
  - Portfolio
  - Nuxt
  - Vue 3
  - Frontend
---

Portfolio 網站的目標：
**用清楚、可維護的方式，整理我的專案與經歷。**

在設計上，刻意避免過度視覺效果，並參考了以下網站：

- https://canvas.hrcd.fr
- https://zooper.pages.dev
- https://portfolio-template.nuxt.dev

技術選擇：

- **Nuxt 3 + TypeScript**：整體架構與型別安全
- **Nuxt UI + Tailwind CSS**：一致且簡潔的介面
- **Nuxt Content**：用 Markdown 管理文章與專案內容

在結構上，我將「列表資料」與「詳細內容」分離：
- 專案與文章內容各自使用 Markdown 撰寫

這樣可以讓網站在新增內容時，維持固定流程與低維護成本。
