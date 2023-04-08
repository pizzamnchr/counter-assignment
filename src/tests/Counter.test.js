import { render, screen, getByText, fireEvent } from '@testing-library/react';

import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);

  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);

  
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {  
  const incrementButton = screen.getByText("+");

  fireEvent.click(incrementButton);

  expect(screen.getByText("1")).toBeInTheDocument();
});

test('clicking - decrements the count', () => {  
  const decrementButton = screen.getByText("-");

  fireEvent.click(decrementButton);

  expect(screen.getByText("-1")).toBeInTheDocument();
});
