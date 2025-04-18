<template>
  <div class="admin-panel">
    <div class="admin-panel__header">
      <h1>Адмін-панель</h1>
      <Button label="Вийти" @click="handleLogout" class="p-button-danger" />
    </div>
    <div class="admin-panel__content">
      <div class="reviews-management">
        <h2>Управління відгуками</h2>
        <div class="reviews-management__form">
          <div class="p-fluid">
            <div class="p-field">
              <label for="name">Ім'я</label>
              <InputText id="name" v-model="newReview.name" />
            </div>
            <div class="p-field">
              <label for="email">Email</label>
              <InputText id="email" v-model="newReview.email" />
            </div>
            <div class="p-field">
              <label for="rating">Рейтинг</label>
              <Rating v-model="newReview.rating" :stars="5" />
            </div>
            <div class="p-field">
              <label for="text">Текст відгуку</label>
              <Textarea id="text" v-model="newReview.text" rows="5" />
            </div>
            <Button label="Додати відгук" @click="addReview" :loading="loading" />
          </div>
        </div>
        <div class="reviews-management__list">
          <DataTable :value="reviews" :paginator="true" :rows="10">
            <Column field="name" header="Ім'я"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="rating" header="Рейтинг">
              <template #body="slotProps">
                <Rating :modelValue="slotProps.data.rating" :stars="5" :readonly="true" />
              </template>
            </Column>
            <Column field="text" header="Текст"></Column>
            <Column>
              <template #body="slotProps">
                <Button icon="pi pi-trash" class="p-button-danger" @click="deleteReview(slotProps.data.id)" />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Rating from 'primevue/rating';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
  name: 'AdminView',
  components: {
    Button,
    InputText,
    Textarea,
    Rating,
    DataTable,
    Column
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = ref(false);
    const reviews = ref([]);
    const newReview = ref({
      name: '',
      email: '',
      rating: 5,
      text: ''
    });

    const handleLogout = async () => {
      await store.dispatch('logout');
      router.push('/login');
    };

    const fetchReviews = async () => {
      const reviewsCollection = collection(db, 'reviews');
      const reviewsSnapshot = await getDocs(reviewsCollection);
      reviews.value = reviewsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    };

    const addReview = async () => {
      try {
        loading.value = true;
        const reviewsCollection = collection(db, 'reviews');
        await addDoc(reviewsCollection, {
          ...newReview.value,
          date: new Date().toISOString()
        });
        await fetchReviews();
        newReview.value = {
          name: '',
          email: '',
          rating: 5,
          text: ''
        };
      } catch (error) {
        console.error('Error adding review:', error);
      } finally {
        loading.value = false;
      }
    };

    const deleteReview = async (id) => {
      try {
        await deleteDoc(doc(db, 'reviews', id));
        await fetchReviews();
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    };

    onMounted(() => {
      fetchReviews();
    });

    return {
      loading,
      reviews,
      newReview,
      handleLogout,
      addReview,
      deleteReview
    };
  }
});
</script>

<style lang="scss" scoped>
.admin-panel {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

.reviews-management {
  &__form {
    margin-bottom: 30px;
  }

  .p-field {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }
}
</style> 