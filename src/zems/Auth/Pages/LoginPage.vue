<script setup>
import { ref } from 'vue'

const activeRole = ref('teacher')

const setRole = (role) => {
  activeRole.value = role
}
</script>

<template>
  <div class="auth-card">
    <div class="auth-header">
      <h2>লগইন করুন</h2>
      <p>আপনার অ্যাকাউন্টের ধরণ নির্বাচন করুন</p>
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
        <label>ইউজার আইডি / ইমেইল</label>
        <div class="input-wrapper">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="ID or Email" required />
        </div>
      </div>

      <div class="form-group">
        <label>পাসওয়ার্ড</label>
        <div class="input-wrapper">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="••••••••" required />
        </div>
      </div>

      <div class="form-actions">
        <label class="remember-me">
          <input type="checkbox" />
          <span>মনে রাখুন</span>
        </label>
        <a href="#" class="forgot-link">পাসওয়ার্ড ভুলে গেছেন?</a>
      </div>

      <button type="submit" class="btn-login">
        সিস্টেমে প্রবেশ করুন <i class="fas fa-sign-in-alt"></i>
      </button>
    </form>

    <div class="auth-footer">
      <p>অ্যাকাউন্ট নেই? <router-link to="/auth/register">নতুন অ্যাকাউন্ট খুলুন</router-link></p>
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
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
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
  padding: 14px 14px 14px 48px;
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

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 0.85rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--text-muted);
}

.remember-me input {
  width: 16px;
  height: 16px;
  accent-color: var(--accent);
}

.forgot-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
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
