import { render, screen ,fireEvent} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
  

});

test('it calls onuserAdd when form is submitted', () => {
  const mock = jest.fn();
  // render the component
  render(<UserForm onUserAdded={mock}/>);

  // Find two inputs
const inputName=screen.getByPlaceholderText('name');
const emailName=screen.getByPlaceholderText('email');
  //simulare enetring name
  // Simulate user typing "srinivas"
  fireEvent.change(inputName, { target: { value: 'srinivas' } });
 
    //simulare enetring email
    fireEvent.change(emailName, { target: { value: 't@gmail.com' } });


    //find submit button
    const button = screen.getByRole('button');

    //simulate button clicked
    fireEvent.submit(button)

    //Assertion to make sure onUserAdded called and having correct name and email
    expect(inputName.value).toEqual('srinivas');
    expect(emailName.value).toBe('t@gmail.com')
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'srinivas',mail:'t@gmail.com'});
});
