import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render login section by default', () => {
    render(<App />);
    const loginSection = screen.getAllByText(/^Login/i);
    // Alteração da expectativa para 2 elementos
    expect(loginSection).toHaveLength(2);
  });

  it('should switch to register when register link is clicked', () => {
    render(<App />);
    const registerLink = screen.getAllByText(/Cadastre-se/i)[0];
    fireEvent.click(registerLink);
    const registerSection = screen.getByText(/Cadastro/i);
    expect(registerSection).toBeInTheDocument();
  });
});
