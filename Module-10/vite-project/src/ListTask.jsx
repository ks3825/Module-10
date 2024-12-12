import React from 'react'

const ListTask = () => {
    const users = [
        { id: 1, name: 'Aakash' },
        { id: 2, name: 'Mayur' },
        { id: 3, name: 'Vishal' },
        { id: 4, name: 'Sameer' },
        { id: 5, name: 'Bipin' },
      ];
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            users.map(user =>(
                <li key={user.id}>{user.name}</li>
            ))
        }
      </ul>
    </div>
    
  )
}

export default ListTask
