<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import NoticeBoardSection from '@/components/Section/NoticeBoardSection.vue'
</script>

<template>
  <div class="notice-page">
    <PageHeroSection
      tag="নোটিশ বোর্ড"
      title="প্রতিষ্ঠানের সকল নোটিশ এখানে পাওয়া যাবে"
      subtitle="গুরুত্বপূর্ণ আপডেট এবং ঘোষণার জন্য আমাদের নোটিশ বোর্ড অনুসরণ করুন।"
    />

    <main class="notice-main-content">
      <NoticeBoardSection />
    </main>
  </div>
</template>

<style scoped>
.notice-main-content {
  padding: 60px 0 20px;
  background: #f8fafc;
}
</style>
