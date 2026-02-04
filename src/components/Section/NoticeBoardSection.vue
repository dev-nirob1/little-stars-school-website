<script setup>
const notices = [
  {
    id: 1,
    type: 'Academic',
    category: 'একাডেমিক',
    categoryClass: 'cat-academic',
    title: 'প্রথম সাময়িক পরীক্ষার সময়সূচী প্রকাশ',
    date: '০৪ ফেব্রুয়ারি, ২০২৬',
    actionIcon: 'fa-download',
  },
  {
    id: 2,
    type: 'General',
    category: 'সাধারণ',
    categoryClass: 'cat-general',
    title: 'শীতকালীন ড্রেস কোড পরিবর্তন সংক্রান্ত',
    date: '০২ ফেব্রুয়ারি, ২০২৬',
    actionIcon: 'fa-eye',
  },
  {
    id: 3,
    type: 'Holiday',
    category: 'ছুটি',
    categoryClass: 'cat-holiday',
    title: 'শবে বারাত উপলক্ষ্যে স্কুল বন্ধের নোটিশ',
    date: '৩০ জানুয়ারি, ২০২৬',
    actionIcon: 'fa-download',
  },
]

const upcomingEvents = [
  { date: '২১ ফেব্রুয়ারি', title: 'শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস' },
  { date: '২৬ মার্চ', title: 'স্বাধীনতা দিবস ও জাতীয় দিবস' },
]
</script>

<template>
  <section class="notice-board-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Top Urgent Notice -->
        <div class="bento-item urgent-notice-bar">
          <div class="urgent-content">
            <div class="urgent-icon">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="urgent-text">
              <h3>জরুরি: বার্ষিক ফি জমা দেওয়ার শেষ তারিখ</h3>
              <p>তারিখ: ১৫ ফেব্রুয়ারি, ২০২৬</p>
            </div>
          </div>
          <router-link to="/notice" class="btn-urgent"> বিস্তারিত দেখুন </router-link>
        </div>

        <!-- Notice List (Main Area) -->
        <div class="bento-item main-notice-list">
          <div class="list-wrapper">
            <div v-for="notice in notices" :key="notice.id" class="notice-item">
              <div class="notice-info">
                <span :class="['notice-category', notice.categoryClass]">
                  {{ notice.category }}
                </span>
                <h4 class="notice-title">{{ notice.title }}</h4>
                <p class="notice-date">{{ notice.date }}</p>
              </div>
              <a href="#" class="notice-action">
                <i :class="['fas', notice.actionIcon]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar Info -->
        <div class="bento-item calendar-sidebar">
          <h3 class="sidebar-title">ক্যালেন্ডার</h3>
          <div class="calendar-list">
            <div v-for="(event, index) in upcomingEvents" :key="index" class="calendar-card">
              <h4 class="event-date">{{ event.date }}</h4>
              <p class="event-name">{{ event.title }}</p>
            </div>
          </div>

          <div class="calendar-download-box">
            <p>অ্যাকাডেমিক ক্যালেন্ডার ২০২৬ ডাউনলোড করুন</p>
            <a href="#" class="btn-download"> ডাউনলোড <i class="fas fa-file-pdf"></i> </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.notice-board-section {
  padding-bottom: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.bento-item {
  background: white;
  border-radius: 20px;
  padding: 32px;
  border: 1px solid #f1f5f9;
}

/* Urgent Notice Bar */
.urgent-notice-bar {
  grid-column: span 12;
  background: #fff1f2;
  border-color: #fda4af;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
}

.urgent-content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.urgent-icon {
  width: 50px;
  height: 50px;
  background: #e11d48;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.urgent-text h3 {
  color: #9f1239;
  font-size: 1.15rem;
  margin-bottom: 4px;
  font-family: var(--heading-font);
}

.urgent-text p {
  color: #e11d48;
  font-size: 0.9rem;
  font-weight: 700;
}

.btn-urgent {
  background: #e11d48;
  color: white;
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-urgent:hover {
  background: #be123c;
  transform: translateY(-2px);
}

/* Main Notice List */
.main-notice-list {
  grid-column: span 8;
  padding: 12px 32px;
}

.notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #f1f5f9;
}

.notice-item:last-child {
  border-bottom: none;
}

.notice-category {
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 700;
  text-transform: uppercase;
}

.cat-academic {
  background: #ecfdf5;
  color: #059669;
}
.cat-general {
  background: #fef9c3;
  color: #a16207;
}
.cat-holiday {
  background: #eff6ff;
  color: #1d4ed8;
}

.notice-title {
  margin: 12px 0 6px;
  font-size: 1.1rem;
  color: var(--primary);
  font-family: var(--heading-font);
}

.notice-date {
  font-size: 0.85rem;
  color: #94a3b8;
}

.notice-action {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f8fafc;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.notice-action:hover {
  background: var(--primary);
  color: white;
  transform: scale(1.1);
}

/* Calendar Sidebar */
.calendar-sidebar {
  grid-column: span 4;
  background: var(--primary);
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
}

.sidebar-title {
  color: white;
  margin-bottom: 24px;
  font-family: var(--heading-font);
  font-size: 1.5rem;
}

.calendar-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.calendar-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.calendar-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.event-date {
  color: var(--accent);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.event-name {
  font-size: 0.9rem;
  opacity: 0.85;
}

.calendar-download-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  margin-top: auto;
}

.calendar-download-box p {
  font-size: 0.85rem;
  margin-bottom: 16px;
  opacity: 0.9;
}

.btn-download {
  background: var(--accent);
  color: var(--primary);
  padding: 12px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-download:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .main-notice-list,
  .calendar-sidebar {
    grid-column: span 12;
  }
}

@media (max-width: 768px) {
  .urgent-notice-bar {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
</style>
