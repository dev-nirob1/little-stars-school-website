<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import ContactSection from '@/components/Section/ContactSection.vue'
</script>

<template>
  <div class="contact-page">
    <PageHeroSection
      tag="যোগাযোগ"
      title="আপনাদের যেকোনো জিজ্ঞাসায় আমরা আছি সাথে"
      subtitle="আমাদের সাথে সরাসরি যোগাযোগ করুন অথবা মেসেজ পাঠান।"
    />

    <main class="contact-main-content">
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.contact-main-content {
  padding-top: 60px;
  background: white;
}
</style>
