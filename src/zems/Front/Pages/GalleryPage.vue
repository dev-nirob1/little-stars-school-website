<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import GallerySection from '@/components/Section/GallerySection.vue'
</script>

<template>
  <div class="gallery-page">
    <PageHeroSection
      tag="গ্যালারি"
      title="আমাদের সেরা মুহূর্তগুলো"
      subtitle="শিক্ষার্থীদের বিভিন্ন কার্যক্রম এবং উৎসবের খণ্ডচিত্র।"
    />

    <main class="gallery-main-content">
      <GallerySection />
    </main>
  </div>
</template>

<style scoped>
.gallery-main-content {
  padding-top: 60px;
  background: white;
}
</style>
