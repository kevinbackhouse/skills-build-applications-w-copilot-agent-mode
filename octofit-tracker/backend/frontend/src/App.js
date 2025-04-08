import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchUsers } from './apiService';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    loadUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to OctoFit Tracker</h1>
        <p>Track your fitness activities and compete with your peers!</p>
        <h2>Users:</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
