<template>
  <section class="admission-policy-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Policy Card -->
        <div class="bento-item policy-card">
          <h3 class="card-title">ভর্তির নিয়মাবলী</h3>
          <ul class="policy-list">
            <li class="policy-item">
              <i class="fas fa-check-circle"></i>
              <span>৩ থেকে ১০ বছরের শিশুরা ভর্তির জন্য যোগ্য বলে বিবেচিত হবে।</span>
            </li>
            <li class="policy-item">
              <i class="fas fa-check-circle"></i>
              <span>অনলাইন বা স্কুল অফিস থেকে নির্ধারিত ফি জমা দিয়ে ফর্ম সংগ্রহ করতে হবে।</span>
            </li>
            <li class="policy-item">
              <i class="fas fa-check-circle"></i>
              <span>শিক্ষার্থীর ২ কপি পাসপোর্ট সাইজ ছবি এবং জন্ম সনদের কপি জমা দিতে হবে।</span>
            </li>
          </ul>

          <div class="contact-box">
            <h4>ভর্তি বিষয়ক জিজ্ঞাসা:</h4>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>০১৮১২-৩৪৫৬৭৮</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>admission@kidsgreen.edu.bd</span>
            </div>
          </div>
        </div>

        <!-- Visual/Decoration Card -->
        <div class="bento-item decor-card">
          <div class="decor-content">
            <div class="icon-orbit">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>আপনার শিশুর উজ্জ্বল ভবিষ্যৎ শুরু হোক এখান থেকেই</h3>
            <p>আমরা কেবল শিক্ষিত নয়, বরং আদর্শ মানুষ হিসেবে গড়ে তুলতে বদ্ধপরিকর।</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admission-policy-section {
  padding-bottom: 40px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.bento-item {
  border-radius: 24px;
  padding: 40px;
  border: 1px solid #f1f5f9;
}

/* Policy Card */
.policy-card {
  grid-column: span 7;
  background: var(--primary);
  color: white;
  border: none;
}

.card-title {
  color: white;
  font-family: var(--heading-font);
  font-size: 1.8rem;
  margin-bottom: 32px;
}

.policy-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.policy-item {
  display: flex;
  gap: 16px;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
}

.policy-item i {
  color: var(--accent);
  margin-top: 4px;
  font-size: 1.1rem;
}

.contact-box {
  margin-top: 48px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-box h4 {
  color: white;
  margin-bottom: 16px;
  font-size: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 8px;
}

.contact-item i {
  color: var(--accent);
}

/* Decor Card */
.decor-card {
  grid-column: span 5;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.decor-content {
  max-width: 300px;
}

.icon-orbit {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--primary);
  margin: 0 auto 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
}

.icon-orbit::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px dashed var(--accent);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.decor-card h3 {
  font-family: var(--heading-font);
  font-size: 1.4rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.decor-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .policy-card,
  .decor-card {
    grid-column: span 12;
  }
}
</style>
