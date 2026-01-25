# Testing Guide

This project uses **Jest** and **React Testing Library** for unit testing. The testing setup is configured to work seamlessly with Next.js, TypeScript, and styled-components.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure & Test Organization](#project-structure--test-organization)
- [Writing Tests](#writing-tests)
- [Testing Patterns](#testing-patterns)
- [Testing New Features](#testing-new-features)
- [Test Utilities](#test-utilities)
- [Best Practices](#best-practices)
- [Coverage](#coverage)
- [Debugging Tests](#debugging-tests)
- [Continuous Integration](#continuous-integration)
- [FAQ](#faq)
- [Additional Resources](#additional-resources)

---

## Quick Start

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests in CI mode (no watch, with coverage)
npm run test:ci
```

### Test Scripts

- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode (re-runs when files change)
- `npm run test:coverage` - Run tests and generate coverage report
- `npm run test:ci` - Run tests for CI/CD pipelines

---

## Project Structure & Test Organization

**Where should tests live?**

Tests are colocated with the components or utilities they test. This means each component or utility has its own `__tests__` folder nearby. This approach makes it easy to:

- Find tests for a specific component
- Update tests when the component changes
- Keep tests focused and maintainable

**Example Structure:**

```
src/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.styles.tsx
│   │   └── __tests__/
│   │       └── ComponentName.test.tsx
├── utils/
│   ├── utils.ts
│   └── __tests__/
│       └── utils.test.ts
└── test-utils.tsx          # Custom test utilities
```

**Why not one big test file?**

- Keeping tests split by component scales better, is easier to debug, and is the industry standard for React/Next.js projects.
- Test runners like Jest can run multiple files in parallel, making your test suite faster.
- When a test fails, you know exactly which component or utility is affected.

**Best Practice:**

- One test file per component or utility.
- Use `describe` blocks to group related tests.
- For integration or workflow tests, you may have a separate file (e.g., `ProductList.integration.test.tsx`).

---

## Writing Tests

### Component Tests

Components should be tested using React Testing Library. Here's an example:

```tsx
import React from "react";
import { render, screen, fireEvent } from "@/test-utils";
import MyComponent from "../MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("handles user interactions", () => {
    render(<MyComponent />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });
});
```

### Utility Function Tests

Pure functions should be tested for various inputs and edge cases:

```tsx
// Example: Testing a utility function
describe("Utility Function", () => {
  it("handles valid input correctly", () => {
    const result = utilityFunction(validInput);
    expect(result).toBe(expectedOutput);
  });

  it("handles edge cases", () => {
    const result = utilityFunction(edgeCaseInput);
    expect(result).toBeDefined();
  });
});
```

---

## Testing Patterns

### 1. Component Testing

**What to test:**

- Component renders without crashing
- Props are handled correctly
- User interactions work as expected
- Accessibility features are present
- Styled-components render properly

**Example:**

```tsx
describe("Button Component", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 2. Hook Testing

**What to test:**

- Hook returns expected values
- State updates work correctly
- Side effects are triggered appropriately

**Example:**

```tsx
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

describe("useCounter", () => {
  it("increments counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

### 3. Integration Testing

**What to test:**

- Multiple components work together
- Data flows correctly between components
- User workflows function end-to-end

**Example:**

```tsx
describe("Product List Integration", () => {
  it("filters products when search is used", () => {
    render(<ProductList products={mockProducts} />);

    const searchInput = screen.getByPlaceholderText("Search products...");
    fireEvent.change(searchInput, { target: { value: "cocktail" } });

    expect(screen.getByText("Mojito")).toBeInTheDocument();
    expect(screen.queryByText("Other Product")).not.toBeInTheDocument();
  });
});
```

---

## Testing New Features

### 1. Loading States Testing

**Testing skeleton loading components:**

```tsx
import { render, screen } from "@/test-utils";
import ProductPageLoading from "../ProductPageLoading";

describe("ProductPageLoading", () => {
  it("renders skeleton loading elements", () => {
    render(<ProductPageLoading />);

    // Check for skeleton elements
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
    expect(screen.getByTestId("loading-image")).toBeInTheDocument();
    expect(screen.getByTestId("loading-title")).toBeInTheDocument();
    expect(screen.getByTestId("loading-description")).toBeInTheDocument();
  });

  it("shows loading placeholders with correct styling", () => {
    render(<ProductPageLoading />);

    const skeletonElements = screen.getAllByTestId(/loading-/);
    expect(skeletonElements).toHaveLength(expect.any(Number));
  });
});
```

**Testing loading state transitions:**

```tsx
import { render, screen, waitFor } from "@/test-utils";
import ProductPageWrapper from "../ProductPageWrapper";

describe("ProductPageWrapper", () => {
  it("shows loading state initially", () => {
    render(<ProductPageWrapper product={mockProduct} />);

    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });

  it("transitions to product content after loading", async () => {
    render(<ProductPageWrapper product={mockProduct} />);

    await waitFor(
      () => {
        expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
      },
      { timeout: 1000 },
    );

    expect(screen.queryByTestId("loading-container")).not.toBeInTheDocument();
  });
});
```

### 2. Styled-components Testing

**Testing styled components:**

```tsx
import { render } from "@/test-utils";
import { StyledButton } from "../ComponentName.styles";

describe("Styled Components", () => {
  it("renders with correct theme colors", () => {
    const { container } = render(<StyledButton>Test Button</StyledButton>);

    const button = container.querySelector("button");
    expect(button).toHaveStyle({
      backgroundColor: expect.stringContaining("451515"), // chocolateKisses
      color: expect.stringContaining("FFFFFF"), // text.onPrimary
    });
  });

  it("applies variant styles correctly", () => {
    const { container } = render(
      <StyledButton variant="danger">Danger Button</StyledButton>,
    );

    const button = container.querySelector("button");
    expect(button).toHaveStyle({
      backgroundColor: expect.stringContaining("C74C3D"), // bittersweetShimmer
    });
  });
});
```

### 3. Enhanced Product Data Testing

**Testing new product fields:**

```tsx
import { render, screen } from "@/test-utils";
import ProductPageClient from "../ProductPageClient";

describe("ProductPageClient with Enhanced Data", () => {
  const productWithNewFields = {
    ...mockProduct,
    ingredients: ["Premium tequila", "Fresh lime juice", "Agave nectar"],
    productBrief:
      "A sophisticated blend of premium tequila with fresh citrus...",
    nutritionFacts: [
      { label: "Calories", value: "180" },
      { label: "Sugar", value: "8g" },
      { label: "Alcohol", value: "12%" },
    ],
  };

  it("displays ingredients list", () => {
    render(<ProductPageClient product={productWithNewFields} />);

    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Premium tequila")).toBeInTheDocument();
    expect(screen.getByText("Fresh lime juice")).toBeInTheDocument();
    expect(screen.getByText("Agave nectar")).toBeInTheDocument();
  });

  it("displays product brief", () => {
    render(<ProductPageClient product={productWithNewFields} />);

    expect(
      screen.getByText(
        "A sophisticated blend of premium tequila with fresh citrus...",
      ),
    ).toBeInTheDocument();
  });

  it("displays nutrition facts table", () => {
    render(<ProductPageClient product={productWithNewFields} />);

    expect(screen.getByText("Nutrition Facts")).toBeInTheDocument();
    expect(screen.getByText("Calories")).toBeInTheDocument();
    expect(screen.getByText("180")).toBeInTheDocument();
    expect(screen.getByText("Sugar")).toBeInTheDocument();
    expect(screen.getByText("8g")).toBeInTheDocument();
  });

  it("handles missing optional fields gracefully", () => {
    const productWithoutNewFields = {
      ...mockProduct,
      ingredients: null,
      productBrief: null,
      nutritionFacts: null,
    };

    render(<ProductPageClient product={productWithoutNewFields} />);

    // Should still render without errors
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  });
});
```

### 4. Database Service Testing

**Testing enhanced data fetching:**

```tsx
import { getAllProducts, getProductById } from "../serverProductService";

// Mock Prisma client
jest.mock("@/lib/prisma", () => ({
  prisma: {
    product: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
  },
}));

describe("Server Product Service", () => {
  it("maps new product fields correctly", async () => {
    const mockPrismaProduct = {
      id: "test-id",
      name: "Test Product",
      ingredients: ["ingredient1", "ingredient2"],
      productBrief: "Test brief",
      nutritionFacts: [{ label: "Calories", value: "100" }],
      imageUrl: "test.jpg",
      // ... other fields
    };

    const { prisma } = require("@/lib/prisma");
    prisma.product.findUnique.mockResolvedValue(mockPrismaProduct);

    const result = await getProductById("test-id");

    expect(result.ingredients).toEqual(["ingredient1", "ingredient2"]);
    expect(result.productBrief).toBe("Test brief");
    expect(result.nutritionFacts).toEqual([
      { label: "Calories", value: "100" },
    ]);
  });

  it("handles null values for optional fields", async () => {
    const mockPrismaProduct = {
      id: "test-id",
      name: "Test Product",
      ingredients: null,
      productBrief: null,
      nutritionFacts: null,
      imageUrl: null,
      // ... other fields
    };

    const { prisma } = require("@/lib/prisma");
    prisma.product.findUnique.mockResolvedValue(mockPrismaProduct);

    const result = await getProductById("test-id");

    expect(result.ingredients).toBeUndefined();
    expect(result.productBrief).toBeUndefined();
    expect(result.nutritionFacts).toBeUndefined();
    expect(result.imageUrl).toBeUndefined();
  });
});
```

### 5. API Endpoint Testing

**Testing new seeding endpoint:**

```tsx
import { createMocks } from "node-mocks-http";
import { POST } from "../api/seed-production/route";

describe("/api/seed-production", () => {
  it("seeds production database successfully", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });

    const response = await POST(req);

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.message).toContain("Production seeding finished");
    expect(data.products).toHaveLength(6); // 6 products seeded
  });

  it("handles seeding errors gracefully", async () => {
    // Mock Prisma to throw an error
    jest.spyOn(require("@/lib/prisma"), "prisma").mockImplementation(() => ({
      product: {
        upsert: jest.fn().mockRejectedValue(new Error("Database error")),
      },
    }));

    const { req, res } = createMocks({
      method: "POST",
    });

    const response = await POST(req);

    expect(response.status).toBe(500);

    const data = await response.json();
    expect(data.error).toContain("Database error");
  });
});
```

---

## Test Utilities

### Custom Render Function

The project includes a custom render function in `src/test-utils.tsx` that provides:

- Theme provider for styled-components
- Common test data and mock objects
- Re-exports from React Testing Library

```tsx
import { render, screen, mockProduct } from "@/test-utils";

// Use the custom render function
render(<MyComponent product={mockProduct} />);
```

### Enhanced Test Data

```tsx
import { mockProduct, mockProducts, TEST_IDS } from "@/test-utils";

// Use predefined test data with new fields
const product = {
  ...mockProduct,
  ingredients: ["ingredient1", "ingredient2"],
  productBrief: "Test product description",
  nutritionFacts: [
    { label: "Calories", value: "100" },
    { label: "Sugar", value: "5g" },
  ],
};

const products = mockProducts;
const testId = TEST_IDS.BUTTON;
```

### Loading State Test Helpers

```tsx
// Helper to wait for loading states to complete
export const waitForLoadingToComplete = async () => {
  await waitFor(
    () => {
      expect(screen.queryByTestId("loading-container")).not.toBeInTheDocument();
    },
    { timeout: 2000 },
  );
};

// Helper to check if loading state is shown
export const expectLoadingState = () => {
  expect(screen.getByTestId("loading-container")).toBeInTheDocument();
};
```

---

## Best Practices

### 1. Test Organization

- Group related tests using `describe` blocks
- Use descriptive test names that explain the behavior
- Keep tests focused on one piece of functionality
- **Colocate tests with the code they test** for easier maintenance

### 2. Testing Priorities

**High Priority:**

- User interactions (clicks, form submissions)
- Critical business logic
- Error handling
- Accessibility features
- **Loading states and transitions**
- **New product data fields**

**Medium Priority:**

- Component rendering
- Props handling
- State management
- **Styled-components styling**

**Lower Priority:**

- Implementation details
- Third-party library functionality

### 3. Assertions

- Use semantic queries (`getByRole`, `getByLabelText`)
- Avoid testing implementation details
- Test behavior, not implementation
- **Test loading state transitions**
- **Test new data field displays**

```tsx
// Good - tests behavior
expect(screen.getByRole("button")).toBeInTheDocument();
expect(screen.getByText("Ingredients")).toBeInTheDocument();

// Bad - tests implementation
expect(screen.getByTestId("submit-button")).toBeInTheDocument();
```

### 4. Mocking

- Mock external dependencies (APIs, third-party libraries)
- Use `jest.fn()` for function mocks
- Mock Next.js router and navigation
- **Mock Prisma client for database operations**

```tsx
// Mock API calls
jest.mock("@/api/products", () => ({
  fetchProducts: jest.fn(() => Promise.resolve(mockProducts)),
}));

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {},
    pathname: "/",
  }),
}));

