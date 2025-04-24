<script setup>
import Timeline from "primevue/timeline";
import Button from "primevue/button";
import Card from "primevue/card";
import {ref} from "vue";

const events = ref([
  { status: 'ВАШ ДЗВІНОК', description: 'Перший крок до вашої нової нерухомості. Обговоримо ваші потреби.', icon: 'pi pi-phone', color: '#9C27B0', date: '10хв' },
  { status: 'ВИЇЗД АГЕНТА', description: 'Наш експерт прибуде для оцінки або показу об\'єкта.', icon: 'pi pi-car', color: '#673AB7', date: '1година' },
  { status: 'УГОДА', description: 'Підписання документів та узгодження всіх деталей.', icon: 'pi pi-check', color: '#FF9800', date: '30хв' },
  { status: 'РЕЗУЛЬТАТ', description: 'Ключі у ваших руках або успішний продаж вашої власності.', icon: 'pi pi-home', color: '#607D8B', date: '1-14 днів' },
  { status: 'ЗАДОВОЛЕНИЙ КЛІЄНТ', description: 'Ваша позитивна рекомендація - наша найкраща нагорода!', icon: 'pi pi-thumbs-up', color: '#607D8B' }
]);
</script>

<template>
  <div class="card">
    <Timeline :value="events" :align="isMobile ? 'left' : 'alternate'" class="customized-timeline">
      <template #marker="slotProps">
        <span class="timeline-marker" :style="{ backgroundColor: slotProps.item.color }">
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="timeline-card">
          <template #title>
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="card-image" />
            <p>
              {{ slotProps.item.description }}
            </p>            
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1rem;
}

.timeline-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  margin: 0.5rem 0;
}

.timeline-card {
  margin-top: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-image {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

/* Мобильная версия */
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event {
      flex-direction: row !important;

      .p-timeline-event-separator {
        margin: 0 1rem 0 0;
      }

      .p-timeline-event-content {
        text-align: left !important;
        padding-left: 0.5rem;
      }

      .p-timeline-event-opposite {
        display: none;
      }
    }

    /* Корректировка вертикальной линии */
    .p-timeline-event-separator .p-timeline-event-connector {
      left: 0.9rem;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isMobile: window.innerWidth <= 960
    };
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth <= 960;
    }
  }
};
</script>