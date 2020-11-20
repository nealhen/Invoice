import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'


const setup = () => {
  const app = render(<App />);
  const descriptionInput = app.getByLabelText('Description:');
  const costInput = app.getByLabelText('Cost:')
  const quantityInput = app.getByLabelText('Quantity:');
  const submit = app.getByTestId('submit');
  return {
    descriptionInput,
    costInput,
    quantityInput,
    submit,
    ...app,
  }
}

// it('have text', () => {
//   render(<App />);
//   expect(screen.getByTestId("submit").textContent).toBe('Submit Invoice');
// });

it('should update the total when a row is added', () =>{
  const { descriptionInput, costInput, quantityInput, submit } = setup()
  fireEvent.change(descriptionInput, { target: { value: 'New House' } })
  fireEvent.change(costInput, { target: { value: 23 } })
  fireEvent.change(quantityInput, { target: { value: 3 } })
  fireEvent.submit(submit);

  expect(screen.getAllByTestId('row')[0].textContent).toBe('New House$233$69');
  expect(screen.getByTestId('total').textContent).toBe('Total: $69')
});

