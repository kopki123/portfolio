<script setup lang="ts">
useSeoMeta({
  title: '關於',
  description: '介紹我的背景與經歷。'
})
</script>

<template>
  <main class="max-w-2xl mx-auto space-y-12">
    <section class="space-y-4">
      <h1
        class="block text-2xl font-semibold"
        href="#about"
      >
        關於
      </h1>

      <div class="space-y-3 leading-8">
        <p>
          👋 嗨，我是李軒婷，是一名前端工程師，主要使用 Vue.js 與 TypeScript 進行開發。
          除了把功能完成，我也在意程式碼是否清楚、結構是否合理，
          以及專案能否在未來持續被維護與擴充。
        </p>

        <p>
          同時，我也持續學習後端與系統設計相關知識，
          希望從整體架構的角度，更深入理解軟體開發流程與前後端之間的協作方式，
          並期待未來有機會往後端或全端工程師的方向發展。
        </p>

        <p>
          在閒暇時，我喜歡聽音樂 🎧、打電動 🎮、閱讀漫畫 📚，以及欣賞各種類型的電影 🎥。
        </p>

        <p>
          感謝你花時間閱讀我的介紹，
          如果對我的經歷有任何疑問，或對網站內容有建議，
          都非常歡迎與我聯繫交流。
        </p>
      </div>
    </section>

    <ExperienceTimeline />

    <ContactSection />
  </main>
</template>
