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
          <div className = "box">
            <h3>ユーザー名</h3>
            <hr />
            <p>メールアドレス</p>
          </div>
          <div className = "box">
            <h3>ユーザー名</h3>
            <hr />
            <p>メールアドレス</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
