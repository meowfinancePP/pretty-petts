import { describe, it, expect, vi } from 'vitest';
import { render, screen, setupUser } from '../utils/test-utils';
import RippleButton from '@/app/components/micro/RippleButton';

describe('RippleButton', () => {
  it('renders children correctly', () => {
    render(<RippleButton>Click me</RippleButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = setupUser();
    const handleClick = vi.fn();
    
    render(<RippleButton onClick={handleClick}>Click me</RippleButton>);
    
    await user.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(
      <RippleButton variant="primary">Primary</RippleButton>
    );
    
    let button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-gradient-to-r');
    
    rerender(<RippleButton variant="secondary">Secondary</RippleButton>);
    button = screen.getByText('Secondary');
    expect(button).toHaveClass('bg-[var(--glass-clear)]');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<RippleButton size="sm">Small</RippleButton>);
    
    let button = screen.getByText('Small');
    expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm');
    
    rerender(<RippleButton size="lg">Large</RippleButton>);
    button = screen.getByText('Large');
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('respects disabled state', async () => {
    const user = setupUser();
    const handleClick = vi.fn();
    
    render(
      <RippleButton onClick={handleClick} disabled>
        Disabled
      </RippleButton>
    );
    
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('has correct button type', () => {
    const { rerender } = render(<RippleButton type="submit">Submit</RippleButton>);
    
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
    
    rerender(<RippleButton type="reset">Reset</RippleButton>);
    expect(screen.getByText('Reset')).toHaveAttribute('type', 'reset');
  });
});
