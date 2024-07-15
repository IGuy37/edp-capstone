import { useState , useEffect} from 'react';
import './index.css';
import "./App.css"
import Employee from './components/Employee';
import Search from './components/Search';
import Register from './components/Register'
import Home from './components/Home';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login';

export default function App() {

  const [employee, setEmployee] = useState({})

  return (
    <Router>
      <Navbar fixed="top" setEmployee={setEmployee}/>
      <Routes>
        <Route exact path="/" element={
          <Home />
        }/>
        <Route path="/employee" element={
          <Employee data={employee}/>
        }/>
        <Route path="/login" element={
          <Login />
        }/>
        <Route path="/register" element={
          <Register/>
        }/>
      </Routes>
    </Router>
  )
}