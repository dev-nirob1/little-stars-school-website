<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const activeFilter = ref('All')
const selectedIndex = ref(null)
const isModalOpen = ref(false)
const isLoading = ref(true)

const filters = [
  { label: 'সব ছবি', value: 'All' },
  { label: 'স্পোর্টস', value: 'Sports' },
  { label: 'শিক্ষা', value: 'Education' },
  { label: 'সাংস্কৃতিক', value: 'Cultural' },
]

const galleryItems = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef14603e80?auto=format&fit=crop&q=80&w=1200',
    category: 'Sports',
    title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা - ২০২৬',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200',
    category: 'Education',
    title: 'ডিজিটাল ক্লাসরুম অ্যাক্টিভিটি',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    category: 'Cultural',
    title: 'চিত্রাঙ্কন প্রতিযোগিতা',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1524061614234-8449637536ee?auto=format&fit=crop&q=80&w=1200',
    category: 'Education',
    title: 'জাতীয় দিবস উদযাপন',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    category: 'Education',
    title: 'সহ-শিক্ষা কার্যক্রম',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1526722356889-5167fd722744?auto=format&fit=crop&q=80&w=1200',
    category: 'Education',
    title: 'স্কুল বাগান কার্যক্রম',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    category: 'Education',
    title: 'টিফিন টাইম ফান',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1594611641015-7724180f9712?auto=format&fit=crop&q=80&w=1200',
    category: 'Cultural',
    title: 'সাংস্কৃতিক সন্ধ্যা',
  },
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'All') return galleryItems
  return galleryItems.filter((item) => item.category === activeFilter.value)
})

const selectedItem = computed(() => {
  if (selectedIndex.value === null) return null
  return filteredItems.value[selectedIndex.value]
})

const openLightbox = (index) => {
  isLoading.value = true
  selectedIndex.value = index
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const nextImage = () => {
  isLoading.value = true
  if (selectedIndex.value < filteredItems.value.length - 1) {
    selectedIndex.value++
  } else {
    selectedIndex.value = 0
  }
}

const prevImage = () => {
  isLoading.value = true
  if (selectedIndex.value > 0) {
    selectedIndex.value--
  } else {
    selectedIndex.value = filteredItems.value.length - 1
  }
}

const onImageLoad = () => {
  isLoading.value = false
}

// Keyboard nav
const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') closeModal()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

const handleFilterChange = (val) => {
  activeFilter.value = val
  selectedIndex.value = null
}

watch(isModalOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<template>
  <section class="gallery-section reveal">
    <div class="container">
      <div class="gallery-filters">
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="filter-btn"
          :class="{ active: activeFilter === filter.value }"
          @click="handleFilterChange(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          class="gallery-item animate-in"
          @click="openLightbox(index)"
        >
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <div class="gallery-overlay">
              <div class="overlay-content">
                <span class="category-tag">{{ item.category }}</span>
                <p class="item-title">{{ item.title }}</p>
                <div class="zoom-icon"><i class="fas fa-plus"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isModalOpen" class="lightbox-modal" @click.self="closeModal">
          <!-- Controls Overlay -->
          <div class="modal-controls">
            <button class="control-btn close" @click="closeModal">
              <i class="fas fa-times"></i>
            </button>
            <button class="control-btn prev" @click="prevImage">
              <i class="fas fa-arrow-left"></i>
            </button>
            <button class="control-btn next" @click="nextImage">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>

          <!-- Main Content -->
          <div class="modal-container">
            <div class="image-stage">
              <div v-if="isLoading" class="loader-box">
                <div class="spinner"></div>
              </div>

              <Transition name="slide-up" mode="out-in">
                <img
                  :key="selectedIndex"
                  :src="selectedItem?.image"
                  @load="onImageLoad"
                  class="full-image"
                  :class="{ loading: isLoading }"
                />
              </Transition>
            </div>

            <!-- Info Bar -->
            <div class="modal-info-bar">
              <div class="info-content">
                <span class="info-cat">{{ selectedItem?.category }}</span>
                <h3 class="info-title">{{ selectedItem?.title }}</h3>
              </div>
              <div class="info-counter">
                <span class="current">{{ selectedIndex + 1 }}</span>
                <span class="separator">/</span>
                <span class="total">{{ filteredItems.length }}</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-section {
  padding-bottom: 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Filters */
.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
}

.filter-btn {
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  color: var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: white;
  border-color: var(--accent);
  color: var(--accent);
}

.filter-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.gallery-item {
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4/5;
  cursor: pointer;
  position: relative;
  background: #f1f5f9;
}

.image-wrapper {
  width: 100%;
  height: 100%;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.2, 0, 0, 1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 32px;
  opacity: 0;
  transition: all 0.4s ease;
}

.overlay-content {
  width: 100%;
  transform: translateY(20px);
  transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1);
}

.category-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.item-title {
  color: white;
  font-size: 1.1rem;
  font-family: var(--heading-font);
  line-height: 1.3;
  margin: 0;
}

.zoom-icon {
  position: absolute;
  top: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

.gallery-item:hover .image-wrapper img {
  transform: scale(1.1);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .overlay-content {
  transform: translateY(0);
}

.gallery-item:hover .zoom-icon {
  opacity: 1;
  transform: scale(1);
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a0c;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.modal-controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10010;
}

.control-btn {
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: white;
  color: black;
  transform: scale(1.1);
}

.control-btn.close {
  top: 40px;
  right: 40px;
}
.control-btn.prev {
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
}
.control-btn.next {
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
}

.modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 120px;
  pointer-events: none;
}

.image-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.full-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
}

.full-image.loading {
  opacity: 0;
}

.loader-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.modal-info-bar {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: auto;
}

.info-cat {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.info-title {
  color: white;
  font-size: 2rem;
  font-family: var(--heading-font);
  margin: 0;
}

.info-counter {
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: white;
  font-family: var(--heading-font);
}

.info-counter .current {
  font-size: 2.5rem;
  color: var(--accent);
}
.info-counter .separator {
  opacity: 0.3;
  font-size: 1.5rem;
}
.info-counter .total {
  font-size: 1.2rem;
  opacity: 0.5;
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.6s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 1s cubic-bezier(0.2, 0, 0, 1) backwards;
}

/* Responsiveness */
@media (max-width: 1024px) {
  .modal-container {
    padding: 40px;
  }
  .control-btn.prev,
  .control-btn.next {
    display: none;
  }
  .info-title {
    font-size: 1.5rem;
  }
  .info-counter .current {
    font-size: 1.8rem;
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .gallery-filters {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 20px;
  }
  .control-btn.close {
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
}
</style>
