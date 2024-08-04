import { useState } from "react";


function UserForm({onUserAdded}) {
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        onUserAdded({name,mail})
    }
  
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input value={name} placeholder='name' onChange={e=>setName(e.target.value)} />
            <label>Email</label>
            <input  value={mail} placeholder='email' onChange={e=>setMail(e.target.value)} />
            <button>Submit</button>
        </form>
      

    </div>
  );
}

export default UserForm;
