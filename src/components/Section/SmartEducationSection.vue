<template>
  <section class="smart-education-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Smart Features -->
        <div class="bento-item smart-features">
          <span class="sub-tag">Smart Education</span>
          <h2 class="area-title">স্মার্ট ক্লাসরুম ও আইসিটি শিক্ষা</h2>
          <p class="desc-text">
            আমাদের প্রতিটি ক্লাসরুম মাল্টিমিডিয়া প্রজেক্টর এবং ইন্টারেক্টিভ লার্নিং টুলস দ্বারা
            সজ্জিত। আমরা প্লে-গ্রুপ থেকেই শিশুদের প্রযুক্তির সাথে নৈতিকভাবে পরিচিত করি।
          </p>
          <div class="feature-pills">
            <div class="feature-item">
              <div class="icon-box"><i class="fas fa-laptop-code"></i></div>
              <p>বেসিক কোডিং</p>
            </div>
            <div class="feature-item">
              <div class="icon-box"><i class="fas fa-vr-cardboard"></i></div>
              <p>অডিও-ভিজুয়াল</p>
            </div>
          </div>
        </div>

        <!-- Philosophy -->
        <div class="bento-item philosophy-box">
          <h3 class="sidebar-title">আমাদের দর্শন</h3>
          <p class="quote-text">
            "শিক্ষা মানে কেবল তথ্য মুখস্থ করা নয়, বরং নৈতিকতা এবং সৃজনশীলতার বিকাশ।"
          </p>
          <div class="philosophy-footer">
            <p class="highlight-text">১০০% ডিজিটাল কারিকুলাম</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.smart-education-section {
  padding: 24px 0;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.bento-item {
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.sub-tag {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.area-title {
  margin: 12px 0 20px;
  font-size: 2rem;
  font-family: var(--heading-font);
  color: var(--primary);
}

.desc-text {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 32px;
}

/* Smart Features Card */
.smart-features {
  grid-column: span 8;
  background: #f0fdf4;
  border: 1px solid #dcfce7;
}

.feature-pills {
  display: flex;
  gap: 24px;
}

.feature-item {
  text-align: center;
}

.icon-box {
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  color: var(--accent);
  font-size: 1.2rem;
}

.feature-item p {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
}

/* Philosophy Box */
.philosophy-box {
  grid-column: span 4;
  background: var(--primary);
  color: white;
  justify-content: space-between;
}

.sidebar-title {
  color: white;
  font-family: var(--heading-font);
  font-size: 1.5rem;
  margin-bottom: 24px;
}

.quote-text {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  font-style: italic;
}

.philosophy-footer {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.highlight-text {
  font-weight: 700;
  color: var(--accent);
}

@media (max-width: 1024px) {
  .smart-features,
  .philosophy-box {
    grid-column: span 12;
  }
}
</style>
