<template>
  <section class="admission-faq-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- FAQ Content -->
        <div class="bento-item faq-content">
          <h2 class="section-title">সচরাচর কিছু প্রশ্ন (FAQ)</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h4>ভর্তির কি কোনো নির্দিষ্ট বয়স আছে?</h4>
              <p>
                হ্যাঁ, প্লে গ্রুপের জন্য সর্বনিম্ন ৩ বছর বয়স হতে হবে এবং ৫ম শ্রেণীর জন্য সর্বোচ্চ ১০
                বছর।
              </p>
            </div>
            <div class="faq-item">
              <h4>অনলাইনে কি পেমেন্ট করা যাবে?</h4>
              <p>
                জি, বিকাশ, নগদ বা রকেটের মাধ্যমে আপনি যেকোনো ফি অত্যন্ত সহজে পরিশোধ করতে পারবেন।
              </p>
            </div>
            <div class="faq-item">
              <h4>অফিস কি শুক্রবার খোলা থাকে?</h4>
              <p>
                স্কুল অফিস শনিবার থেকে বৃহস্পতিবার সকাল ৮টা থেকে বিকাল ৪টা পর্যন্ত খোলা থাকে।
                শুক্রবারে অফিস বন্ধ থাকে।
              </p>
            </div>
          </div>
        </div>

        <!-- Support Card -->
        <div class="bento-item support-card">
          <div class="support-icon"><i class="fas fa-headset"></i></div>
          <h3>আরো কিছু জানার আছে?</h3>
          <p>আমাদের সাপোর্ট টিম আপনার যেকোনো জিজ্ঞাসায় সহায়তার জন্য প্রস্তুত।</p>
          <router-link to="/contact" class="btn-contact">
            মেসেজ দিন <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admission-faq-section {
  padding: 40px 0 100px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.bento-item {
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid #f1f5f9;
}

/* FAQ Content */
.faq-content {
  grid-column: span 8;
}

.section-title {
  font-family: var(--heading-font);
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 32px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  padding: 24px;
  background: white;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  border-left: 4px solid var(--accent);
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
}

.faq-item h4 {
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.faq-item p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Support Card */
.support-card {
  grid-column: span 4;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px dashed #e2e8f0;
}

.support-icon {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 24px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.support-card h3 {
  font-family: var(--heading-font);
  font-size: 1.4rem;
  color: var(--primary);
  margin-bottom: 12px;
}

.support-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 28px;
}

.btn-contact {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-contact:hover {
  background: var(--accent);
  color: var(--primary);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .faq-content,
  .support-card {
    grid-column: span 12;
  }
}
</style>
