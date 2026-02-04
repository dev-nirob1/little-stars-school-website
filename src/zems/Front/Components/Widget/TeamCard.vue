<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="team-card-modern">
    <div class="image-container">
      <img :src="image" :alt="name" class="member-image" />
      <div class="image-overlay"></div>
    </div>
    <div class="content-box">
      <h4 class="member-name">{{ name }}</h4>
      <p class="member-role">{{ role }}</p>
      <div class="card-accent"></div>
    </div>
  </div>
</template>

<style scoped>
.team-card-modern {
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image-container {
  width: 100%;
  height: 320px;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 60%, rgba(15, 23, 42, 0.1));
  opacity: 0;
  transition: opacity 0.5s ease;
}

.content-box {
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: calc(100% - 40px);
  margin: -40px auto 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  border: 1px solid #f1f5f9;
  text-align: left;
}

.member-name {
  font-size: 1.2rem;
  font-family: var(--heading-font);
  color: var(--primary);
  margin-bottom: 4px;
  line-height: 1.3;
}

.member-role {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 24px;
  width: 30px;
  height: 3px;
  background: var(--accent);
  transition: width 0.4s ease;
}

/* Hover Effects */
.team-card-modern:hover {
  transform: translateY(-5px);
}

.team-card-modern:hover .member-image {
  transform: scale(1.1);
}

.team-card-modern:hover .image-overlay {
  opacity: 1;
}

.team-card-modern:hover .content-box {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--accent);
}

.team-card-modern:hover .card-accent {
  width: 60px;
}

@media (max-width: 768px) {
  .image-container {
    height: 300px;
  }
}
</style>
