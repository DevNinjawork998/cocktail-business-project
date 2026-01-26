import {
  getAllProducts,
  getProductById,
  getOtherProducts,
  Product,
} from "../productService";

// Mock fetch globally
global.fetch = jest.fn();

describe("productService", () => {
  const originalWindow = global.window;

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window to undefined for server-side tests
    delete (global as { window?: unknown }).window;
    // Also ensure it's undefined in globalThis if it exists
    if (typeof globalThis !== "undefined" && "window" in globalThis) {
      delete (globalThis as { window?: unknown }).window;
    }
  });

  afterEach(() => {
    if (originalWindow !== undefined) {
      (global as { window?: unknown }).window = originalWindow;
    }
  });

  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Test Cocktail 1",
      subtitle: "Test Subtitle 1",
      description: "Test Description 1",
      longDescription: "Test Long Description 1",
      price: "RM 29.99",
      priceSubtext: "Premium quality",
      imageColor: "#ff6b6b",
      imageUrl: "/test-image-1.jpg",
      features: [{ text: "Feature 1", color: "#ff6b6b" }],
    },
    {
      id: "2",
      name: "Test Cocktail 2",
      subtitle: "Test Subtitle 2",
      description: "Test Description 2",
      longDescription: "Test Long Description 2",
      price: "RM 19.99",
      priceSubtext: "Refreshing blend",
      imageColor: "#4ecdc4",
      features: [{ text: "Feature 2", color: "#4ecdc4" }],
    },
  ];

  describe("getAllProducts", () => {
    it("fetches all products successfully", async () => {
      // In jsdom, window is always defined, so this tests client-side behavior
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const products = await getAllProducts();

      expect(products).toEqual(mockProducts);
      // Verify it was called with client-side URL (empty baseUrl)
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    });

    it("uses empty baseUrl when window is defined (client-side)", async () => {
      (global as { window?: unknown }).window = {};
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      await getAllProducts();

      expect(global.fetch).toHaveBeenCalledWith("/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });

    it("throws error when response is not ok", async () => {
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect(getAllProducts()).rejects.toThrow(
        "HTTP error! status: 500",
      );
      
      consoleErrorSpy.mockRestore();
    });

    it("handles network errors", async () => {
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error"),
      );

      await expect(getAllProducts()).rejects.toThrow("Network error");
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });

  describe("getProductById", () => {
    it("fetches product by id successfully", async () => {
      // In jsdom, window is always defined, so this tests client-side behavior
      const mockProduct = mockProducts[0];
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
      });

      const product = await getProductById("1");

      expect(product).toEqual(mockProduct);
      // Verify it was called with client-side URL (empty baseUrl)
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/products/1",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    });

    it("returns null when product is not found (404)", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      const product = await getProductById("999");

      expect(product).toBeNull();
    });

    it("throws error for other HTTP errors", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect(getProductById("1")).rejects.toThrow(
        "HTTP error! status: 500",
      );
    });

    it("handles network errors", async () => {
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error"),
      );

      await expect(getProductById("1")).rejects.toThrow("Network error");
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });

    it("uses empty baseUrl when window is defined (client-side)", async () => {
      (global as { window?: unknown }).window = {};
      const mockProduct = mockProducts[0];
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
      });

      await getProductById("1");

      expect(global.fetch).toHaveBeenCalledWith("/api/products/1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  });

  describe("getOtherProducts", () => {
    it("returns all products except the excluded one", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const otherProducts = await getOtherProducts("1");

      expect(otherProducts).toEqual([mockProducts[1]]);
      expect(otherProducts).not.toContainEqual(mockProducts[0]);
    });

    it("returns all products when excludeId doesn't match", async () => {
      // In jsdom, window is always defined, so we test client-side behavior
      // For server-side testing, we'd need a different test environment
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const otherProducts = await getOtherProducts("999");

      expect(otherProducts).toEqual(mockProducts);
      // Verify it was called with client-side URL (empty baseUrl)
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/products",
        expect.any(Object),
      );
    });

    it("handles errors from getAllProducts", async () => {
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error"),
      );

      await expect(getOtherProducts("1")).rejects.toThrow("Network error");
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });
});
