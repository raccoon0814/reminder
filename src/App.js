import './App.css';
import Login from './components/login';
import Todo from './components/todo';
import Nav from './components/nav';
import Main from './components/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Login />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      <Nav />
    </div>
  );
}

export default App;
