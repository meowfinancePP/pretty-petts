import { describe, it, expect, vi } from 'vitest';
import { renderHook, render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import {
  useKeyboardNav,
  useFocusTrap,
  SkipToContent,
  focusUtils,
} from '@/app/components/accessibility/KeyboardNav';

describe('useKeyboardNav', () => {
  it('calls onEnter when Enter is pressed', () => {
    const onEnter = vi.fn();
    renderHook(() => useKeyboardNav(onEnter));

    fireEvent.keyDown(window, { key: 'Enter' });
    expect(onEnter).toHaveBeenCalledTimes(1);
  });

  it('calls onEscape when Escape is pressed', () => {
    const onEscape = vi.fn();
    renderHook(() => useKeyboardNav(undefined, onEscape));

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onEscape).toHaveBeenCalledTimes(1);
  });

  it('calls arrow handlers when arrow keys are pressed', () => {
    const onArrowUp = vi.fn();
    const onArrowDown = vi.fn();
    const onArrowLeft = vi.fn();
    const onArrowRight = vi.fn();

    renderHook(() =>
      useKeyboardNav(
        undefined,
        undefined,
        onArrowUp,
        onArrowDown,
        onArrowLeft,
        onArrowRight
      )
    );

    fireEvent.keyDown(window, { key: 'ArrowUp' });
    expect(onArrowUp).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(window, { key: 'ArrowDown' });
    expect(onArrowDown).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(onArrowLeft).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(onArrowRight).toHaveBeenCalledTimes(1);
  });

  it('prevents default behavior', () => {
    const onEnter = vi.fn();
    renderHook(() => useKeyboardNav(onEnter));

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});

describe('useFocusTrap', () => {
  it('returns a ref object', () => {
    const { result } = renderHook(() => useFocusTrap(true));
    expect(result.current).toHaveProperty('current');
  });

  it('focuses first element when activated', () => {
    const TestComponent = () => {
      const ref = useFocusTrap(true);
      return (
        <div ref={ref as any}>
          <button>First</button>
          <button>Second</button>
        </div>
      );
    };

    render(<TestComponent />);
    
    // First button should be focused
    expect(document.activeElement).toBe(screen.getByText('First'));
  });
});

describe('SkipToContent', () => {
  it('renders skip link', () => {
    render(<SkipToContent />);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<SkipToContent />);
    const link = screen.getByText('Skip to main content');
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('is visually hidden by default', () => {
    render(<SkipToContent />);
    const link = screen.getByText('Skip to main content');
    expect(link).toHaveClass('sr-only');
  });
});

describe('focusUtils', () => {
  it('getFocusableElements returns focusable elements', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <button>Button</button>
      <a href="#">Link</a>
      <input type="text" />
      <div tabindex="-1">Not focusable</div>
    `;

    const focusable = focusUtils.getFocusableElements(container);
    expect(focusable).toHaveLength(3);
  });

  it('focusFirst focuses first element', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <button id="first">First</button>
      <button id="second">Second</button>
    `;
    document.body.appendChild(container);

    focusUtils.focusFirst(container);
    expect(document.activeElement?.id).toBe('first');

    document.body.removeChild(container);
  });

  it('focusLast focuses last element', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <button id="first">First</button>
      <button id="second">Second</button>
    `;
    document.body.appendChild(container);

    focusUtils.focusLast(container);
    expect(document.activeElement?.id).toBe('second');

    document.body.removeChild(container);
  });
});
