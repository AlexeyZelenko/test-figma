<template>
    <section class="principles">
      <div class="principles__container">
        <h2 class="principles__title">Принципи нашої роботи</h2>
        
        <div class="principles__grid">
          <div class="principle-card"
               v-for="(principle, index) in principles"
               :key="index"
               :class="{ 'principle-card--featured': principle.featured }"
          >
            <div class="principle-card__icon-wrapper">
              <i :class="`pi ${principle.icon}`"></i>
            </div>
            <h3 class="principle-card__title">{{ principle.title }}</h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'PrinciplesSection',
    setup() {
      const principles = ref([
        {
          icon: 'pi-briefcase',
          title: 'Високопрофесійна юридична допомога',
          featured: false
        },
        {
          icon: 'pi-comments',
          title: 'Допомога на попередніх переговорах',
          featured: false
        },
        {
          icon: 'pi-info-circle',
          title: 'Юридичні поради для наших клієнтів',
          featured: false
        },
        {
          icon: 'pi-file',
          title: 'Допомога швидкої підготовки всіх документів',
          featured: false
        },
        {
          icon: 'pi-car',
          title: 'Рухливість та Супровід',
          featured: false
        },
        {
          icon: 'pi-shield',
          title: 'Надійність',
          featured: false
        },
        {
          icon: 'pi-clock',
          title: 'Оперативність',
          featured: false
        },
        {
          icon: 'pi-heart',
          title: 'Чесність',
          featured: false
        },
        {
          icon: 'pi-eye',
          title: 'Відкритість',
          featured: false
        },               
        {
          icon: 'pi-check-circle',
          title: 'Якість',
          featured: false
        },
        {
          icon: 'pi-exclamation-triangle',
          title: 'Мінімізація ризиків клієнтів',
          featured: false
        },
        {
          icon: 'pi-star',
          title: 'Ексклюзивні пропозиції',
          featured: false
        }
      ]);
  
      return {
        principles
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  @use "sass:color";
  
  .principles {
    padding: 80px 0;
    background-color: #f8f9fa;
    overflow: hidden; // Предотвращает выход анимации за пределы контейнера
  
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
  
    &__title {
      color: #048;
      font-size: 36px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 60px;
      font-family: "Noto Sans", sans-serif;
      position: relative;
      
      &::after {
        content: '';
        display: block;
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #6ea2e6, #048);
        margin: 20px auto 0;
        border-radius: 2px;
      }
      
      animation: fadeIn 1s ease-out;
    }
  
    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 25px;
      
      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      
      @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  
  .principle-card {
    background: white;
    padding: 30px 25px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    height: 100%;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #6ea2e6, rgba(110, 162, 230, 0.5));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      
      &::before {
        opacity: 1;
      }
      
      .principle-card__icon-wrapper {
        background: #048;
        transform: scale(1.1);
        
        i {
          color: white;
        }
      }
    }
    
    @for $i from 1 through 14 {
      &:nth-child(#{$i}) {
        animation: slideIn 0.5s forwards ease-out;
        animation-delay: #{$i * 0.1}s;
      }
    }
    
    &--featured {
      background: linear-gradient(135deg, #f8f9fa, white);
      
      .principle-card__icon-wrapper {
        background: linear-gradient(135deg, #6ea2e6, #048);
        
        i {
          color: white;
        }
      }
      
      &::before {
        background: linear-gradient(90deg, #048, #6ea2e6);
        opacity: 1;
      }
    }
  
    &__icon-wrapper {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: rgba(110, 162, 230, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      transition: all 0.3s ease;
      
      i {
        font-size: 28px;
        color: #6ea2e6;
        transition: color 0.3s ease;
      }
    }
  
    &__title {
      color: #233656;
      font-size: 16px;
      font-weight: 600;
      margin: 0;
      line-height: 1.4;
      font-family: "Noto Sans", sans-serif;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @media (max-width: 1024px) {
    .principles {
      padding: 70px 0;
      
      &__title {
        font-size: 32px;
        margin-bottom: 50px;
        
        &::after {
          width: 70px;
          margin-top: 15px;
        }
      }
    }
    
    .principle-card {
      padding: 25px 20px;
      
      &__icon-wrapper {
        width: 60px;
        height: 60px;
        
        i {
          font-size: 24px;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .principles {
      padding: 50px 0;
      
      &__title {
        font-size: 28px;
        margin-bottom: 40px;
        
        &::after {
          width: 60px;
          height: 3px;
        }
      }
      
      &__grid {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 20px;
      }
    }
    
    .principle-card {
      padding: 20px 15px;
      
      &__title {
        font-size: 16px;
      }
      
      &__icon-wrapper {
        width: 55px;
        height: 55px;
        margin-bottom: 15px;
        
        i {
          font-size: 22px;
        }
      }
    }
  }
  
  @media (max-width: 480px) {
    .principles {
      padding: 40px 0;
      
      &__title {
        font-size: 24px;
        margin-bottom: 30px;
      }
      
      &__grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }
    }
  }
  </style>