<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import MessageVisionSection from '@/components/Section/MessageVisionSection.vue'
import HistorySection from '@/components/Section/HistorySection.vue'
</script>

<template>
  <div class="about-page">
    <PageHeroSection
      tag="পরিচয়"
      title="আমাদের স্বপ্নের যাত্রা শুরু এখান থেকে"
      subtitle="কিডস গ্রিন কিন্ডারগার্টেন - আগামীর স্মার্ট নাগরিক গড়ার অঙ্গীকার।"
    />

    <main class="about-main-content">
      <!-- Principal Message & Vision Section -->
      <MessageVisionSection />

      <!-- History & Traditions Section -->
      <HistorySection />
    </main>
  </div>
</template>

<style scoped>
.about-main-content {
  padding-bottom: 40px;
}
</style>
