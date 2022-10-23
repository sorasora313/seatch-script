import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.json();
  }).then((date) => setUsers(date));
}, []);

  return (
    <div className="App">
      <div className = "main">
        <h2>検索アプリ</h2>
        <input type= "text"/>
        <div className = "content">
          {users.map((user) => (
              <div className = "box">
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
