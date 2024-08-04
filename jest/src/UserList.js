

function UserList({userList}) {
    const render=userList.map(item=>{
        return(
            <tr key={item.mail}>
                <td>{item.name}</td>
                <td>{item.mail}</td>
            </tr>
        )
    })
  
  return (
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Mail</td>
            </tr>
        </thead>
        <tbody data-testid="users" >
            {render}
        </tbody>
  
    </table>
  );
}

export default UserList;
