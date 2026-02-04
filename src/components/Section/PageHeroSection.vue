<script setup>
defineProps({
  tag: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="page-hero-section reveal">
    <div class="background-decor-layer">
      <div class="ambient-glow"></div>
      <div class="subtle-dots"></div>
    </div>

    <div class="hero-content-area container">
      <div class="hero-text-box">
        <span v-if="tag" class="hero-badge">{{ tag }}</span>
        <h1 class="hero-main-heading">{{ title }}</h1>
        <p v-if="subtitle" class="hero-description">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero-section {
  padding: 110px 0 70px;
  background: white;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #f1f5f9;
}

.hero-content-area {
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.hero-text-box {
  max-width: 800px;
  text-align: left;
}

.hero-badge {
  color: var(--accent);
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: block;
  animation: fadeInDown 0.8s ease;
}

.hero-main-heading {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-family: var(--heading-font);
  color: var(--primary);
  line-height: 1.25;
  margin: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-description {
  margin-top: 16px;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  animation: fadeInUp 1s ease 0.15s both;
}

/* Background Visuals */
.background-decor-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ambient-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.08), transparent 70%);
  top: -200px;
  left: -100px;
  filter: blur(50px);
}

.subtle-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px);
  background-size: 30px 30px;
  opacity: 0.4;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .page-hero-section {
    padding: 100px 0 50px;
  }
}
</style>
