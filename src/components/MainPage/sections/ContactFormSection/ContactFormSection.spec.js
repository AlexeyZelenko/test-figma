import { mount } from '@vue/test-utils';
import ContactForm from './index.vue';
import flushPromises from "flush-promises";

describe('ContactForm.vue', () => {
    let wrapper;

    beforeAll(() => {
        global.window.alert = vi.fn();
    });

    beforeEach(() => {
        wrapper = mount(ContactForm);
    });

    test('Отображает форму', () => {
        expect(wrapper.find('form').exists()).toBe(true);
    });

    test('Валидация имени - пустое поле', async () => {
        await wrapper.find('#firstName').setValue('');
        await wrapper.find('#firstName').trigger('blur');
        expect(wrapper.text()).toContain("Поле обов'язкове до заповнення");
    });

    test('Валидация имени - корректное значение', async () => {
        await wrapper.find('#firstName').setValue('Іван');
        await wrapper.find('#firstName').trigger('blur');
        expect(wrapper.text()).not.toContain("Поле обов'язкове до заповнення");
    });

    test("Валидация ИПН - слишком короткое значение", async () => {
        const wrapper = mount(ContactForm);
        const ipnInput = wrapper.find("#ipn");

        await ipnInput.setValue("123"); // Вводим короткое значение
        await ipnInput.trigger("blur"); // Триггерим blur
        await flushPromises(); // Ждем обновления DOM

        // Проверяем конкретный элемент ошибки, а не весь текст
        const errorMessage = wrapper.find(".error-message");

        expect(errorMessage.exists()).toBe(true);
        expect(errorMessage.text()).toBe("Мінімум 8 символів");
    });

    test('Валидация суммы - менее 1000', async () => {
        await wrapper.find('#amount').setValue('500');
        await wrapper.find('#amount').trigger('blur');
        expect(wrapper.text()).toContain("Мінімальне значення: 1000");
    });

    test('Успешная отправка формы', async () => {
        await wrapper.find('#firstName').setValue('Іван');
        await wrapper.find('#lastName').setValue('Петров');
        await wrapper.find('#ipn').setValue('1234567890');
        await wrapper.find('#amount').setValue('5000');
        await wrapper.find('#terms').setChecked(true);
        await wrapper.find('form').trigger('submit.prevent');
        expect(wrapper.vm.errors).toEqual({});
    });
});
