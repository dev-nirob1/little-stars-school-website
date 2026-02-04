<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="feature-card-widget">
    <div class="icon-wrapper">
      <i :class="['fas', icon, 'fa-xl']"></i>
    </div>
    <div class="content-wrapper">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="card-glow"></div>
  </div>
</template>

<style scoped>
.feature-card-widget {
  background: white;
  padding: 40px 32px;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.05),
    0 2px 4px -2px rgb(0 0 0 / 0.05);
}

.feature-card-widget:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background: #f8fafc;
  color: var(--primary);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  transition: all 0.5s ease;
  position: relative;
  z-index: 2;
}

.feature-card-widget:hover .icon-wrapper {
  background: var(--primary);
  color: white;
  transform: rotate(10deg);
}

.content-wrapper {
  position: relative;
  z-index: 2;
}

.content-wrapper h3 {
  font-family: var(--heading-font);
  font-size: 1.4rem;
  color: var(--primary);
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

.content-wrapper p {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* Premium Glow Effect on Hover */
.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.05), transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.feature-card-widget:hover .card-glow {
  opacity: 1;
}

/* Subtle border light effect */
.feature-card-widget::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(135deg, var(--accent), transparent 40%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 24px;
}

.feature-card-widget:hover::before {
  opacity: 0.3;
}
</style>
