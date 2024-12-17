import './App.css';
import Homepage from './pages/homepage.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </Router>
  )
}

export default App;
