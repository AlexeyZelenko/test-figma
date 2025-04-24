<script setup>
import Timeline from "primevue/timeline";
import Button from "primevue/button";
import Card from "primevue/card";
import {ref} from "vue";

const events = ref([
  { status: 'КРОК 1', description: 'Ви подаєте заявку', icon: 'pi pi-file-o', color: '#007bff' }, // Синій - подача заявки
  { status: 'КРОК 2', description: 'Ми розуміємо завдання', icon: 'pi pi-comments', color: '#6c757d' }, // Сірий - розуміння, обговорення
  { status: 'КРОК 3', description: 'Укладаємо договір на послуги', icon: 'pi pi-pencil', color: '#28a745' }, // Зелений - підписання, угода
  { status: 'КРОК 4', description: 'Покроково виконуємо робочі процеси', icon: 'pi pi-cog', color: '#ffc107' }, // Жовтий - процес, налаштування
  { status: 'КРОК 5', description: 'Ви отримуєте регулярні звіти про роботу', icon: 'pi pi-chart-bar', color: '#17a2b8' }, // Блакитний - звітність, статистика
  { status: 'КРОК 6', description: 'Знаходимо покупця або продавця об\'єкту нерухомості', icon: 'pi pi-users', color: '#fd7e14' }, // Помаранчевий - пошук, клієнти
  { status: 'КРОК 7', description: 'Супроводжуємо та здійснюємо угоду', icon: 'pi pi-briefcase', color: '#dc3545' }, // Червоний - супровід, завершення
  { status: 'КРОК 8', description: 'Ви отримуєте бажаний результат', icon: 'pi pi-check-circle', color: '#28a745' } // Зелений - успіх, результат
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
            <span class="text-cyan-800 font-bold">{{ slotProps.item.status }}</span>
          </template>
          <template #content>
            <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="card-image" />
            <p class="m-0 text-600 text-xl">
              {{ slotProps.item.name }}
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