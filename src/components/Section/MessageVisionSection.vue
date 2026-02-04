<template>
  <section class="message-vision-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Message -->
        <div class="bento-item principal-message">
          <div class="principal-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Principal"
            />
          </div>
          <div class="principal-content">
            <span class="sub-tag">মতামত</span>
            <h3>অধ্যক্ষের বাণী</h3>
            <p class="quote-text">
              "শিশুরাই আগামী দিনের কর্ণধার। আমরা তাদের কেবল শিক্ষিত নয়, বরং আদর্শ মানুষ হিসেবে গড়ে
              তুলতে বদ্ধপরিকর।"
            </p>
            <div class="principal-meta">
              <h4>ড. ফাতিমা নূর</h4>
              <p>অধ্যক্ষ, কিডস গ্রিন কিন্ডারগার্টেন</p>
            </div>
          </div>
        </div>

        <!-- Philosophy -->
        <div class="bento-item philosophy-card">
          <div class="philosophy-header">
            <h3>আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
            <p>
              একটি সৃজনশীল এবং প্রযুক্তিনির্ভর শিক্ষা ব্যবস্থা গড়ে তোলা যেখানে প্রতিটি শিশু তার
              লুকানো মেধা বিকাশের সুযোগ পাবে।
            </p>
          </div>
          <div class="philosophy-list">
            <div class="philosophy-item">
              <div class="check-icon"><i class="fas fa-check"></i></div>
              <p>নৈতিক ও ধর্মীয় পরিবেশ</p>
            </div>
            <div class="philosophy-item">
              <div class="check-icon"><i class="fas fa-check"></i></div>
              <p>আধুনিক স্মার্ট শিক্ষা পদ্ধতি</p>
            </div>
            <div class="philosophy-item">
              <div class="check-icon"><i class="fas fa-check"></i></div>
              <p>সৃজনশীল মেধা বিকাশ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.message-vision-section {
  padding: 80px 0 40px;
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
  background: var(--surface);
  border-radius: var(--radius);
  padding: 40px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.sub-tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 8px;
}

/* Principal Message Styles */
.principal-message {
  grid-column: span 7;
  display: flex;
  gap: 40px;
  align-items: center;
}

.principal-img-wrapper img {
  width: 220px;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: var(--shadow-soft);
}

.principal-content h3 {
  font-family: var(--heading-font);
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--primary);
}

.quote-text {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  font-style: italic;
  position: relative;
}

.principal-meta {
  margin-top: 24px;
}

.principal-meta h4 {
  font-size: 1.1rem;
  margin: 0;
  color: var(--primary);
  font-family: var(--heading-font);
}

.principal-meta p {
  font-size: 0.85rem;
  color: var(--accent);
  margin: 0;
  font-weight: 500;
}

/* Philosophy Card Styles */
.philosophy-card {
  grid-column: span 5;
  background: var(--primary);
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.philosophy-card h3 {
  color: white;
  margin-bottom: 16px;
  font-family: var(--heading-font);
  font-size: 1.5rem;
}

.philosophy-card p {
  opacity: 0.85;
  font-size: 1rem;
  line-height: 1.6;
}

.philosophy-list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.philosophy-item {
  display: flex;
  gap: 16px;
  align-items: center;
}

.check-icon {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.philosophy-item p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 1;
}

/* Responsiveness */
@media (max-width: 1024px) {
  .principal-message {
    grid-column: span 12;
  }
  .philosophy-card {
    grid-column: span 12;
  }
}

@media (max-width: 768px) {
  .principal-message {
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }
  .principal-img-wrapper img {
    width: 100%;
    max-width: 250px;
    height: auto;
  }
}
</style>
