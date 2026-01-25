import {
  isFeatureEnabled,
  isStripeEnabled,
  isCTABannerEnabled,
  getAllFeatureFlags,
  clearFeatureFlagsCache,
} from "../featureFlags";

// Mock fs and path modules
jest.mock("fs", () => ({
  readFileSync: jest.fn(),
}));

jest.mock("path", () => ({
  join: jest.fn((...args) => args.join("/")),
}));

describe("featureFlags", () => {
  const originalEnv = process.env;
  const originalWindow = global.window;

  beforeEach(() => {
    jest.clearAllMocks();
    clearFeatureFlagsCache();
    // Reset environment variables
    process.env = { ...originalEnv };
    // Ensure window is undefined for server-side tests
    delete (global as { window?: unknown }).window;
    // Also delete from globalThis if it exists
    if (typeof globalThis !== "undefined") {
      delete (globalThis as { window?: unknown }).window;
    }
  });

  afterEach(() => {
    process.env = originalEnv;
    if (originalWindow !== undefined) {
      (global as { window?: unknown }).window = originalWindow;
    }
  });

  describe("isFeatureEnabled", () => {
    it("returns true when environment variable is 'true'", () => {
      process.env.NEXT_PUBLIC_ENABLE_TESTFEATURE = "true";

      expect(isFeatureEnabled("testfeature")).toBe(true);
    });

    it("returns true when environment variable is '1'", () => {
      process.env.NEXT_PUBLIC_ENABLE_TESTFEATURE = "1";

      expect(isFeatureEnabled("testfeature")).toBe(true);
    });

    it("returns false when environment variable is 'false'", () => {
      process.env.NEXT_PUBLIC_ENABLE_TESTFEATURE = "false";

      expect(isFeatureEnabled("testfeature")).toBe(false);
    });

    it("returns false when environment variable is '0'", () => {
      process.env.NEXT_PUBLIC_ENABLE_TESTFEATURE = "0";

      expect(isFeatureEnabled("testfeature")).toBe(false);
    });

    it("returns true by default when no environment variable is set (server-side)", () => {
      delete process.env.NEXT_PUBLIC_ENABLE_TESTFEATURE;

      expect(isFeatureEnabled("testfeature")).toBe(true);
    });

    it("returns true by default when no environment variable is set (client-side)", () => {
      (global as { window?: unknown }).window = {};
      delete process.env.NEXT_PUBLIC_ENABLE_TESTFEATURE;

      expect(isFeatureEnabled("testfeature")).toBe(true);
    });

    it("handles uppercase feature names correctly", () => {
      process.env.NEXT_PUBLIC_ENABLE_STRIPE = "true";

      expect(isFeatureEnabled("stripe")).toBe(true);
    });

    it("handles mixed case feature names correctly", () => {
      process.env.NEXT_PUBLIC_ENABLE_CTABANNER = "true";

      expect(isFeatureEnabled("ctabanner")).toBe(true);
    });
  });

  describe("isStripeEnabled", () => {
    it("returns true when Stripe is enabled via environment variable", () => {
      process.env.NEXT_PUBLIC_ENABLE_STRIPE = "true";

      expect(isStripeEnabled()).toBe(true);
    });

    it("returns false when Stripe is disabled via environment variable", () => {
      process.env.NEXT_PUBLIC_ENABLE_STRIPE = "false";

      expect(isStripeEnabled()).toBe(false);
    });

    it("returns true by default", () => {
      delete process.env.NEXT_PUBLIC_ENABLE_STRIPE;

      expect(isStripeEnabled()).toBe(true);
    });
  });

  describe("isCTABannerEnabled", () => {
    it("returns true when CTABanner is enabled via environment variable", () => {
      process.env.NEXT_PUBLIC_ENABLE_CTABANNER = "true";

      expect(isCTABannerEnabled()).toBe(true);
    });

    it("returns false when CTABanner is disabled via environment variable", () => {
      process.env.NEXT_PUBLIC_ENABLE_CTABANNER = "false";

      expect(isCTABannerEnabled()).toBe(false);
    });

    it("returns true by default", () => {
      delete process.env.NEXT_PUBLIC_ENABLE_CTABANNER;

      expect(isCTABannerEnabled()).toBe(true);
    });
  });

  describe("getAllFeatureFlags", () => {
    it("returns empty object on client-side", () => {
      (global as { window?: unknown }).window = {};

      const flags = getAllFeatureFlags();

      expect(flags).toEqual({});
    });

    it("returns feature flags from config file on server-side", () => {
      // Mock window to be undefined for server-side test
      const originalWindow = global.window;
      Object.defineProperty(global, "window", {
        value: undefined,
        writable: true,
        configurable: true,
      });
      
      const { readFileSync } = require("fs");
      const mockConfig = {
        features: {
          stripe: { enabled: true },
          ctabanner: { enabled: false },
        },
      };

      (readFileSync as jest.Mock).mockReturnValueOnce(
        JSON.stringify(mockConfig),
      );

      const flags = getAllFeatureFlags();

      expect(flags).toEqual({
        stripe: true,
        ctabanner: false,
      });
      
      // Restore window
      Object.defineProperty(global, "window", {
        value: originalWindow,
        writable: true,
        configurable: true,
      });
    });

    it("prioritizes environment variables over config file", () => {
      // Mock window to be undefined for server-side test
      const originalWindow = global.window;
      Object.defineProperty(global, "window", {
        value: undefined,
        writable: true,
        configurable: true,
      });
      
      const { readFileSync } = require("fs");
      const mockConfig = {
        features: {
          stripe: { enabled: false },
        },
      };

      process.env.NEXT_PUBLIC_ENABLE_STRIPE = "true";
      (readFileSync as jest.Mock).mockReturnValueOnce(
        JSON.stringify(mockConfig),
      );

      const flags = getAllFeatureFlags();

      expect(flags.stripe).toBe(true);
      
      // Restore window
      Object.defineProperty(global, "window", {
        value: originalWindow,
        writable: true,
        configurable: true,
      });
    });

    it("handles missing config file gracefully", () => {
      // Mock window to be undefined for server-side test
      const originalWindow = global.window;
      Object.defineProperty(global, "window", {
        value: undefined,
        writable: true,
        configurable: true,
      });
      
      const { readFileSync } = require("fs");
      (readFileSync as jest.Mock).mockImplementationOnce(() => {
        throw new Error("File not found");
      });

      const consoleWarnSpy = jest
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      const flags = getAllFeatureFlags();

      expect(flags).toEqual({
        stripe: true,
      });
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
      
      // Restore window
      Object.defineProperty(global, "window", {
        value: originalWindow,
        writable: true,
        configurable: true,
      });
    });
  });

  describe("clearFeatureFlagsCache", () => {
    it("clears the cached config", () => {
      // Mock window to be undefined for server-side test
      const originalWindow = global.window;
      Object.defineProperty(global, "window", {
        value: undefined,
        writable: true,
        configurable: true,
      });
      
      const { readFileSync } = require("fs");
      const mockConfig1 = {
        features: {
          stripe: { enabled: true },
        },
      };
      const mockConfig2 = {
        features: {
          stripe: { enabled: false },
        },
      };

      (readFileSync as jest.Mock)
        .mockReturnValueOnce(JSON.stringify(mockConfig1))
        .mockReturnValueOnce(JSON.stringify(mockConfig2));

      // First call should cache
      getAllFeatureFlags();
      expect(readFileSync).toHaveBeenCalledTimes(1);

      // Clear cache
      clearFeatureFlagsCache();

      // Second call should read file again
      getAllFeatureFlags();
      expect(readFileSync).toHaveBeenCalledTimes(2);
      
      // Restore window
      Object.defineProperty(global, "window", {
        value: originalWindow,
        writable: true,
        configurable: true,
      });
    });
  });
});
