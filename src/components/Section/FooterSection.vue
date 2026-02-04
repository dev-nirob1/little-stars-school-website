<template>
  <footer class="footer-modern">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <router-link to="/" class="logo-modern">
            <img
              src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=200"
              alt="Logo"
            />
            <div class="school-name-modern">
              <h1>কিডস গ্রিন</h1>
              <p>KIDS GREEN KINDERGARTEN</p>
            </div>
          </router-link>
          <p class="bio">
            ২০২৬ সালের স্মার্ট বাংলাদেশের লক্ষ্য নিয়ে আমরা আপনার শিশুর জন্য এক আধুনিক এবং নৈতিক
            শিক্ষা পরিবেশ নিশ্চিত করছি।
          </p>
          <div class="footer-socials">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="footer-heading">দ্রুত লিঙ্ক</h4>
          <ul class="footer-links">
            <li><router-link to="/">হোম</router-link></li>
            <li><router-link to="/about">আমাদের সম্পর্কে</router-link></li>
            <li><router-link to="/notice">নোটিশ বোর্ড</router-link></li>
            <li><router-link to="/academics">একাডেমিক তথ্য</router-link></li>
            <li><router-link to="/gallery">ফটো গ্যালারি</router-link></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="footer-heading">সহযোগিতা</h4>
          <ul class="footer-links">
            <li><router-link to="/admission">ভর্তি প্রক্রিয়া</router-link></li>
            <li><router-link to="/contact">যোগাযোগ</router-link></li>
            <li><router-link to="/result">ফলাফল পোর্টাল</router-link></li>
            <li><router-link to="/login">লগইন করুন</router-link></li>
            <li><router-link to="/privacy">প্রাইভেসি পলিসি</router-link></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h4 class="footer-heading">নিউজলেটার</h4>
          <p class="newsletter-desc">নতুন আপডেট পেতে ইমেইল সাবস্কribe করুন।</p>
          <div class="newsletter-form">
            <input type="email" placeholder="আপনার ইমেইল" />
            <button class="btn btn-secondary w-full">সাবস্ক্রাইব করুন</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ২০২৬ কিডস গ্রিন কিন্ডারগার্টেন। সর্বস্বত্ব সংরক্ষিত।</p>
        <p>
          ডিজাইন ও ডেভেলপমেন্ট:
          <a href="http://webpoka.com" target="_blank" class="dev-link">Webpoka.</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Modern Footer Styles */
.footer-modern {
  background: var(--primary);
  color: white;
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand .logo-modern {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-bottom: 24px;
}

.footer-brand .logo-modern img {
  height: 40px;
  transition: var(--transition);
}

.footer-brand .school-name-modern h1 {
  color: white;
  font-size: 1.25rem;
  margin: 0;
  font-family: var(--heading-font);
}
.footer-brand .school-name-modern p {
  color: var(--accent);
  margin: 0;
  font-size: 0.75rem;
}

.footer-brand p.bio {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 24px;
}

.footer-heading {
  font-family: var(--heading-font);
  font-size: 1.2rem;
  margin-bottom: 24px;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: var(--transition);
}

.footer-links a:hover {
  opacity: 1;
  color: var(--accent);
  padding-left: 8px;
}

.newsletter-desc {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-bottom: 20px;
}

.footer-newsletter input {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  margin-bottom: 12px;
  font-family: inherit;
  outline: none;
}

.footer-newsletter input:focus {
  border-color: var(--accent);
}

.w-full {
  width: 100%;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.6;
}

.dev-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.dev-link:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.footer-socials {
  display: flex;
  gap: 16px;
}

.footer-socials a {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: var(--transition);
  text-decoration: none;
}

.footer-socials a:hover {
  background: var(--accent);
  transform: translateY(-4px);
}

/* Responsiveness */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
}
</style>
