import {
  getAllProducts,
  getProductById,
  getOtherProducts,
  Product,
} from "../productService";

// Mock fetch globally
global.fetch = jest.fn();

describe("productService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window to undefined for server-side tests
    delete (global as { window?: unknown }).window;
  });

  afterEach(() => {
    delete (global as { window?: unknown }).window;
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
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const products = await getAllProducts();

      expect(products).toEqual(mockProducts);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3000/api/products",
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
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect(getAllProducts()).rejects.toThrow(
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

      await expect(getAllProducts()).rejects.toThrow("Network error");
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });

  describe("getProductById", () => {
    it("fetches product by id successfully", async () => {
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
      const mockProduct = mockProducts[0];
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
      });

      const product = await getProductById("1");

      expect(product).toEqual(mockProduct);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3000/api/products/1",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    });

    it("returns null when product is not found (404)", async () => {
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      const product = await getProductById("999");

      expect(product).toBeNull();
    });

    it("throws error for other HTTP errors", async () => {
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
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
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const otherProducts = await getOtherProducts("1");

      expect(otherProducts).toEqual([mockProducts[1]]);
      expect(otherProducts).not.toContainEqual(mockProducts[0]);
    });

    it("returns all products when excludeId doesn't match", async () => {
      // Ensure window is undefined for server-side test
      delete (global as { window?: unknown }).window;
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const otherProducts = await getOtherProducts("999");

      expect(otherProducts).toEqual(mockProducts);
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
