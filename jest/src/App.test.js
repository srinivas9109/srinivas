import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';

test('can receive new user and shown it on list', async () => {
  render(<App />);
  const inputName=screen.getByPlaceholderText('name');
  const emailName=screen.getByPlaceholderText('email');
  const button = screen.getByRole('button');


  fireEvent.change(inputName, { target: { value: 'srinivas' } });
  fireEvent.change(emailName, { target: { value: 't@gmail.com' } });
  fireEvent.submit(button)

  const name=screen.getByRole('cell',{name:'srinivas'});
  const email=screen.getByRole('cell',{name:'t@gmail.com' })

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();

});
