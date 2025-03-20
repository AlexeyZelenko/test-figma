import { vi } from "vitest";
import { config } from "@vue/test-utils";

// Настраиваем глобальный mock `matchMedia`
global.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query.includes("max-width: 640px"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
}));

// Настраиваем `@vue/test-utils` для Vue 3
config.global.mocks = {};
