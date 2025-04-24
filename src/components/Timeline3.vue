<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Stepper from 'primevue/stepper';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

const isMobile = ref(window.innerWidth <= 960);
const activeStep = ref('1');

const events = ref([
  { status: 'КРОК 1', description: 'Ви подаєте заявку', icon: 'pi pi-file-o', color: '#007bff' },
  { status: 'КРОК 2', description: 'Ми розуміємо завдання', icon: 'pi pi-comments', color: '#6c757d' },
  { status: 'КРОК 3', description: 'Укладаємо договір на послуги', icon: 'pi pi-pencil', color: '#28a745' },
  { status: 'КРОК 4', description: 'Покроково виконуємо робочі процеси', icon: 'pi pi-cog', color: '#ffc107' },
  { status: 'КРОК 5', description: 'Ви отримуєте регулярні звіти про роботу', icon: 'pi pi-chart-bar', color: '#17a2b8' },
  { status: 'КРОК 6', description: 'Знаходимо покупця або продавця об\'єкту нерухомості', icon: 'pi pi-users', color: '#fd7e14' },
  { status: 'КРОК 7', description: 'Супроводжуємо та здійснюємо угоду', icon: 'pi pi-briefcase', color: '#dc3545' },
  { status: 'КРОК 8', description: 'Ви отримуєте бажаний результат', icon: 'pi pi-check-circle', color: '#28a745' }
]);

const onResize = () => {
  isMobile.value = window.innerWidth <= 960;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>


<template>
  <div v-if="isMobile" class="card" :class="{'w-full': isMobile}">
    <Stepper value="1" class="m-4">
      <StepItem value="1">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl p-2">
              Ви подаєте заявку
            </div>
          </div>
          <div class="py-6 my-2">
            <Button label="НАСТУПНИЙ" @click="activateCallback('2')" class="my-2"/>
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl">
              Ми розуміємо завдання
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="НАЗАД" severity="secondary" @click="activateCallback('1')" />
            <Button label="НАСТУПНИЙ" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl">
              Укладаємо договір на послуги
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="НАЗАД" severity="secondary" @click="activateCallback('2')" />
            <Button label="НАСТУПНИЙ" @click="activateCallback('4')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="4">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl px-2">
              <span style="padding: 10px">Покроково виконуємо робочі процеси</span>
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="НАЗАД" severity="secondary" @click="activateCallback('3')" />
            <Button label="НАСТУПНИЙ" @click="activateCallback('5')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="5">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div style="padding: 10px" class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl">
              Ви отримуєте регулярні звіти про роботу
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="НАЗАД" severity="secondary" @click="activateCallback('4')" />
            <Button label="НАСТУПНИЙ" @click="activateCallback('6')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="6">
      <Step>КРОК</Step>
      <StepPanel v-slot="{ activateCallback }">
        <div class="flex flex-col h-36" style="margin: 5px">
          <div style="padding: 10px" class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl">
            Знаходимо покупця або продавця об'єкту нерухомості
          </div>
        </div>
        <div class="flex py-6 gap-2">
          <Button label="НАЗАД" severity="secondary" @click="activateCallback('5')" />
          <Button label="НАСТУПНИЙ" @click="activateCallback('7')" />
        </div>
      </StepPanel>
    </StepItem>
      <StepItem value="7">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div style="padding: 20px" class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl">
              Супроводжуємо та здійснюємо угоду
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="НАЗАД" severity="secondary" @click="activateCallback('6')" />
            <Button label="НАСТУПНИЙ" @click="activateCallback('8')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="8">
        <Step>КРОК</Step>
        <StepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-36" style="margin: 5px">
            <div style="padding: 20px" class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center text-xl">
              Ви отримуєте бажаний результат
            </div>
          </div>
          <div class="py-6">
            <Button label="НАЗАД" severity="secondary" @click="activateCallback('7')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>