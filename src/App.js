import './App.css';
import Login from './components/login';
import Todo from './components/todo';
import Nav from './components/nav';
import Main from './components/main';
import Dog from './components/dog';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
      <Router>
      <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/dog" element={<Dog />} />
        </Routes>
        <Nav isLogin={isLogin}/>
      </Router>
    </div>
  );
}

export default App;
