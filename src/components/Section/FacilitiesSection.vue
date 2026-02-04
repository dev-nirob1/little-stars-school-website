<script setup>
import FacilityCard from '@/zems/Front/Components/Widget/FacilityCard.vue'

const facilities = [
  {
    icon: 'fa-microscope',
    title: 'স্মার্ট সায়েন্স ল্যাব',
    description:
      'শিশুদের কৌতুহল মেটাতে এবং হাতে-কলমে বিজ্ঞানের রহস্য শিখতে আমাদের রয়েছে সুসজ্জিত ল্যাব।',
  },
  {
    icon: 'fa-book-reader',
    title: 'বুক-শেলফ ও লাইব্রেরি',
    description:
      'গল্পের বই থেকে শুরু করে জ্ঞান-বিজ্ঞানের সহস্রাধিক বই নিয়ে আমাদের শান্ত ও স্নিগ্ধ লাইব্রেরি।',
  },
  {
    icon: 'fa-bus',
    title: 'নিরাপদ স্কুল ভ্যান',
    description:
      'আপনার শিশুর যাতায়াত নিশ্চিত করতে জিপিএস ট্র্যাকিং সুবিধা সম্পন্ন নিজস্ব স্কুল ভ্যান সার্ভিস।',
  },
]
</script>

<template>
  <section class="facilities-section reveal">
    <div class="container">
      <div class="section-header">
        <span class="sub-tag">সুযোগ-সুবিধা</span>
        <h2 class="section-title">আধুনিক বিশ্বের সাথে তাল মিলিয়ে আমাদের ক্যাম্পাস</h2>
      </div>

      <div class="facilities-grid">
        <FacilityCard
          v-for="(item, index) in facilities"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.facilities-section {
  padding: 100px 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  margin-bottom: 60px;
}

.sub-tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin: 0;
  line-height: 1.25;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .facilities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .facilities-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .section-header {
    text-align: left;
    margin-bottom: 40px;
  }
}
</style>
