<template>
  <!-- Hero Bento Section -->
  <section class="hero-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Main Hero Box -->
        <div class="bento-item bento-hero">
          <span class="hero-tag">২০২৬ নিউ-এরা লার্নিং</span>
          <h2>
            শিশুর উজ্জ্বল ভবিষ্যতের <br />
            আধুনিক রূপকার
          </h2>
          <p>
            আমরা পুঁথিগত বিদ্যার চেয়ে শিশুর সৃজনশীলতা এবং নৈতিক বিকাশে বেশি বিশ্বাসী। ২০২৬ সালের
            আধুনিক শিক্ষা পদ্ধতিতে আপনার শিশুকে গড়ে তুলুন আমাদের সাথে।
          </p>
          <div class="hero-btns">
            <router-link to="/about" class="btn btn-secondary">গাইডলাইন দেখুন</router-link>
            <router-link to="/result" class="btn btn-outline-white">রেজাল্ট পোর্টাল</router-link>
          </div>
        </div>

        <!-- Notice Box -->
        <router-link to="/notice" class="bento-item bento-notice">
          <div class="notice-header">
            <h4>নোটিশ বোর্ড</h4>
            <i class="fas fa-arrow-right"></i>
          </div>
          <div class="notice-list">
            <div class="notice-item active">
              <p class="notice-title">শীতকালীন ছুটির নোটিশ</p>
              <p class="notice-date">প্রকাশিত: ০২ ফেব্রুয়ারি, ২০২৬</p>
            </div>
            <div class="notice-item">
              <p class="notice-title">বার্ষিক ক্রীড়া প্রতিযোগিতার তারিখ</p>
              <p class="notice-date">প্রকাশিত: ৩০ জানুয়ারি, ২০২৬</p>
            </div>
          </div>
        </router-link>

        <!-- Stats Box -->
        <div class="bento-item bento-stats">
          <div class="stat-box">
            <h4>১০০%</h4>
            <p>সাফল্য</p>
          </div>
          <div class="stat-box">
            <h4>৫০০+</h4>
            <p>শিক্ষার্থী</p>
          </div>
          <div class="stat-box">
            <h4>২৫+</h4>
            <p>শিক্ষক</p>
          </div>
          <div class="stat-box">
            <h4>৩০+</h4>
            <p>অভিজ্ঞতা</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bento Hero Base */
.hero-section {
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: var(--base);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 24px;
}

.bento-item {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.bento-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-soft);
}

.bento-hero {
  grid-column: span 8;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background:
    linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)),
    url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200');
  background-size: cover;
  background-position: center;
}

.hero-tag {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--accent);
  font-size: 0.8rem;
  margin-bottom: 16px;
  display: block;
}

.bento-hero h2 {
  color: white;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 24px;
  font-family: var(--heading-font);
}

.bento-hero p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 32px;
  max-width: 500px;
}

.hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-outline-white {
  padding: 10px 24px;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: var(--transition);
  font-size: 0.95rem;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  text-align: center;
}

.btn-outline-white:hover {
  background: white;
  color: var(--primary);
}

/* Notice Styles */
.bento-notice {
  grid-column: span 4;
  grid-row: span 1;
  background: var(--accent);
  color: white;
  cursor: pointer;
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bento-notice h3 {
  color: white;
  margin-bottom: 12px;
  font-family: var(--heading-font);
}

.notice-list {
  margin-top: 24px;
}

.notice-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 12px;
  transition: var(--transition);
}

.notice-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.notice-title {
  font-size: 0.85rem;
  font-weight: 600;
}

.notice-date {
  font-size: 0.75rem;
  opacity: 0.8;
}

/* Stats Styles */
.bento-stats {
  grid-column: span 4;
  grid-row: span 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-box {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: var(--transition);
}

.stat-box:hover {
  border-color: var(--accent);
  background: #f8fafc;
}

.stat-box h4 {
  font-size: 1.5rem;
  color: var(--accent);
  margin: 0;
}
.stat-box p {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
}

/* Responsiveness */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .bento-hero {
    grid-column: span 2;
  }

  .bento-notice,
  .bento-stats {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 100px;
  }

  .bento-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .bento-hero,
  .bento-notice,
  .bento-stats {
    grid-column: span 1;
  }

  .bento-hero h2 {
    font-size: 2.2rem;
  }
}
</style>
