<script setup>
import FeatureCard from '@/zems/Front/Components/Widget/FeatureCard.vue'

const features = [
  {
    icon: 'fa-brain',
    title: 'সৃজনশীল শিক্ষা',
    description: 'আমরা শিশুদের মুখস্ত বিদ্যার বদলে প্র্যাকটিক্যাল লার্নিংয়ে উৎসাহিত করি।',
  },
  {
    icon: 'fa-shield-alt',
    title: 'নিরাপদ ক্যাম্পাস',
    description: 'সিসিটিভি এবং দক্ষ সিকিউরিটি গার্ড দ্বারা আমাদের পুরো ক্যাম্পাস সংরক্ষিত।',
  },
  {
    icon: 'fa-laptop-code',
    title: 'ডিজিটাল ক্লাস',
    description: 'প্রতিটি ক্লাসরুমে রয়েছে স্মার্ট বোর্ড এবং মাল্টিমিডিয়া প্রজেক্টর ব্যবস্থা।',
  },
]
</script>

<template>
  <section class="features-section reveal">
    <div class="container">
      <div class="features-header">
        <div class="header-content">
          <span class="section-tag">বিশেষত্ব</span>
          <h2 class="section-title">কেন আমরা সেরা?</h2>
        </div>
        <p class="section-desc">
          আধুনিক বিশ্বের সাথে তাল মিলিয়ে আমাদের কারিকুলাম শিশুদের মেধা বিকাশে সহায়ক।
        </p>
      </div>

      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 100px 0;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.features-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.section-tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin: 0;
}

.section-desc {
  max-width: 450px;
  color: var(--text-muted);
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .features-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
  }

  .section-desc {
    max-width: 100%;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
