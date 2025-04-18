<template>
  <div class="register">
    <div class="register__container">
      <h2 class="register__title">Реєстрація</h2>
      <form @submit.prevent="handleSubmit" class="register__form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Підтвердіть пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="form-input"
          />
        </div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <button class="register-button" :disabled="loading">
          {{ loading ? 'Реєстрація...' : 'Зареєструватися' }}
        </button>
      </form>
      <div class="register__login">
        <p>Вже маєте обліковий запис?</p>
        <router-link to="/login" class="login-link">
          Увійти
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default {
  name: 'RegisterView',
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const error = ref(null);
    const loading = ref(false);

    const handleSubmit = async () => {
      error.value = null;
      
      if (password.value !== confirmPassword.value) {
        error.value = 'Паролі не співпадають';
        return;
      }

      loading.value = true;

      try {
        const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
        if (res) {
          router.push('/admin');
        }
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      email,
      password,
      confirmPassword,
      error,
      loading,
      handleSubmit
    };
  }
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.register {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;

  &__container {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 400px;
  }

  &__title {
    color: #048;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
    font-family: "Noto Sans", sans-serif;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__login {
    margin-top: 20px;
    text-align: center;
    color: #495057;
    font-size: 14px;

    p {
      margin-bottom: 8px;
    }
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #495057;
    font-size: 14px;
    font-weight: 500;
  }
}

.form-input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #6ea2e6;
  }
}

.register-button {
  height: 40px;
  background: #6ea2e6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: color.adjust(#6ea2e6, $lightness: -10%);
    color: white;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.login-link {
  color: #6ea2e6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: color.adjust(#6ea2e6, $lightness: -10%);
  }
}

.error {
  color: #dc3545;
  font-size: 14px;
  text-align: center;
}
</style> 