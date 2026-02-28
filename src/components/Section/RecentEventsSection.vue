<script setup>
import { ref } from 'vue'

const eventPhotos = [
  {
    id: 1,
    image: '/images/gallery_sports_1.png',
    title: 'বার্ষিক ক্রীড়া ২০২৬',
    category: 'খেলাধুলা',
  },
  {
    id: 2,
    image: '/images/gallery_edu_1.png',
    title: 'ডিজিটাল ক্লাসরুম অ্যাক্টিভিটি',
    category: 'শিক্ষা',
  },
  {
    id: 3,
    image: '/images/gallery_cultural_1.png',
    title: 'চিত্রাঙ্কন প্রতিযোগিতা',
    category: 'সাংস্কৃতিক',
  },
  {
    id: 4,
    image: '/images/gallery_sports_2.png',
    title: 'স্কুল বাগান ও খেলাধুলা',
    category: 'খেলাধুলা',
  },
  {
    id: 5,
    image: '/images/gallery_edu_2.png',
    title: 'সায়েন্স ল্যাব সেশন',
    category: 'শিক্ষা',
  },
  {
    id: 6,
    image: '/images/gallery_garden.png',
    title: 'স্কুল বাগান কার্যক্রম',
    category: 'শিক্ষা',
  },
]
</script>

<template>
  <section class="recent-events reveal">
    <div class="container">
      <div class="events-header">
        <div class="header-content">
          <span class="section-tag">সাম্প্রতিক ইভেন্ট</span>
          <h2 class="section-title">আমাদের ইভেন্ট থেকে কিছু ছবি</h2>
        </div>
        <router-link to="/gallery" class="view-all-link">
          সব ছবি দেখুন <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>

      <div class="events-grid">
        <div
          v-for="(photo, index) in eventPhotos"
          :key="photo.id"
          class="event-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="image-box">
            <img :src="photo.image" :alt="photo.title" loading="lazy" />
            <div class="card-overlay">
              <span class="photo-category">{{ photo.category }}</span>
              <h3 class="photo-title">{{ photo.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.recent-events {
  padding: 80px 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.events-header {
  margin-bottom: 48px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.section-tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 4px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin: 0;
}

.view-all-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  font-size: 0.95rem;
}

.view-all-link:hover {
  color: var(--accent);
  transform: translateX(5px);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.event-card {
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.image-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.event-card:hover .image-box img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  opacity: 0;
  transition: all 0.4s ease;
}

.event-card:hover .card-overlay {
  opacity: 1;
}

.photo-category {
  color: var(--accent, #f59e0b);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  transform: translateY(10px);
  transition: all 0.4s ease 0.1s;
}

.photo-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  transform: translateY(10px);
  transition: all 0.4s ease 0.2s;
}

.event-card:hover .photo-category,
.event-card:hover .photo-title {
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .events-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .event-card {
    aspect-ratio: 16/10;
  }
}
</style>
