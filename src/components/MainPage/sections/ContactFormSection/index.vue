<template>
  <section class="contact-form">
    <h2>Замовити послугу</h2>
    <div class="container">
      <form @submit.prevent="onSubmit" class="form">
        <div class="form-group" :class="{ 'error': errors.firstName }">
          <label for="firstName">Ім'я</label>
          <div class="input-wrapper">
            <input
                id="firstName"
                v-model="form.firstName"
                @blur="validateField('firstName')"
                @input="validateField('firstName')"
                type="text"
                placeholder="Введіть ім'я"
                :class="{ 'error': errors.firstName }"
            />
            <span v-if="errors.firstName" class="error-icon">
              <img src="/iconError.svg">
            </span>
          </div>
          <span class="error-message" v-if="errors.firstName">{{ errors.firstName }}</span>
        </div>


        <div class="form-group" :class="{ 'error': errors.lastName }">
          <label for="lastName">Прізвище</label>
          <div class="input-wrapper">
            <input
                id="lastName"
                v-model="form.lastName"
                @blur="validateField('lastName')"
                @input="validateField('lastName')"
                type="text"
                placeholder="Введіть прізвище"
                :class="{ 'error': errors.lastName }"
            />
            <span v-if="errors.lastName" class="error-icon">
              <img src="/iconError.svg">
            </span>
          </div>
        </div>

        <div class="form-group" :class="{ 'error': errors.ipn }">
          <label for="ipn">ІПН</label>
          <div class="input-wrapper">
            <input
                id="ipn"
                v-model="form.ipn"
                @blur="validateField('ipn')"
                @input="validateField('ipn')"
                type="text"
                @keypress="numberOnly"
                :class="{ 'error': errors.ipn }"
            />
            <span v-if="errors.ipn" class="error-icon">
              <img src="/iconError.svg">
            </span>
          </div>
        </div>

        <div class="form-group" :class="{ 'error': errors.amount }">
          <label for="amount">Сума угоди</label>
          <div class="input-wrapper">
            <input
                id="amount"
                v-model="form.amount"
                @blur="validateField('amount')"
                @input="validateField('amount')"
                type="text"
                placeholder="Введіть суму угоди"
                @keypress="numberOnly"
                :class="{ 'error': errors.amount }"
            />
            <span v-if="errors.amount" class="error-icon">
              <img src="/iconError.svg">
            </span>
          </div>
        </div>

        <div class="form-group checkbox" :class="{ 'error': errors.terms }">
          <input
              id="terms"
              v-model="form.terms"
              @change="validateField('terms')"
              type="checkbox"
          />
          <label for="terms">Погоджуюсь з правилами та умовами</label>
          <span class="error-message" v-if="errors.terms">{{ errors.terms }}</span>
        </div>

        <button type="submit" class="submit-button">Відправити</button>
      </form>
    </div>
  </section>
</template>

<script>
import * as yup from "yup";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        ipn: "",
        amount: "",
        terms: false,
      },
      errors: {},
      schema: yup.object({
        firstName: yup
            .string()
            .required("Поле обов'язкове до заповнення")
            .matches(/^[А-ЯІЇЄҐа-яіїєґ''-]+$/, "Тільки кирилиця та спеціальні символи")
            .min(1, "Мінімум 1 символ")
            .max(38, "Максимум 38 символів"),
        lastName: yup
            .string()
            .required("Поле обов'язкове до заповнення")
            .matches(/^[А-ЯІЇЄҐа-яіїєґ''-]+$/, "Тільки кирилиця та спеціальні символи")
            .min(1, "Мінімум 1 символ")
            .max(38, "Максимум 38 символів"),
        ipn: yup
            .string()
            .required("Поле обов'язкове до заповнення")
            .matches(/^\d+$/, "Тільки цифри")
            .min(8, "Мінімум 8 символів")
            .max(10, "Максимум 10 символів"),
        amount: yup
            .string()
            .matches(/^\d+$/, "Тільки цифри")
            .test("min", "Мінімальне значення: 1000", (value) => !value || parseInt(value) >= 1000)
            .test("max", "Максимальне значення: 1000000", (value) => !value || parseInt(value) <= 1000000),
        terms: yup.boolean().oneOf([true], "Обов'язкове до заповнення"),
      }),
    };
  },
  methods: {
    async validateField(field) {
      try {
        await this.schema.validateAt(field, this.form);
        this.errors[field] = "";
      } catch (err) {
        this.errors[field] = err.message;
      }
    },
    numberOnly(event) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    },
    async onSubmit() {
      try {
        await this.schema.validate(this.form, { abortEarly: false });
        alert("Форма успішно відправлена! ✅");
        this.errors = {};
      } catch (err) {
        this.errors = err.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
      }
    },
  },
};
</script>

<style lang="scss">
// Mixins
@mixin font-style($weight, $size) {
  font-family: 'Noto Sans', sans-serif;
  font-weight: $weight;
  font-size: $size;
}

// Variables
$text-color: #666666;
$border-color: #CCCCCC;
$dark-text: #333333;
$white: white;
$primary-color: #217bf4;
$error-color: #EB5757;
$text-color: #666666;
$border-color: #CCCCCC;
$dark-text: #333333;
$white: white;

// Styles
.contact-form {
  padding: 40px 20px;
  text-align: center;

  h2 {
    @include font-style(700, 24px);
    color: $dark-text;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .form {
    width: 100%;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .form-group {
    position: relative;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;

    label {
      @include font-style(600, 12px);
      color: $text-color;
    }

    input[type="text"] {
      padding: 16px;
      border: 1px solid $border-color;
      border-radius: 8px;
      @include font-style(400, 16px);
      color: $text-color;
      transition: all 0.3s ease;

      &::placeholder {
        color: $text-color;
      }

      &:focus {
        outline: none;
        border-color: $primary-color;
      }

      &.error {
        border: 2px solid $error-color;
        color: $dark-text;
      }
    }

    &.error input {
      border-color: $error-color;
    }

    .error-message {
      color: $error-color;
      font-size: 14px;
      margin-top: 5px;
    }
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-wrapper input {
    width: 100%;
    padding-right: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 60px;
  }

  .input-wrapper input.error {
    border-color: #dc3545;
  }

  .error-icon {
    position: absolute;
    right: 10px;
    color: #dc3545;
    font-size: 18px;
  }

  .error-message {
    color: #dc3545;
    font-size: 12px;
    margin-top: 5px;
  }

  .checkbox {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;

    input[type="checkbox"] {
      appearance: none;
      width: 24px;
      height: 24px;
      border: 1px solid $border-color;
      border-radius: 8px;
      background-color: $white;
      display: inline-block;
      position: relative;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        color: transparent;
        transition: color 0.2s ease-in-out;
      }

      &:checked {
        border-color: $dark-text;
        background-color: $white;

        &::before {
          content: "✔";
          color: #1ca043;
        }
      }
    }

    label {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $text-color;
    }
  }

  .submit-button {
    width: 170px;
    padding: 16px;
    background: $primary-color;
    border-radius: 8px;
    @include font-style(400, 16px);
    line-height: 24px;
    color: $white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 0 auto;

    &:hover {
      opacity: .9;
      background: $primary-color;
    }
  }
}
</style>
