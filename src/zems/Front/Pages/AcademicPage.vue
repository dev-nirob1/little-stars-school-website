<script setup>
import PageHeroSection from '@/components/Section/PageHeroSection.vue'
import AcademicStructureSection from '@/components/Section/AcademicStructureSection.vue'
import SmartEducationSection from '@/components/Section/SmartEducationSection.vue'
import CurriculumSection from '@/components/Section/CurriculumSection.vue'
</script>

<template>
  <div class="academic-page">
    <PageHeroSection
      tag="একাডেমিক"
      title="আগামীর স্মার্ট কারিকুলাম ও শিক্ষা পদ্ধতি"
      subtitle="আধুনিক প্রযুক্তি এবং নৈতিক শিক্ষার সমন্বয়ে আমাদের পাঠদান কার্যক্রম।"
    />

    <main class="academic-main-content">
      <!-- Academic Structure (Classes & Routine) -->
      <AcademicStructureSection />

      <!-- Smart Education & Philosophy -->
      <SmartEducationSection />

      <!-- Downloads (Syllabus & Books) -->
      <CurriculumSection />
    </main>
  </div>
</template>

<style scoped>
.academic-main-content {
  padding: 3rem 0;
  background: white;
}
</style>
