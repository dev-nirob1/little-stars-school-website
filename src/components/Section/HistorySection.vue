<template>
  <section class="history-section reveal">
    <div class="container">
      <div class="history-box">
        <div class="history-header">
          <div class="header-left">
            <span class="sub-tag">ঐতিহ্য</span>
            <h2>প্রতিষ্ঠানের ইতিহাস ও ঐতিহ্য</h2>
          </div>
          <span class="est-badge">স্থাপিত: ১৯৯৬</span>
        </div>
        <div class="history-content">
          <p>
            তিন দশক আগে মিরপুরের এক কোণে ছোট ছোট স্বপ্ন নিয়ে যাত্রা শুরু করেছিল কিডস গ্রিন। আজ এটি
            হাজারো শিক্ষার্থীর পদচারণায় মুখরিত এক সাফল্যের নাম। আমরা কেবল একটি স্কুল নই, আমরা একটি
            পরিবার যেখানে প্রজন্ম থেকে প্রজন্মান্তরে আলোর দিশা ছড়িয়ে দিচ্ছি।
          </p>
          <p>
            বিগত বছরগুলোতে আমাদের শিক্ষার্থীরা জাতীয় মেধাতালিকায় স্থান করে নিয়েছে এবং দেশ-বিদেশে
            সুনামের সাথে কাজ করে যাচ্ছে। আমাদের এই পথচলায় আপনারা সাথে ছিলেন এবং আছেন এটাই আমাদের
            সবচেয়ে বড় অনুপ্রেরণা।
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-section {
  padding: 40px 0 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.history-box {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 60px;
  border: 1px solid var(--border-color);
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

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 32px;
}

.history-header h2 {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin: 0;
}

.est-badge {
  background: white;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--primary);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.history-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.history-content p {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

@media (max-width: 1024px) {
  .history-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .history-box {
    padding: 40px 24px;
  }
  .history-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