// Mock Prisma client
jest.mock("@/lib/prisma", () => ({
  prisma: {
    product: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      upsert: jest.fn(),
    },
  },
}));
```

---

## Coverage

The project is configured with 70% coverage thresholds:

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

To view coverage reports:

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory.

**New Coverage Requirements:**

- **Loading state components**: 80%
- **Styled-components**: 70%
- **Enhanced product data handling**: 80%
- **API endpoints**: 80%

---

## Debugging Tests

### Common Issues

1. **Styled-components not rendering**: Ensure you're using the custom render function
2. **Next.js router errors**: Check that router mocks are properly set up
3. **TypeScript errors**: Verify that test files have proper type annotations
4. **Loading state timing issues**: Use `waitFor` with appropriate timeouts
5. **Prisma client errors**: Ensure Prisma client is properly mocked

### Debug Commands

```bash
# Run specific test file
npm test -- ComponentName.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="loading"

# Run tests in verbose mode
npm test -- --verbose

# Debug failing tests
npm test -- --detectOpenHandles

# Run tests with coverage for specific files
npm test -- --coverage --collectCoverageFrom="src/components/**/*.tsx"
```

---

## Continuous Integration

The `test:ci` script is designed for CI/CD pipelines:

- Runs tests once (no watch mode)
- Generates coverage reports
- Exits with appropriate code on failure

```yaml
# Example GitHub Actions step
- name: Run tests
  run: npm run test:ci
```

---

## FAQ

### Q: Can I consolidate all tests into a single file?

**A:** It is not recommended. Keeping tests split by component or utility:

- Makes it easier to find and maintain tests
- Scales better as your project grows
- Allows for faster, parallel test runs

If you have a very small project, you can use a single test file, but for anything larger, colocated tests are best practice.

### Q: Should I move all `__tests__` folders to a top-level `__tests__` directory?

**A:** You can, but colocating tests with their components is the modern standard for React/Next.js projects. It keeps related code and tests together.

### Q: How do I test loading states effectively?

**A:**

- Use `waitFor` with appropriate timeouts
- Test both the loading and loaded states
- Mock async operations to control timing
- Use test IDs for reliable element selection

### Q: How do I test styled-components?

**A:**

- Use the custom render function that includes theme provider
- Test the rendered styles using `toHaveStyle`
- Focus on testing the visual output, not the CSS-in-JS implementation
- Use theme colors in your assertions

---

## Additional Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Styled-components Testing](https://styled-components.com/docs/advanced#testing)
- [Testing Async Components](https://testing-library.com/docs/dom-testing-library/api-async)
