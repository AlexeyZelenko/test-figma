<template>
  <div class="admin-panel">
    <div class="admin-panel__header">
      <Button
          icon="pi pi-arrow-left"
          class="p-button-text p-button-secondary"
          @click="$router.push('/')"
          label="На головну"
      />
      <h1 class="text-gray-800">Адмін-панель</h1>
      <Button
          label="Вийти"
          @click="handleLogout"
          class="p-button-outlined p-button-secondary"
          icon="pi pi-sign-out"
      />
    </div>
    <div class="admin-panel__content">
      <div class="reviews-management">
        <h2 class="text-gray-700">Управління відгуками</h2>

        <div class="reviews-management__form bg-white p-6 rounded-lg shadow-sm mb-6">
          <div class="reviews-management__container">
            <div class="flex flex-col">
              <div class="p-field">
                <label for="name" class="text-gray-600">Ім'я</label>
                <InputText
                    id="name"
                    v-model="newReview.name"
                    class="w-full"
                    placeholder="Введіть ім'я"
                />
              </div>
              <div class="flex flex-col">
                <div class="p-field">
                  <label for="name" class="text-gray-600">Дата відгуку</label>
                  <InputText
                      id="name"
                      v-model="newReview.dateRevocation"
                      class="w-full"
                      placeholder="Дата відгуку"
                  />
                </div>
              </div>
              <div class="p-field md:col-span-2">
                <label for="text" class="text-gray-600">Текст відгуку</label>
                <Textarea
                    id="text"
                    v-model="newReview.text"
                    rows="5"
                    class="w-full"
                    placeholder="Введіть текст відгуку"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div class="p-field">
                <label for="rating" class="text-gray-600">Рейтинг</label>
                <Rating
                    id="rating"
                    v-model="newReview.rating"
                    :stars="5"
                    class="mt-1"
                    cancelIcon="pi pi-times"
                />
              </div>
              <div class="p-field">
                <label class="text-gray-600">Зображення</label>
                <FileUpload
                    mode="basic"
                    name="image"
                    accept="image/*"
                    :maxFileSize="1000000"
                    chooseLabel="Вибрати зображення"
                    @select="onFileSelect"
                    :customUpload="true"
                    class="w-full"
                />
                <div v-if="imagePreview" class="mt-4">
                  <img
                      :src="imagePreview"
                      alt="Попередній перегляд"
                      class="max-h-40 rounded-md shadow"
                  />
                  <Button
                      icon="pi pi-times"
                      class="p-button-text p-button-danger mt-2"
                      label="Видалити зображення"
                      @click="removeImage"
                  />
                </div>
                <ProgressBar
                    v-if="uploadProgress > 0 && uploadProgress < 100"
                    :value="uploadProgress"
                    class="mt-2"
                />
              </div>
            </div>
          </div>
          <Button
              :label="isEditing ? 'Оновити відгук' : 'Додати відгук'"
              @click="isEditing ? updateReview() : addReview()"
              :loading="loading"
              class="mt-4"
              :icon="isEditing ? 'pi pi-check' : 'pi pi-plus'"
              style="margin: 0 10px 20px 0"
          />
          <Button
              v-if="isEditing"
              label="Скасувати"
              @click="cancelEdit"
              class="mt-4 ml-2 p-button-outlined"
              icon="pi pi-times"
              style="margin: 0 10px 20px 0"
          />
        </div>

        <div class="reviews-management__list bg-white mb-4 p-6 rounded-lg shadow-sm">
          <DataTable
              :value="reviews"
              :paginator="true"
              :rows="10"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
              currentPageReportTemplate="Показано з {first} по {last} з {totalRecords} записів"
              class="p-datatable-sm"
              :loading="loading"
          >
            <Column field="name" header="Ім'я" :sortable="true"></Column>
            <Column field="rating" header="Рейтинг" :sortable="true">
              <template #body="slotProps">
                <Rating
                    :modelValue="slotProps.data.rating"
                    :stars="5"
                    :readonly="true"
                    class="text-yellow-400"
                />
              </template>
            </Column>
            <Column header="Зображення">
              <template #body="slotProps">
                <img
                    v-if="slotProps.data.imageUrl"
                    :src="slotProps.data.imageUrl"
                    alt="Review image"
                    class="w-16 h-16 object-cover rounded"
                />
                <span v-else class="text-gray-400">Немає зображення</span>
              </template>
            </Column>
            <Column field="text" header="Текст" style="max-width: 300px;">
              <template #body="slotProps">
                <div class="line-clamp-2">
                  {{ slotProps.data.text }}
                </div>
              </template>
            </Column>
            <Column field="text" header="Дата відгуку" style="max-width: 300px;">
              <template #body="slotProps">
                <div class="line-clamp-2">
                  {{ slotProps.data.dateRevocation }}
                </div>
              </template>
            </Column>
            <Column header="Дії" style="width: 100px;">
              <template #body="slotProps">
                <Button
                    icon="pi pi-trash"
                    class="p-button-text p-button-danger"
                    @click="confirmDeleteReview(slotProps.data)"
                    v-tooltip="'Видалити'"
                />
                <Button
                    icon="pi pi-pencil"
                    class="p-button-text p-button-info"
                    @click="editReview(slotProps.data)"
                    v-tooltip="'Редагувати'"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>

    <!-- Діалоги підтвердження -->
    <Dialog v-model:visible="deleteDialog" header="Підтвердження видалення" :style="{width: '450px'}" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span>Ви впевнені, що хочете видалити відгук від <b>{{ deleteReviewData?.name }}</b>?</span>
      </div>
      <template #footer>
        <Button label="Ні" icon="pi pi-times" class="p-button-text" @click="deleteDialog = false" />
        <Button label="Так" icon="pi pi-check" class="p-button-danger" @click="deleteReview" />
      </template>
    </Dialog>

    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {
  collection,
  setDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from 'firebase/firestore';
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { db, storage } from '../firebase/config';

// PrimeVue компоненти
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Rating from 'primevue/rating';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressBar from 'primevue/progressbar';
import FileUpload from 'primevue/fileupload';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Tooltip from 'primevue/tooltip';

// Стан компоненту
const store = useStore();
const router = useRouter();
const toast = useToast();
const loading = ref(false);
const reviews = ref([]);
const uploadProgress = ref(0);
const selectedFile = ref(null);
const imagePreview = ref(null);
const isEditing = ref(false);
const deleteDialog = ref(false);
const deleteReviewData = ref(null);

// Модель для нового/редагованого відгуку
const newReview = ref({
  id: null,
  name: '',
  rating: 5,
  text: '',
  imageUrl: '',
  dateRevocation: ''
});

// Вихід з адмін-панелі
const handleLogout = async () => {
  try {
    await store.dispatch('logout');
    router.push('/login');
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Помилка виходу',
      detail: 'Не вдалося вийти з системи',
      life: 3000
    });
  }
};

