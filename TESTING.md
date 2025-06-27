# Testing Guide

This project uses **Jest** and **React Testing Library** for unit testing. The testing setup is configured to work seamlessly with Next.js, TypeScript, and styled-components.

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

## Project Structure

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
import { formatPrice, calculatePriceWithTax } from "../utils";

describe("Price Utils", () => {
  it("formats price correctly", () => {
    expect(formatPrice(29.99)).toBe("$29.99");
  });

  it("calculates tax correctly", () => {
    expect(calculatePriceWithTax(100)).toBe(108);
  });
});
```

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

### Common Test Data

```tsx
import { mockProduct, mockProducts, TEST_IDS } from "@/test-utils";

// Use predefined test data
const product = mockProduct;
const products = mockProducts;
const testId = TEST_IDS.BUTTON;
```

## Best Practices

### 1. Test Organization

- Group related tests using `describe` blocks
- Use descriptive test names that explain the behavior
- Keep tests focused on one piece of functionality

### 2. Testing Priorities

**High Priority:**

- User interactions (clicks, form submissions)
- Critical business logic
- Error handling
- Accessibility features

**Medium Priority:**

- Component rendering
- Props handling
- State management

**Lower Priority:**

- Implementation details
- Third-party library functionality

### 3. Assertions

- Use semantic queries (`getByRole`, `getByLabelText`)
- Avoid testing implementation details
- Test behavior, not implementation

```tsx
// Good - tests behavior
expect(screen.getByRole("button")).toBeInTheDocument();

// Bad - tests implementation
expect(screen.getByTestId("submit-button")).toBeInTheDocument();
```

### 4. Mocking

- Mock external dependencies (APIs, third-party libraries)
- Use `jest.fn()` for function mocks
- Mock Next.js router and navigation

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
```

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

## Debugging Tests

### Common Issues

1. **Styled-components not rendering**: Ensure you're using the custom render function
2. **Next.js router errors**: Check that router mocks are properly set up
3. **TypeScript errors**: Verify that test files have proper type annotations

### Debug Commands

```bash
# Run specific test file
npm test -- ComponentName.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="button"

# Run tests in verbose mode
npm test -- --verbose

# Debug failing tests
npm test -- --detectOpenHandles
```

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

## Additional Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
