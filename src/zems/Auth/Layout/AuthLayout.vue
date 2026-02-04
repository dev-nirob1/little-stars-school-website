<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="auth-layout">
    <!-- Back Button -->
    <button @click="goBack" class="back-btn" aria-label="Go Back">
      <i class="fas fa-arrow-left"></i>
      <span>ফিরে যান</span>
    </button>

    <main class="auth-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Decorative Background Elements -->
    <div class="bg-decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #f8fafc;
  overflow: hidden;
}

.back-btn {
  position: absolute;
  top: 32px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 14px;
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.back-btn:hover {
  background: var(--primary);
  color: white;
  transform: translateX(-5px);
  box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.1);
}

.auth-content {
  position: relative;
  z-index: 10;
  width: 100%;
}

.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.circle-1 {
  width: 600px;
  height: 600px;
  background: rgba(var(--primary-rgb), 0.05);
  top: -200px;
  right: -100px;
}

.circle-2 {
  width: 500px;
  height: 500px;
  background: rgba(var(--accent-rgb), 0.05);
  bottom: -150px;
  left: -100px;
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: 768px) {
  .back-btn {
    top: 20px;
    left: 20px;
    padding: 10px 18px;
    font-size: 0.9rem;
  }
}
</style>
