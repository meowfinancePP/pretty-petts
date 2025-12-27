import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Custom render with providers
 */
interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

/**
 * Setup user event
 */
export const setupUser = () => {
  return userEvent.setup();
};

/**
 * Wait for async updates
 */
export const waitFor = async (callback: () => void, timeout = 1000) => {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    try {
      callback();
      return;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  callback();
};

/**
 * Mock API response
 */
export const mockApiResponse = <T,>(data: T, delay = 0) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

/**
 * Mock API error
 */
export const mockApiError = (message: string, delay = 0) => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(message)), delay);
  });
};

/**
 * Create mock NFT
 */
export const createMockNFT = (overrides = {}) => ({
  id: '1',
  name: 'Test NFT',
  description: 'Test Description',
  image: '/test-image.png',
  price: 1.5,
  owner: '0x123',
  collection: 'Test Collection',
  ...overrides,
});

/**
 * Create mock user
 */
export const createMockUser = (overrides = {}) => ({
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  ensName: 'test.eth',
  avatar: '/avatar.png',
  ...overrides,
});

/**
 * Accessibility test helper
 */
export const testA11y = async (container: HTMLElement) => {
  const { axe } = await import('jest-axe');
  const results = await axe(container);
  return results;
};

export * from '@testing-library/react';
export { customRender as render };
