<script setup>
import { ref } from 'vue'

const activeRole = ref('student')

const setRole = (role) => {
  activeRole.value = role
}
</script>

<template>
  <div class="auth-card">
    <div class="auth-header">
      <h2>অ্যাকাউন্ট খুলুন</h2>
      <p>নিচের তথ্যগুলো দিয়ে একটি নতুন অ্যাকাউন্ট তৈরি করুন</p>
    </div>

    <div class="role-selector">
      <button
        type="button"
        class="role-btn"
        :class="{ active: activeRole === 'teacher' }"
        @click="setRole('teacher')"
      >
        শিক্ষক
      </button>
      <button
        type="button"
        class="role-btn"
        :class="{ active: activeRole === 'student' }"
        @click="setRole('student')"
      >
        শিক্ষার্থী
      </button>
      <button
        type="button"
        class="role-btn"
        :class="{ active: activeRole === 'guardian' }"
        @click="setRole('guardian')"
      >
        অভিভাবক
      </button>
    </div>

    <form @submit.prevent class="auth-form">
      <div class="form-group">
        <label>পুরো নাম</label>
        <div class="input-wrapper">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Full Name" required />
        </div>
      </div>

      <div class="form-group">
        <label>ইমেইল / ইউজার আইডি</label>
        <div class="input-wrapper">
          <i class="fas fa-envelope"></i>
          <input type="text" placeholder="Email or ID" required />
        </div>
      </div>

      <div class="form-group">
        <label>পাসওয়ার্ড</label>
        <div class="input-wrapper">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="••••••••" required />
        </div>
      </div>

      <div class="form-group">
        <label>পাসওয়ার্ড নিশ্চিত করুন</label>
        <div class="input-wrapper">
          <i class="fas fa-check-double"></i>
          <input type="password" placeholder="••••••••" required />
        </div>
      </div>

      <button type="submit" class="btn-login">
        অ্যাকাউন্ট তৈরি করুন <i class="fas fa-user-plus"></i>
      </button>
    </form>

    <div class="auth-footer">
      <p>ইতিমধ্যে অ্যাকাউন্ট আছে? <router-link to="/auth/login">লগইন করুন</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.auth-card {
  background: white;
  padding: 48px;
  border-radius: 28px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

.auth-header {
  text-align: center;
  margin-bottom: 32px;
}

.auth-header h2 {
  font-family: var(--heading-font);
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.auth-header p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.role-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  padding: 6px;
  background: #f1f5f9;
  border-radius: 14px;
}

.role-btn {
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.role-btn.active {
  background: white;
  color: var(--primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--primary);
}

.input-wrapper {
  position: relative;
}

.input-wrapper i {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 14px 12px 48px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-family: inherit;
  font-size: 1rem;
  background: #f8fafc;
  transition: all 0.3s ease;
}

.input-wrapper input:focus {
  outline: none;
  border-color: var(--accent);
  background: white;
  box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.1);
}

.btn-login {
  width: 100%;
  padding: 16px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  margin-top: 12px;
}

.btn-login:hover {
  background: var(--accent);
  color: var(--primary);
  transform: translateY(-2px);
}

.auth-footer {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.auth-footer a {
  color: var(--primary);
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 480px) {
  .auth-card {
    padding: 32px 24px;
  }
}
</style>
