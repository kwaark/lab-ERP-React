import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders login section by default', () => {
    render(<App />);
    const loginSection = screen.getByText(/login/i);
    expect(loginSection).toBeInTheDocument();
  });

  test('shows registration form when link is clicked', () => {
    render(<App />);
    const signUpLink = screen.getByText(/cadastre-se/i);
    signUpLink.click();

    const registrationForm = screen.getByText(/cadastro/i);
    expect(registrationForm).toBeInTheDocument();
  });
});
