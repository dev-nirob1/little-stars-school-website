<template>
  <section class="events-section reveal">
    <div class="container">
      <div class="events-header">
        <div class="header-content">
          <span class="section-tag">ক্যালেন্ডার</span>
          <h2 class="section-title">আসন্ন ইভেন্টসমূহ</h2>
        </div>
        <router-link to="/events" class="btn btn-outline">সকল ইভেন্ট দেখুন</router-link>
      </div>

      <div class="events-grid">
        <!-- Event Card 1 -->
        <div class="event-card-modern">
          <div class="event-date">
            <span class="day">২১</span>
            <span class="month">ফেব্রু</span>
          </div>
          <div class="event-details">
            <span class="event-category">সাংস্কৃতিক অনুষ্ঠান</span>
            <h3 class="event-title">মাতৃভাষা দিবস ও বসন্ত উৎসব</h3>
            <p class="event-info"><i class="fas fa-clock"></i> সকাল ৯:৩০ - দুপুর ১:০০</p>
          </div>
        </div>

        <!-- Event Card 2 -->
        <div class="event-card-modern">
          <div class="event-date accent-bg">
            <span class="day">২৬</span>
            <span class="month">মার্চ</span>
          </div>
          <div class="event-details">
            <span class="event-category">জাতীয় দিবস</span>
            <h3 class="event-title">স্বাধীনতা দিবস রচনা প্রতিযোগিতা</h3>
            <p class="event-info"><i class="fas fa-clock"></i> সকাল ১০:০০ - দুপুর ১২:৩০</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  padding: 80px 0;
  background: #f8fafc;
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
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin: 0;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.event-card-modern {
  background: white;
  padding: 24px;
  border-radius: var(--radius);
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid #f1f5f9;
}

.event-card-modern:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-soft);
  border-color: var(--accent);
}

.event-date {
  background: var(--primary);
  color: white;
  min-width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.event-date.accent-bg {
  background: var(--accent);
}

.event-date .day {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.event-date .month {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.event-category {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
  display: block;
}

.event-title {
  font-size: 1.1rem;
  margin: 4px 0;
  color: var(--primary);
  font-family: var(--heading-font);
}

.event-info {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.event-info i {
  color: var(--accent);
}

@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .events-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
