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
  <div class="facility-card-widget">
    <div class="icon-sphere">
      <i :class="['fas', icon]"></i>
      <div class="sphere-glow"></div>
    </div>
    <div class="content-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="card-border-glow"></div>
  </div>
</template>

<style scoped>
.facility-card-widget {
  background: white;
  padding: 48px 32px;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.facility-card-widget:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow:
    0 30px 60px -12px rgba(50, 50, 93, 0.08),
    0 18px 36px -18px rgba(0, 0, 0, 0.1);
}

.icon-sphere {
  width: 70px;
  height: 70px;
  background: #f8fafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 32px;
  position: relative;
  transition: all 0.5s ease;
}

.sphere-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0;
  filter: blur(15px);
  transition: all 0.5s ease;
  z-index: -1;
}

.facility-card-widget:hover .icon-sphere {
  background: var(--primary);
  color: white;
  transform: scale(1.1) rotate(10deg);
}

.facility-card-widget:hover .sphere-glow {
  opacity: 0.15;
}

.content-body h3 {
  font-family: var(--heading-font);
  font-size: 1.4rem;
  color: var(--primary);
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

.content-body p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

.card-border-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--accent), transparent 50%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.facility-card-widget:hover .card-border-glow {
  opacity: 0.05;
}

/* Glassmorphism hint on hover */
.facility-card-widget:hover {
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.95));
}
</style>
