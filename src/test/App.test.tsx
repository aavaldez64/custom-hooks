import { render, screen } from '@testing-library/react';
import App from '../App';


describe("App render", () => {
  
  test('The app topic is custom hooks', () => {
    render(<App />);
    const linkElement = screen.getByText(/custom hooks/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('The app uses typescript', () => {
    render(<App />);
    const linkElement = screen.getByText(/typescript/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("There is at least one custom hook", () => {
    render(<App />);
    const listOfCustomHooks = screen.getAllByRole("listitem");

    expect(listOfCustomHooks.length).toBeGreaterThanOrEqual(1);

  })


})