// Завантаження списку відгуків
const loadReviews = async () => {
  try {
    loading.value = true;
    const q = query(collection(db, 'reviews'), orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    reviews.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (err) {
    console.error('Error loading reviews:', err);
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Не вдалося завантажити відгуки',
      life: 3000
    });
  } finally {
    loading.value = false;
  }
};

// Обробка вибору файлу зображення
const onFileSelect = (event) => {
  selectedFile.value = event.files[0];
  if (selectedFile.value) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(selectedFile.value);
  }
};

// Видалення вибраного зображення
const removeImage = () => {
  selectedFile.value = null;
  imagePreview.value = null;
  // Якщо ми редагуємо і видаляємо зображення, запам'ятовуємо це
  if (isEditing.value) {
    newReview.value.imageUrl = '';
  }
};

// Завантаження зображення в Firebase Storage
const uploadImage = async () => {
  if (!selectedFile.value) return newReview.value.imageUrl || null; // Повертаємо поточне URL, якщо немає нового файлу

  try {
    const storageReference = storageRef(storage, `reviews/${Date.now()}_${selectedFile.value.name}`);
    const uploadTask = uploadBytesResumable(storageReference, selectedFile.value);

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed',
          (snapshot) => {
            uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.error('Upload error:', error);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            uploadProgress.value = 0;
            resolve(downloadURL);
          }
      );
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Не вдалося завантажити зображення',
      life: 3000
    });
    return null;
  }
};

