<script setup>
const classes = [
  { label: 'P', name: 'প্লে-গ্রুপ', age: 'বয়স: ৩+ বছর', bg: '#e3f2fd', color: '#1565c0' },
  { label: 'N', name: 'নার্সারি', age: 'বয়স: ৪+ বছর', bg: '#fff3e0', color: '#ef6c00' },
  { label: '১', name: 'প্রথম শ্রেণী', age: 'বয়স: ৫+ বছর', bg: '#e8f5e9', color: '#2e7d32' },
  { label: '৫', name: 'পঞ্চম শ্রেণী', age: 'প্রাথমিক সমাপনী', bg: '#f3e5f5', color: '#7b1fa2' },
]

const schedule = [
  { group: 'প্লে - নার্সারি', time: 'সকাল ৮:০০ - ১১:৩০' },
  { group: '১ম - ৫ম শ্রেণী', time: 'সকাল ৮:০০ - ১:৪৫' },
  { group: 'অফিস টাইম', time: 'সকাল ৭:৪৫ - ৪:০০' },
]
</script>

<template>
  <section class="academic-structure-section reveal">
    <div class="container">
      <div class="bento-grid">
        <!-- Classes -->
        <div class="bento-item classes-area">
          <h2 class="area-title">শ্রেণী বিন্যাস</h2>
          <div class="classes-grid">
            <div v-for="cls in classes" :key="cls.name" class="class-card">
              <div class="class-label" :style="{ background: cls.bg, color: cls.color }">
                {{ cls.label }}
              </div>
              <div class="class-info">
                <h4>{{ cls.name }}</h4>
                <p>{{ cls.age }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Routine / Schedule -->
        <div class="bento-item schedule-sidebar">
          <h3 class="sidebar-title">স্কুল সময়সূচী</h3>
          <div class="schedule-list">
            <div v-for="item in schedule" :key="item.group" class="schedule-item">
              <p class="group-name">{{ item.group }}</p>
              <p class="time-range">{{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.academic-structure-section {
  padding-bottom: 40px;
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
  background: white;
  border-radius: 20px;
  padding: 40px;
  border: 1px solid #f1f5f9;
}

.area-title {
  font-size: 1.8rem;
  font-family: var(--heading-font);
  color: var(--primary);
  margin-bottom: 32px;
}

/* Classes Grid */
.classes-area {
  grid-column: span 8;
}

.classes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.class-card {
  padding: 20px;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
}

.class-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
}

.class-label {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
}

.class-info h4 {
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 4px;
}

.class-info p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Schedule Sidebar */
.schedule-sidebar {
  grid-column: span 4;
  background: var(--primary);
  color: white;
  border: none;
}

.sidebar-title {
  color: white;
  margin-bottom: 32px;
  font-family: var(--heading-font);
  font-size: 1.5rem;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.schedule-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 16px;
}

.schedule-item:last-child {
  border-bottom: none;
}

.group-name {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-bottom: 4px;
}

.time-range {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--accent);
}

@media (max-width: 1024px) {
  .classes-area,
  .schedule-sidebar {
    grid-column: span 12;
  }
}

@media (max-width: 640px) {
  .classes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
