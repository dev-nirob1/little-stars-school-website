<template>
  <section class="contact-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Contact Info Card -->
        <div class="bento-item info-card">
          <h3 class="card-title">যোগাযোগ তথ্য</h3>
          <div class="info-list">
            <div class="info-item">
              <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
              <div class="text-content">
                <p class="label">অবস্থান</p>
                <p class="value">মিরপুর-১০, ঢাকা-১২১৬, বাংলাদেশ।</p>
              </div>
            </div>
            <div class="info-item">
              <div class="icon-box"><i class="fas fa-phone"></i></div>
              <div class="text-content">
                <p class="label">ফোন</p>
                <p class="value">০১৮১২-৩৪৫৬৭৮, ০২-৯৮৭৬৫৪৩</p>
              </div>
            </div>
            <div class="info-item">
              <div class="icon-box"><i class="fas fa-envelope"></i></div>
              <div class="text-content">
                <p class="label">ইমেইল</p>
                <p class="value">info@kidsgreen.edu.bd</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bento-item form-card">
          <h2 class="section-title">সরাসরি মেসেজ পাঠান</h2>
          <form @submit.prevent class="contact-form">
            <div class="form-group half">
              <label>নাম *</label>
              <input type="text" placeholder="আপনার নাম" required />
            </div>
            <div class="form-group half">
              <label>ইমেইল *</label>
              <input type="email" placeholder="example@mail.com" required />
            </div>
            <div class="form-group full">
              <label>বিষয়</label>
              <input type="text" placeholder="মেসেজের বিষয়" />
            </div>
            <div class="form-group full">
              <label>মেসেজ *</label>
              <textarea rows="5" placeholder="আপনার বিস্তারিত মেসেজ লিখুন..." required></textarea>
            </div>
            <div class="form-group full">
              <button type="submit" class="btn-submit">
                বার্তা পাঠান <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>

        <!-- Map Bento -->
        <div class="bento-item map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700312015386!2d90.3654215!3d23.8051903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x10f270cb598fef4b!2sMirpur%2010%20Roundabout!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding-bottom: 80px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.bento-item {
  background: white;
  border-radius: 24px;
  padding: 40px 24px;
  border: 1px solid #f1f5f9;
  overflow: hidden;
  height: fit-content;
}

/* Info Card */
.info-card {
  grid-column: span 4;
  background: var(--primary);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
}

.card-title {
  color: white;
  font-family: var(--heading-font);
  font-size: 1.5rem;
  margin-bottom: 32px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: center;
}

.icon-box {
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.label {
  font-size: 0.8rem;
  opacity: 0.6;
  margin-bottom: 4px;
}

.value {
  font-size: 1rem;
  font-weight: 500;
}

/* Form Card */
.form-card {
  grid-column: span 8;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
}

.section-title {
  font-family: var(--heading-font);
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 32px;
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.form-group.full {
  grid-column: span 2;
}

.form-group label {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.95rem;
  background: #f8fafc;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: white;
  box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.1);
}

.form-group textarea {
  resize: none;
}

.btn-submit {
  width: 100%;
  padding: 16px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: var(--accent);
  color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Map Card */
.map-card {
  grid-column: span 12;
  padding: 0;
  height: 500px;
  border: 1px solid #f1f5f9;
}

@media (max-width: 1024px) {
  .info-card,
  .form-card {
    grid-column: span 12;
  }
}

@media (max-width: 768px) {
  .contact-form {
    grid-template-columns: 1fr;
  }
  .form-group.half {
    grid-column: span 2;
  }
}
</style>