// Додавання нового відгуку
const addReview = async () => {
  if (!validateForm()) return;

  try {
    loading.value = true;
    console.log('📝 Додавання нового відгуку...');

    if (selectedFile.value) {
      newReview.value.imageUrl = await uploadImage();
      console.log('🖼️ Зображення завантажено:', newReview.value.imageUrl);
    }

    const reviewsCollection = collection(db, 'reviews');
    const newDocRef = doc(reviewsCollection); // створюємо новий документ з унікальним ID

    const reviewData = {
      ...newReview.value,
      id: newDocRef.id, // додаємо ID прямо в документ
      date: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      imageUrl: newReview.value.imageUrl || ''
    };

    await setDoc(newDocRef, reviewData);
    console.log('✅ Відгук додано з ID:', newDocRef.id);

    await loadReviews();
    resetForm();

    toast.add({
      severity: 'success',
      summary: 'Успішно',
      detail: 'Відгук успішно додано',
      life: 3000
    });
  } catch (error) {
    console.error('❌ Error adding review:', error);
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Не вдалося додати відгук',
      life: 3000
    });
  } finally {
    loading.value = false;
  }
};


// Оновлення існуючого відгуку
const updateReview = async () => {
  console.log('🔄 Починається оновлення відгуку...');

  if (!validateForm()) {
    console.warn('⚠️ Форма не пройшла валідацію');
    return;
  }

  // Перевірка наявності ID
  const reviewId = newReview.value?.id;
  if (!reviewId) {
    console.error('❌ ID відгуку відсутній. Неможливо оновити.');
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'ID відгуку відсутній. Неможливо оновити.',
      life: 3000
    });
    return;
  }

  try {
    loading.value = true;
    console.log('🧾 Отримання посилання на документ review...');
    const reviewRef = doc(db, 'reviews', reviewId);

    const originalReview = reviews.value.find(r => r.id === reviewId);
    console.log('📄 Знайдено оригінальний відгук:', originalReview);

    if (!originalReview) {
      console.error('❌ Оригінальний відгук не знайдено!');
      toast.add({
        severity: 'error',
        summary: 'Помилка',
        detail: 'Оригінальний відгук не знайдено.',
        life: 3000
      });
      return;
    }

    // 🔄 Обробка зображення
    if (selectedFile.value) {
      console.log('🖼️ Завантаження нового зображення...');
      if (originalReview.imageUrl) {
        try {
          const imageUrl = new URL(originalReview.imageUrl);
          const imagePath = decodeURIComponent(imageUrl.pathname.split('/o/')[1].split('?')[0]);
          const imageRef = storageRef(storage, imagePath);
          await deleteObject(imageRef);
          console.log('🗑️ Старе зображення видалено');
        } catch (err) {
          console.error('⚠️ Помилка при видаленні старого зображення:', err);
        }
      }

      newReview.value.imageUrl = await uploadImage();
      console.log('✅ Нове зображення завантажено:', newReview.value.imageUrl);
    } else if (newReview.value.imageUrl === '') {
      console.log('🧼 Користувач видалив зображення...');
      if (originalReview.imageUrl) {
        try {
          const imageUrl = new URL(originalReview.imageUrl);
          const imagePath = decodeURIComponent(imageUrl.pathname.split('/o/')[1].split('?')[0]);
          const imageRef = storageRef(storage, imagePath);
          await deleteObject(imageRef);
          console.log('🗑️ Зображення видалено');
        } catch (err) {
          console.error('⚠️ Помилка при видаленні зображення:', err);
        }
      }
    }

    // 🔄 Оновлення документа в Firestore
    console.log('📤 Оновлення документа у Firestore...');
    await updateDoc(reviewRef, {
      name: newReview.value.name,
      text: newReview.value.text,
      rating: newReview.value.rating,
      imageUrl: newReview.value.imageUrl || '',
      updatedAt: new Date().toISOString()
    });

    console.log('✅ Відгук оновлено успішно');
    await loadReviews();
    resetForm();

    toast.add({
      severity: 'success',
      summary: 'Успішно',
      detail: 'Відгук успішно оновлено',
      life: 3000
    });

  } catch (error) {
    console.error('❌ Error updating review:', error);
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Не вдалося оновити відгук',
      life: 3000
    });
  } finally {
    loading.value = false;
    isEditing.value = false;
  }
};


