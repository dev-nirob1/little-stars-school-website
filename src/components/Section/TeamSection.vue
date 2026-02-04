<script setup>
import TeamCard from '@/zems/Front/Components/Widget/TeamCard.vue'

const teamMembers = [
  {
    name: 'জনাব মো: সোলায়মান',
    role: 'চেয়ারম্যান',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'মিসেস ফাতেমা নূর',
    role: 'প্রধান শিক্ষিকা',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'জনাব রাশেদুল ইসলাম',
    role: 'সিনিয়র শিক্ষক',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'মিসেস সাবিনা ইয়াসমিন',
    role: 'সহকারী শিক্ষিকা',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
  },
]
</script>

<template>
  <section class="team-section reveal">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">পরিচালনা ও শিক্ষকবৃন্দ</h2>
        <p class="section-desc">যারা নিরলসভাবে এই প্রতিষ্ঠানকে শ্রেষ্ঠত্বের দিকে নিয়ে যাচ্ছেন</p>
      </div>

      <div class="team-grid">
        <TeamCard
          v-for="(member, index) in teamMembers"
          :key="index"
          :name="member.name"
          :role="member.role"
          :image="member.image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.6rem);
  font-family: var(--heading-font);
  color: var(--primary);
  margin-bottom: 12px;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .section-header {
    margin-bottom: 40px;
  }
}
</style>
