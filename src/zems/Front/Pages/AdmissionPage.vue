<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import AdmissionPolicySection from '@/components/Section/AdmissionPolicySection.vue'
import AdmissionFormSection from '@/components/Section/AdmissionFormSection.vue'
import AdmissionFeeSection from '@/components/Section/AdmissionFeeSection.vue'
import AdmissionFAQSection from '@/components/Section/AdmissionFAQSection.vue'
</script>

<template>
  <div class="admission-page">
    <PageHeroSection
      tag="ভর্তি চলছে"
      title="আপনার শিশুর শিক্ষার সোনালী সূচনা হোক আমাদের সাথে"
      subtitle="২০২৬ শিক্ষাবর্ষে প্লে থেকে ৫ম শ্রেণী পর্যন্ত ভর্তি কার্যক্রম পরিচালনা করা হচ্ছে।"
    />

    <main class="admission-main-content">
      <AdmissionPolicySection />
      <AdmissionFormSection />
      <AdmissionFeeSection />
      <AdmissionFAQSection />
    </main>
  </div>
</template>

<style scoped>
.admission-main-content {
  padding-top: 60px;
  background: white;
}
</style>
