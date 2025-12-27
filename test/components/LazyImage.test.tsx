import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import { LazyImage } from '@/app/components/performance/LazyImage';

describe('LazyImage', () => {
  it('renders with alt text', () => {
    render(<LazyImage src="/test.png" alt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('shows skeleton while loading', () => {
    const { container } = render(
      <LazyImage src="/test.png" alt="Test image" />
    );
    
    // Should have skeleton animation
    const skeleton = container.querySelector('.absolute.inset-0');
    expect(skeleton).toBeInTheDocument();
  });

  it('calls onLoad when image loads', async () => {
    const handleLoad = vi.fn();
    
    render(
      <LazyImage src="/test.png" alt="Test image" onLoad={handleLoad} />
    );
    
    const img = screen.getByAltText('Test image');
    
    // Simulate image load
    img.dispatchEvent(new Event('load'));
    
    await waitFor(() => {
      expect(handleLoad).toHaveBeenCalled();
    });
  });

  it('shows error state on load failure', async () => {
    const handleError = vi.fn();
    
    render(
      <LazyImage src="/invalid.png" alt="Test image" onError={handleError} />
    );
    
    const img = screen.getByAltText('Test image');
    
    // Simulate error
    img.dispatchEvent(new Event('error'));
    
    await waitFor(() => {
      expect(handleError).toHaveBeenCalled();
    });
  });

  it('uses priority loading when specified', () => {
    render(<LazyImage src="/test.png" alt="Test image" priority />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('uses lazy loading by default', () => {
    render(<LazyImage src="/test.png" alt="Test image" />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
