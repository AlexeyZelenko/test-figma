import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StatisticsSection from "./CountdownSection.vue";
import StatisticItem from "./StatisticItem.vue";
import { vi } from "vitest";

describe("StatisticsSection", () => {
    it("renders the component correctly", () => {
        const wrapper = mount(StatisticsSection);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".statistics-heading").text()).toContain(
            "Search through more than 11 million social media profiles",
        );
        expect(wrapper.find(".statistics-subheading").text()).toContain(
            "Heepsy's search filters help you find exactly what you're looking for",
        );
    });

    it("renders the correct number of StatisticItem components", () => {
        const wrapper = mount(StatisticsSection);
        const statisticItems = wrapper.findAllComponents(StatisticItem);
        expect(statisticItems.length).toBe(4);
    });

    it("passes the correct props to StatisticItem components", () => {
        const wrapper = mount(StatisticsSection);
        const statisticItems = wrapper.findAllComponents(StatisticItem);

        const expectedValues = [2260, 1324, 3453, 9786];
        const expectedLabels = [
            "Satisfied Brands",
            "Satisfied Clients",
            "Sponsored",
            "Completed",
        ];

        statisticItems.forEach((item, index) => {
            expect(item.props("value")).toBe(expectedValues[index]);
            expect(item.props("label")).toBe(expectedLabels[index]);
        });
    });

    it("applies responsive styles on small screens", async () => {
        // Mock window.matchMedia for testing media queries
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: vi.fn().mockImplementation((query) => ({
                matches: query.includes("max-width: 640px"),
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });

        const wrapper = mount(StatisticsSection);

        // Check that the component has the correct responsive classes
        expect(wrapper.find(".statistics-section").exists()).toBe(true);

        // Note: Testing actual CSS media queries in Jest/Vitest is challenging
        // This test is more of a placeholder for where you would test responsive behavior
    });
});
