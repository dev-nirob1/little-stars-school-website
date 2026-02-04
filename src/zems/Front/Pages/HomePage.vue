<script setup>
import HeroSection from '@/zems/Front/Components/Section/HeroSection.vue'
import FeaturesSection from '@/components/Section/FeaturesSection.vue'
import EventSection from '@/components/Section/EventSection.vue'
import TestimonialSection from '@/components/Section/TestimonialSection.vue'
</script>

<template>
  <div class="home-page">
    <HeroSection />

    <FeaturesSection />

    <EventSection />

    <TestimonialSection />

    <div class="p-10 text-center">
      <BaseTitle>Welcome to Little Stars School</BaseTitle>
      <BaseParagraph>Global registration test</BaseParagraph>
      <BaseButton class="btn btn-primary">Click Me</BaseButton>
    </div>
  </div>
</template>
