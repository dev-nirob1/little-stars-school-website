<template>
  <section class="admission-form-section reveal">
    <div class="container">
      <div class="bento-grid">
        <div class="bento-item form-card">
          <div class="form-header">
            <h2>অনলাইন ভর্তি আবেদন</h2>
            <p>
              নিচের ফর্মটি নির্ভুলভাবে পূরণ করে আবেদন জমা দিন। আমাদের টিম আপনার সাথে যোগাযোগ করবে।
            </p>
          </div>

          <form @submit.prevent class="admission-form">
            <div class="form-group full">
              <label>শিক্ষার্থীর নাম *</label>
              <input type="text" placeholder="পুরো নাম বাংলায়" required />
            </div>

            <div class="form-group half">
              <label>শ্রেণী *</label>
              <div class="select-wrapper">
                <select required>
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <option value="play">প্লে-গ্রুপ</option>
                  <option value="nursery">নার্সারি</option>
                  <option value="class1">১ম শ্রেণী</option>
                  <option value="class2">২য় শ্রেণী</option>
                  <option value="class3">৩য় শ্রেণী</option>
                  <option value="class4">৪র্থ শ্রেণী</option>
                  <option value="class5">৫ম শ্রেণী</option>
                </select>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>

            <div class="form-group half">
              <label>জন্ম তারিখ *</label>
              <input type="date" required />
            </div>

            <div class="form-group half">
              <label>লিঙ্গ *</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" name="gender" value="male" required />
                  <span>ছেলে</span>
                </label>
                <label class="radio-label">
                  <input type="radio" name="gender" value="female" required />
                  <span>মেয়ে</span>
                </label>
              </div>
            </div>

            <div class="form-group half">
              <label>রক্তের গ্রুপ</label>
              <select>
                <option value="">নির্বাচন করুন</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div class="form-group half">
              <label>পিতা/মাতার মোবাইল নম্বর *</label>
              <input type="tel" placeholder="০১৬XXXXXXXX" required />
            </div>

            <div class="form-group half">
              <label>বর্তমান ঠিকানা *</label>
              <input type="text" placeholder="বাসা নং, রাস্তা, এলাকা" required />
            </div>

            <div class="form-group full">
              <button type="submit" class="btn-submit">
                আবেদন জমা দিন <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admission-form-section {
  padding: 24px 0 40px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.form-card {
  grid-column: span 12;
  background: white;
  border-radius: 24px;
  padding: 32px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
}

.form-header {
  margin-bottom: 32px;
  text-align: center;
}

.form-header h2 {
  font-family: var(--heading-font);
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 12px;
}

.form-header p {
  color: var(--text-muted);
  font-size: 1rem;
}

.admission-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
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
.form-group select {
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
.form-group select:focus {
  outline: none;
  border-color: var(--accent);
  background: white;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
}

.select-wrapper {
  position: relative;
}

.select-wrapper i {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

.radio-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 14px 0;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
}

.radio-label input {
  width: 18px;
  height: 18px;
  accent-color: var(--accent);
}

.btn-submit {
  width: 100%;
  padding: 18px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.btn-submit:hover {
  background: var(--accent);
  color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .form-card {
    padding: 30px 20px;
  }
  .admission-form {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .form-group.half,
  .form-group.full {
    grid-column: span 1;
  }
  .form-header h2 {
    font-size: 1.8rem;
  }
}
</style>
