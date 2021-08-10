import Form from './Form';
import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('need to run a function on button click', async () => {
  let handleApiCall = jest.fn();
  render(<Form handleApiCall={handleApiCall} />);
  const button = screen.getByTestId('GO-btn');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});