<template>
  <section class="admission-fee-section reveal">
    <div class="container">
      <div class="section-header">
        <span class="sub-tag">খরচ ও ফি</span>
        <h2>মাসিক বেতন ও অন্যান্য ফি (২০২৬)</h2>
        <p>শ্রেণীভেদে আমাদের ফির তালিকা নিচে দেওয়া হলো।</p>
      </div>

      <div class="fee-grid">
        <div class="fee-card">
          <div class="fee-icon"><i class="fas fa-baby"></i></div>
          <p class="class-range">প্লে - নার্সারি</p>
          <h4 class="amount">৳ ১,৫০০</h4>
          <p class="period">প্রতি মাস</p>
          <ul class="fee-details">
            <li><i class="fas fa-check"></i> সব শিক্ষা উপকরণ</li>
            <li><i class="fas fa-check"></i> ডিজিটাল ল্যাব অ্যাক্সেস</li>
          </ul>
        </div>

        <div class="fee-card highlighted">
          <div class="pop-tag">জনপ্রিয়</div>
          <div class="fee-icon"><i class="fas fa-child"></i></div>
          <p class="class-range">১ম - ৩য় শ্রেণী</p>
          <h4 class="amount">৳ ১,৮০০</h4>
          <p class="period">প্রতি মাস</p>
          <ul class="fee-details">
            <li><i class="fas fa-check"></i> এক্সট্রা কারিকুলাম</li>
            <li><i class="fas fa-check"></i> লাইব্রেরি সদস্যপদ</li>
          </ul>
        </div>

        <div class="fee-card">
          <div class="fee-icon"><i class="fas fa-user-graduate"></i></div>
          <p class="class-range">৪র্থ - ৫ম শ্রেণী</p>
          <h4 class="amount">৳ ২,০০০</h4>
          <p class="period">প্রতি মাস</p>
          <ul class="fee-details">
            <li><i class="fas fa-check"></i> বিশেষ কম্পিউটার প্রশিক্ষণ</li>
            <li><i class="fas fa-check"></i> সেমিনার ও কর্মশালা</li>
          </ul>
        </div>
      </div>

      <div class="fee-note">
        <p>* ভর্তির সময় এককালীন ১০,০০০ টাকা (ডেভেলপমেন্ট ফি) প্রযোজ্য হবে।</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admission-fee-section {
  padding: 60px 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.sub-tag {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}

.section-header h2 {
  font-family: var(--heading-font);
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.section-header p {
  color: var(--text-muted);
}

.fee-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.fee-card {
  background: white;
  padding: 48px 32px;
  border-radius: 24px;
  text-align: center;
  border: 1px solid #f1f5f9;
  transition: all 0.4s ease;
  position: relative;
}

.fee-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.fee-card.highlighted {
  background: var(--primary);
  color: white;
  border: none;
  transform: scale(1.05);
}

.fee-card.highlighted:hover {
  transform: scale(1.05) translateY(-10px);
}

.fee-icon {
  width: 64px;
  height: 64px;
  background: #f1f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  margin: 0 auto 24px;
}

.fee-card.highlighted .fee-icon {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent);
}

.class-range {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.fee-card.highlighted .class-range {
  color: rgba(255, 255, 255, 0.7);
}

.amount {
  font-size: 2.5rem;
  color: var(--primary);
  font-weight: 800;
  margin-bottom: 4px;
}

.fee-card.highlighted .amount {
  color: white;
}

.period {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.fee-card.highlighted .period {
  color: rgba(255, 255, 255, 0.5);
}

.fee-details {
  list-style: none;
  padding: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fee-details li {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fee-details i {
  color: var(--accent);
  font-size: 0.8rem;
}

.pop-tag {
  position: absolute;
  top: 24px;
  right: 24px;
  background: var(--accent);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
}

.fee-note {
  margin-top: 48px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-style: italic;
}

@media (max-width: 1024px) {
  .fee-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .fee-card.highlighted {
    transform: none;
  }
  .fee-card.highlighted:hover {
    transform: translateY(-10px);
  }
}
</style>
