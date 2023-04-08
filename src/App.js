import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';


import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/rooms" element = {<Rooms />} />
      </Routes>
    </Router>
  );
}

export default App;
