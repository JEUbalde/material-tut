import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path = "/" element = {<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
