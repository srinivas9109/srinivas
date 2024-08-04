import { render, screen ,within} from '@testing-library/react';
import UserList from './UserList';

function renderComponent(){
    const userList=[
        {name:'sri',mail:'t@gmail.com'},
        {name:'srini',mail:'tni@gmail.com'}
    
    ]
    render(<UserList userList={userList} />);
    return userList;
}
test('rebder one row per user',()=>{
// const userList=[
//     {name:'sri',mail:'t@gmail.com'},
//     {name:'srini',mail:'tni@gmail.com'}

// ]
// //render component
// render(<UserList userList={userList} />);
renderComponent()
//to get query suggestions 
// screen.logTestingPlaygroundURL();

const rows=within(screen.getByTestId('users')).getAllByRole('row');

expect(rows).toHaveLength(2)

})

test('rebder name and email for each row',()=>{
    // const userList=[
    //     {name:'sri',mail:'t@gmail.com'},
    //     {name:'srini',mail:'tni@gmail.com'}
    
    // ]
    // render(<UserList userList={userList} />);
    const userList =renderComponent()
    for(let user of userList){
        const name=screen.getByRole('cell',{name:user.name});
        const email=screen.getByRole('cell',{name:user.mail})
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();

    }
})