// Підготовка до редагування відгуку
const editReview = (review) => {
  isEditing.value = true;
  newReview.value = { ...review };
  imagePreview.value = review.imageUrl;

  // Прокручуємо до форми
  setTimeout(() => {
    document.querySelector('.reviews-management__form').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 100);
};

// Скасування редагування
const cancelEdit = () => {
  isEditing.value = false;
  resetForm();
};

// Підтвердження видалення відгуку
const confirmDeleteReview = (review) => {
  deleteReviewData.value = review;
  deleteDialog.value = true;
};

// Видалення відгуку
const deleteReview = async () => {
  if (!deleteReviewData.value) return;

  try {
    loading.value = true;
    deleteDialog.value = false;

    // Видаляємо зображення, якщо воно є
    if (deleteReviewData.value.imageUrl) {
      try {
        const imageRef = storageRef(storage, deleteReviewData.value.imageUrl);
        await deleteObject(imageRef);
      } catch (err) {
        console.error('Error deleting image:', err);
      }
    }

    // Видаляємо документ
    await deleteDoc(doc(db, 'reviews', deleteReviewData.value.id));

    toast.add({
      severity: 'success',
      summary: 'Успішно',
      detail: `Відгук від "${deleteReviewData.value.name}" видалено`,
      life: 3000
    });

    await loadReviews();
  } catch (error) {
    console.error('Error deleting review:', error);
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Не вдалося видалити відгук',
      life: 3000
    });
  } finally {
    loading.value = false;
    deleteReviewData.value = null;
  }
};

// Валідація форми
const validateForm = () => {
  if (!newReview.value.name.trim()) {
    toast.add({
      severity: 'warn',
      summary: 'Увага',
      detail: 'Введіть ім\'я автора відгуку',
      life: 3000
    });
    return false;
  }

  if (!newReview.value.text.trim()) {
    toast.add({
      severity: 'warn',
      summary: 'Увага',
      detail: 'Введіть текст відгуку',
      life: 3000
    });
    return false;
  }

  return true;
};

// Скидання форми
const resetForm = () => {
  newReview.value = {
    id: null,
    name: '',
    rating: 5,
    text: '',
    imageUrl: ''
  };
  selectedFile.value = null;
  imagePreview.value = null;
  isEditing.value = false;
};

// Ініціалізація при монтуванні компоненту
// Налаштування директиви Tooltip
const vTooltip = Tooltip;

onMounted(() => {
  loadReviews();
});
</script>

<style scoped lang="scss">
img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  max-width: 100%;
}
.admin-panel {
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  &__content {
    background-color: #f8fafc;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
}

.reviews-management {
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .p-field {
    margin-bottom: 1.25rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.confirmation-content {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

:deep(.p-fileupload) {
  .p-button {
    width: 100%;
    justify-content: center;
  }
}

:deep(.p-datatable) {
  .p-datatable-thead > tr > th {
    background-color: #f1f5f9;
    color: #334155;
    font-weight: 600;
  }

  .p-datatable-tbody > tr {
    &:hover {
      background-color: #f8fafc !important;
    }

    & > td {
      border-color: #e2e8f0;
    }
  }
}

:deep(.p-paginator) {
  background-color: transparent;
  border-color: #e2e8f0;
}

:deep(.p-rating-option-active .p-rating-icon) {
  color: #fbbf24;

  &:hover {
    color: #fbbf24;
  }
}
</style>