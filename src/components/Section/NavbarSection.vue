<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header id="header" :class="{ scrolled: isScrolled, 'mobile-menu-active': isMobileMenuOpen }">
    <a href="index.html" class="logo-modern">
      <img
        src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=200"
        alt="Logo"
      />
      <div class="school-name-modern">
        <h1>কিডস গ্রিন</h1>
        <p>KIDS GREEN KINDERGARTEN</p>
      </div>
    </a>

    <!-- Hamburger Button -->
    <button class="menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav :class="{ open: isMobileMenuOpen }">
      <ul>
        <li><a href="index.html" class="active">হোম</a></li>
        <li><a href="about/index.html">সম্পর্কে</a></li>
        <li><a href="notice/index.html">নোটিশ</a></li>
        <li><a href="academics/index.html">একাডেমিক</a></li>
        <li><a href="gallery/index.html">গ্যালারি</a></li>
        <li><a href="contact/index.html">যোগাযোগ</a></li>
      </ul>
      <div class="mobile-actions">
        <a href="login/index.html" class="btn btn-outline">লগইন</a>
        <a href="admission/index.html" class="btn btn-primary">ভর্তি</a>
      </div>
    </nav>

    <div class="nav-actions">
      <a href="login/index.html" class="btn btn-outline">লগইন</a>
      <a href="admission/index.html" class="btn btn-primary">ভর্তি</a>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--surface);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 5%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
}

/* Scrolled Style - Floating Glass */
header.scrolled {
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1200px;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 12px 24px;
  box-shadow: var(--shadow-soft);
}

.logo-modern {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  z-index: 1001;
}

.logo-modern img {
  height: 40px;
  transition: var(--transition);
}

header.scrolled .logo-modern img {
  height: 36px;
}

.school-name-modern h1 {
  font-size: 1.1rem;
  line-height: 1;
  color: var(--primary);
}

.school-name-modern p {
  font-size: 0.7rem;
  color: var(--text-muted);
}

/* Desktop Nav */
nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

nav ul li a {
  text-decoration: none;
  color: var(--text-main);
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition);
  opacity: 0.8;
}

nav ul li a:hover,
nav ul li a.active {
  color: var(--accent);
  opacity: 1;
}

.nav-actions {
  display: flex;
  gap: 12px;
}

/* Hamburger Menu */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.bar {
  width: 24px;
  height: 2px;
  background-color: var(--primary);
  transition: var(--transition);
}

.mobile-actions {
  display: none;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--surface);
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  nav.open {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    gap: 24px;
  }

  .nav-actions {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Hamburger Animation */
  .mobile-menu-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .mobile-menu-active .bar:nth-child(2) {
    opacity: 0;
  }
  .mobile-menu-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

@media (max-width: 480px) {
  header.scrolled {
    width: calc(100% - 24px);
    top: 12px;
  }
}
</style>
