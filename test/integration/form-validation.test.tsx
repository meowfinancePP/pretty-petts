import { describe, it, expect, vi } from 'vitest';
import { render, screen, setupUser, waitFor } from '../utils/test-utils';
import { useState } from 'react';

// Mock form component with validation
const MockForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? 'password-error' : undefined}
        />
        {errors.password && (
          <span id="password-error" role="alert">
            {errors.password}
          </span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

describe('Form Validation', () => {
  it('shows error when email is empty', async () => {
    const user = setupUser();
    const handleSubmit = vi.fn();

    render(<MockForm onSubmit={handleSubmit} />);

    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('shows error when email is invalid', async () => {
    const user = setupUser();
    const handleSubmit = vi.fn();

    render(<MockForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'invalid-email');
    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('shows error when password is too short', async () => {
    const user = setupUser();
    const handleSubmit = vi.fn();

    render(<MockForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'short');
    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(
        screen.getByText('Password must be at least 8 characters')
      ).toBeInTheDocument();
    });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('submits form when validation passes', async () => {
    const user = setupUser();
    const handleSubmit = vi.fn();

    render(<MockForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  it('sets aria-invalid on invalid fields', async () => {
    const user = setupUser();
    const handleSubmit = vi.fn();

    render(<MockForm onSubmit={handleSubmit} />);

    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByLabelText('Password')).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('associates errors with fields using aria-describedby', async () => {
    const user = setupUser();
    const handleSubmit = vi.fn();

    render(<MockForm onSubmit={handleSubmit} />);

    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toHaveAttribute(
        'aria-describedby',
        'email-error'
      );
      expect(screen.getByLabelText('Password')).toHaveAttribute(
        'aria-describedby',
        'password-error'
      );
    });
  });
});
