<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
</script>

<template>
  <div class="about-page">
    <PageHeroSection
      tag="পরিচয়"
      title="আমাদের স্বপ্নের যাত্রা শুরু এখান থেকে"
      subtitle="কিডস গ্রিন কিন্ডারগার্টেন - আগামীর স্মার্ট নাগরিক গড়ার অঙ্গীকার।"
    />

    <main class="about-main-content">
      <div class="container">
        <div class="content-placeholder-area">
          <p>আপনার কন্টেন্টের জন্য অপেক্ষা করছি...</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.about-main-content {
  padding: 60px 0;
  background: white;
}

.content-placeholder-area {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.1rem;
}
</style>
