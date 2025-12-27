import { describe, it, expect, vi } from 'vitest';
import { render, screen, setupUser } from '../utils/test-utils';
import { useRouter, usePathname } from 'next/navigation';

// Mock navigation component
const MockNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav>
      <button onClick={() => router.push('/')}>Home</button>
      <button onClick={() => router.push('/marketplace')}>Marketplace</button>
      <button onClick={() => router.back()}>Back</button>
      <span data-testid="current-path">{pathname}</span>
    </nav>
  );
};

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(<MockNav />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('navigates to home when Home is clicked', async () => {
    const user = setupUser();
    const mockPush = vi.fn();
    
    vi.mocked(useRouter).mockReturnValue({
      push: mockPush,
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
    } as any);

    render(<MockNav />);
    
    await user.click(screen.getByText('Home'));
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('navigates to marketplace when Marketplace is clicked', async () => {
    const user = setupUser();
    const mockPush = vi.fn();
    
    vi.mocked(useRouter).mockReturnValue({
      push: mockPush,
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
    } as any);

    render(<MockNav />);
    
    await user.click(screen.getByText('Marketplace'));
    expect(mockPush).toHaveBeenCalledWith('/marketplace');
  });

  it('goes back when Back is clicked', async () => {
    const user = setupUser();
    const mockBack = vi.fn();
    
    vi.mocked(useRouter).mockReturnValue({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: mockBack,
      pathname: '/marketplace',
      query: {},
      asPath: '/marketplace',
    } as any);

    render(<MockNav />);
    
    await user.click(screen.getByText('Back'));
    expect(mockBack).toHaveBeenCalled();
  });

  it('displays current pathname', () => {
    vi.mocked(usePathname).mockReturnValue('/marketplace');
    
    render(<MockNav />);
    
    expect(screen.getByTestId('current-path')).toHaveTextContent('/marketplace');
  });
});
