<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import MessageVisionSection from '@/components/Section/MessageVisionSection.vue'
import HistorySection from '@/components/Section/HistorySection.vue'
import FacilitiesSection from '@/components/Section/FacilitiesSection.vue'
import TeamSection from '@/components/Section/TeamSection.vue'
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

      <!-- Facilities Section -->
      <FacilitiesSection />

      <!-- Management & Team Section -->
      <TeamSection />
    </main>
  </div>
</template>

<style scoped>
.about-main-content {
  padding-bottom: 40px;
}
</style>
