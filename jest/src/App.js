import { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [userList,setUserList]=useState([]);


  const userAdded=(user)=>{
    setUserList([...userList,user])
  }

  return (
    <div className="App">
     <UserForm onUserAdded={userAdded} />
     <hr />
     <UserList userList={userList} />


    </div>
  );
}

export default App;
