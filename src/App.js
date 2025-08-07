import { useState, useEffect } from 'react'
import './App.css';

function fetchUsers(){
  return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if(!response.ok){
          throw new Error("Failed to fetch response. status: " + response.status);
        }
        return response.json();
      });
}

function App() {

  const [users, setUsers] = useState({});
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  if(!users.length){
    return <div>loading...</div>
  }
  if(users.length){
    return <div>
      {users.map((user) => (
        <div className='p-4 bg-white shadow-md mt-4' key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  }
}

export default App;
