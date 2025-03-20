import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AchievementSection from './index.vue';

describe('AchievementSection.vue', () => {
    it('renders the achievement section correctly', () => {
        const wrapper = mount(AchievementSection);

        expect(wrapper.find('.achievement-section').exists()).toBe(true);
        expect(wrapper.find('.rating-title').text()).toBe('4.8 Rating');
        expect(wrapper.find('.members-count-highlight').text()).toBe('+836k');
        expect(wrapper.find('.awards-title').text()).toBe('Awwwards');
    });

    it('renders the buttons with correct text', () => {
        const wrapper = mount(AchievementSection);

        const buttons = wrapper.findAll('button');
        expect(buttons.length).toBe(2);
        expect(buttons[0].text()).toContain('Join Our Community');
        expect(buttons[1].text()).toContain('Go To Awards');
    });

    it('renders the achievement text section correctly', () => {
        const wrapper = mount(AchievementSection);

        expect(wrapper.find('.achievement-subtitle').text()).toBe('Our Achievement');
        expect(wrapper.find('.achievement-title').text()).toBe('We are Connecting You The Digital Life.');
        expect(wrapper.find('.achievement-description').exists()).toBe(true);
    });

    it('renders the discover button', () => {
        const wrapper = mount(AchievementSection);

        const discoverButton = wrapper.find('.discover-button');
        expect(discoverButton.exists()).toBe(true);
        expect(discoverButton.text()).toContain('Discover me');
    });
});
