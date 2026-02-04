<template>
  <section class="curriculum-section reveal">
    <div class="container">
      <div class="curriculum-box">
        <div class="content-left">
          <h3>পাঠ্যক্রম ও ডাউনলোড</h3>
          <p>প্রয়োজনীয় সিলেবাস এবং বইয়ের তালিকা এখান থেকে সংগ্রহ করুন</p>
        </div>
        <div class="action-right">
          <a href="#" class="btn-syllabus"><i class="fas fa-file-pdf"></i> সিলেবাস ২০২৬</a>
          <a href="#" class="btn-books"><i class="fas fa-book"></i> বইয়ের তালিকা</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.curriculum-section {
  padding: 24px 0 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.curriculum-box {
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.content-left h3 {
  font-size: 1.5rem;
  color: var(--primary);
  font-family: var(--heading-font);
  margin-bottom: 8px;
}

.content-left p {
  color: var(--text-muted);
  font-size: 1rem;
}

.action-right {
  display: flex;
  gap: 16px;
}

.btn-syllabus,
.btn-books {
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-syllabus {
  background: #ef4444;
  color: white;
}

.btn-books {
  background: var(--primary);
  color: white;
}

.btn-syllabus:hover,
.btn-books:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  filter: brightness(1.1);
}

@media (max-width: 768px) {
  .curriculum-box {
    flex-direction: column;
    text-align: center;
  }
  .action-right {
    width: 100%;
    flex-direction: column;
  }
  .btn-syllabus,
  .btn-books {
    justify-content: center;
  }
}
</style>
