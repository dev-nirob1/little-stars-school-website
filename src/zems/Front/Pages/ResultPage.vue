<script setup>
import { ref } from 'vue'

const studentClass = ref('')
const studentRoll = ref('')
const examType = ref('')

const handleSearch = () => {
  console.log('Searching for:', {
    class: studentClass.value,
    roll: studentRoll.value,
    exam: examType.value,
  })
}
</script>

<template>
  <div class="result-page">
    <section class="result-section">
      <div class="container">
        <div class="result-container">
          <!-- Main Portal Card -->
          <div class="portal-card animate-in">
            <div class="portal-header">
              <div class="icon-circle">
                <i class="fas fa-graduation-cap"></i>
                <div class="circle-glow"></div>
              </div>
              <h1>রেজাল্ট পোর্টাল</h1>
              <p>আপনার শিক্ষার্থীর তথ্য দিয়ে ফলাফল চেক করুন</p>
            </div>

            <form @submit.prevent="handleSearch" class="result-form">
              <div class="form-group">
                <label>শ্রেণী (Class) *</label>
                <select v-model="studentClass" class="form-select">
                  <option value="">নির্বাচন করুন</option>
                  <option value="play">প্লে-গ্রুপ</option>
                  <option value="nursery">নার্সারি</option>
                  <option value="kg">কেজি</option>
                </select>
              </div>

              <div class="form-group">
                <label>রোল নম্বর (Roll Number) *</label>
                <input v-model="studentRoll" type="text" placeholder="KG-XXXX" class="form-input" />
              </div>

              <div class="form-group">
                <label>পরীক্ষার ধরণ (Exam Type) *</label>
                <select v-model="examType" class="form-select">
                  <option value="">নির্বাচন করুন</option>
                  <option value="half-yearly">অর্ধ-বার্ষিক পরীক্ষা ২০২৬</option>
                  <option value="final">বার্ষিক পরীক্ষা ২০২৬</option>
                  <option value="model-test">মডেল টেস্ট</option>
                </select>
              </div>

              <button type="submit" class="submit-btn highlight-hover">
                <span>ফলাফল দেখুন</span>
                <i class="fas fa-search"></i>
              </button>
            </form>

            <div class="portal-footer">
              <a href="tel:0181234" class="helpline">
                <i class="fas fa-phone-alt"></i>
                হেল্পলাইন: ০১৮১২-৩৪
              </a>
            </div>
          </div>

          <!-- Quick Links Grid -->
          <div class="quick-links-grid">
            <div class="quick-link-card animate-in" style="animation-delay: 0.1s">
              <div class="link-icon"><i class="fas fa-download"></i></div>
              <p>একাডেমিক ট্রান্সক্রিপ্ট</p>
            </div>
            <div class="quick-link-card animate-in" style="animation-delay: 0.2s">
              <div class="link-icon"><i class="fas fa-award"></i></div>
              <p>মেরিট লিস্ট ২০২৬</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.result-page {
  background: #f8fafc;
  min-height: 100vh;
}

.result-section {
  padding: 160px 0 100px;
}

.result-container {
  max-width: 600px;
  margin: 0 auto;
}

.portal-card {
  background: white;
  padding: 48px;
  border-radius: 32px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.portal-header {
  margin-bottom: 40px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  background: #ecfdf5;
  color: var(--accent);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  position: relative;
  transition: transform 0.3s ease;
}

.portal-card:hover .icon-circle {
  transform: translateY(-5px) rotate(5deg);
}

.circle-glow {
  position: absolute;
  inset: -10px;
  background: var(--accent);
  opacity: 0.1;
  filter: blur(20px);
  border-radius: 50%;
  z-index: -1;
}

.portal-header h1 {
  font-size: 2.2rem;
  color: var(--primary);
  font-family: var(--heading-font);
  margin-bottom: 12px;
}

.portal-header p {
  color: var(--text-muted);
  font-size: 1.05rem;
}

.result-form {
  text-align: left;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #475569;
}

.form-input,
.form-select {
  width: 100%;
  padding: 16px;
  border: 2px solid #f1f5f9;
  border-radius: 16px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8fafc;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--accent);
  background: white;
  box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.1);
}

.submit-btn {
  width: 100%;
  padding: 18px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 18px;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.portal-footer {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: center;
}

.helpline {
  color: #64748b;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.helpline:hover {
  color: var(--accent);
}

.quick-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 24px;
}

.quick-link-card {
  background: white;
  padding: 32px 24px;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.quick-link-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.link-icon {
  width: 48px;
  height: 48px;
  background: #f1f5f9;
  color: var(--primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.quick-link-card:hover .link-icon {
  background: var(--primary);
  color: white;
}

.quick-link-card p {
  font-family: var(--heading-font);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-in {
  animation: fadeInScale 0.8s cubic-bezier(0.2, 0, 0, 1) backwards;
}

@media (max-width: 640px) {
  .portal-card {
    padding: 32px 24px;
  }
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
