<script setup>
const excellenceItems = [
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
      'আপনার শিশুর যাতায়াত নিশ্চিত করতে জিপিএস ট্র্যাকিং সুবিধা সম্পন্ন নিজস্ব স্কুল ভ্যান সার্ভিস।',
  },
]
</script>

<template>
  <section class="excellence-section reveal" id="excellence">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">আমাদের বিশেষত্ব ও সুযোগ-সুবিধা</h2>
        <p class="section-desc">
          আধুনিক বিশ্বের সাথে তাল মিলিয়ে আমাদের কারিকুলাম ও সুযোগ-সুবিধা শিশুদের মেধা বিকাশে সহায়ক।
        </p>
      </div>

      <div class="excellence-grid">
        <div
          v-for="(item, index) in excellenceItems"
          :key="index"
          class="excellence-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="card-inner">
            <div class="icon-box">
              <i :class="['fas', item.icon]"></i>
              <div class="icon-glow"></div>
            </div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="card-bg-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.excellence-section {
  padding: 100px 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin: 0 0 20px;
  line-height: 1.2;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
}

.excellence-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.excellence-card {
  position: relative;
  background: white;
  border-radius: 30px;
  padding: 40px;
  border: 1px solid #f1f5f9;
  transition: all 0.5s cubic-bezier(0.2, 0, 0, 1);
  overflow: hidden;
  height: 100%;
}

.excellence-card:hover {
  transform: translateY(-12px);
  border-color: var(--accent);
  box-shadow:
    0 30px 60px -12px rgba(50, 50, 93, 0.1),
    0 18px 36px -18px rgba(0, 0, 0, 0.15);
}

.card-inner {
  position: relative;
  z-index: 2;
}

.icon-box {
  width: 70px;
  height: 70px;
  background: #f1f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 30px;
  transition: all 0.4s ease;
  position: relative;
}

.icon-glow {
  position: absolute;
  inset: 0;
  background: var(--accent);
  border-radius: inherit;
  opacity: 0;
  filter: blur(15px);
  transition: all 0.4s ease;
  z-index: -1;
}

.excellence-card:hover .icon-box {
  background: var(--primary);
  color: white;
  transform: rotate(10deg) scale(1.1);
}

.excellence-card:hover .icon-glow {
  opacity: 0.2;
}

.card-content h3 {
  font-size: 1.5rem;
  color: var(--primary);
  font-family: var(--heading-font);
  margin-bottom: 15px;
}

.card-content p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.card-bg-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at top right, rgba(var(--primary-rgb), 0.03), transparent);
  z-index: 1;
}

@media (max-width: 1024px) {
  .excellence-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .excellence-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .excellence-section {
    padding: 80px 0;
  }
}
</style>
