<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    id: 1,
    text: '২০২৬ সালের এই নতুন ডিজিটাল লার্নিং সিস্টেম আমার বাচ্চার পড়াশোনার প্রতি আগ্রহ অনেক বাড়িয়ে দিয়েছে। বিশেষ করে অ্যাপের মাধ্যমে আপডেট পাওয়া এবং আধুনিক ক্লাসরুমের পরিবেশ সত্যিই প্রশংসনীয়। মিরপুর এলাকার সেরা স্কুল!',
    name: 'মি. আসলাম হোসাইন',
    role: 'অভিভাবক, ৩য় শ্রেণী',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    text: 'কিডস গ্রিন কিন্ডারগার্টেনের শিক্ষকদের আন্তরিকতা আমাদের মুগ্ধ করেছে। আমার সন্তান এখানে এসে শুধু পড়াশোনা নয়, নৈতিক মূল্যবোধও শিখছে। তাদের স্মার্ট ক্লাসরুম এবং খেলার জায়গাগুলো খুবই অত্যাধুনিক।',
    name: 'মিসেস নাজমিন আক্তার',
    role: 'অভিভাবক, নার্সারি',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    text: 'বাচ্চাদের সৃজনশীল বিকাশে এই স্কুলের গুরুত্ব অপরিসীম। আর্ট, মিউজিক এবং স্পোর্টস কার্যক্রমগুলো দারুণভাবে পরিচালিত হয়। আমি বিশ্বাস করি এটিই আগামী দিনের আধুনিক শিক্ষার উপযুক্ত স্থান।',
    name: 'ডা. রাশেদ আহমেদ',
    role: 'অভিভাবক, ২য় শ্রেণী',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
]

const activeIndex = ref(0)
let timer = null

const startAutoPlay = () => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length
  }, 5000)
}

const stopAutoPlay = () => {
  if (timer) clearInterval(timer)
}

const goToSlide = (index) => {
  activeIndex.value = index
  stopAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section class="testimonials-section reveal">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">মতামত</span>
        <h2 class="section-title">অভিভাবকরা আমাদের সম্পর্কে যা বলেন</h2>
      </div>

      <div class="testimonial-slider">
        <transition name="fade-slide" mode="out-in">
          <div :key="activeIndex" class="testimonial-card-modern">
            <i class="fas fa-quote-right quote-icon"></i>
            <p class="testimonial-text">"{{ testimonials[activeIndex].text }}"</p>
            <div class="parent-meta">
              <img
                :src="testimonials[activeIndex].image"
                :alt="testimonials[activeIndex].name"
                class="parent-img"
              />
              <div class="parent-info">
                <h4 class="parent-name">{{ testimonials[activeIndex].name }}</h4>
                <p class="parent-class">{{ testimonials[activeIndex].role }}</p>
              </div>
            </div>
          </div>
        </transition>

        <div class="pagination-dots">
          <span
            v-for="(dot, index) in testimonials"
            :key="index"
            class="dot"
            :class="{ active: index === activeIndex }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 100px 0;
  background: white;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-family: var(--heading-font);
  color: var(--primary);
}

.testimonial-slider {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-card-modern {
  max-width: 800px;
  width: 100%;
  background: var(--surface);
  padding: 48px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  position: relative;
  text-align: left;
}

.quote-icon {
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 2.5rem;
  color: var(--accent);
  opacity: 0.15;
}

.testimonial-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-main);
  margin-bottom: 32px;
  font-style: italic;
  min-height: 100px;
}

.parent-meta {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
}

.parent-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent);
}

.parent-info {
  text-align: left;
}

.parent-name {
  font-size: 1rem;
  margin: 0;
  color: var(--primary);
  font-family: var(--heading-font);
}

.parent-class {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cbd5e1;
  transition: var(--transition);
  cursor: pointer;
}

.dot:hover {
  background: var(--accent);
  opacity: 0.7;
}

.dot.active {
  background: var(--accent);
  transform: scale(1.2);
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }

  .testimonial-card-modern {
    padding: 32px 24px;
  }

  .testimonial-text {
    font-size: 1.05rem;
  }
}
</style>
