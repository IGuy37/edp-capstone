import { useState , useEffect} from 'react';
import './index.css';
import "./App.css"
import Employee from './components/Employee';
import Register from './components/Register'
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

  useEffect(() => {
    async function getCSRFToken(){
      const response = await fetch(`${import.meta.env.VITE_API_URL}/getCSRFToken`)
    }
  },[])
  return (
    <Router>
      <Navbar fixed="top" setEmployee={setEmployee}/>
      <Routes>
        <Route exact path="/" element={
          <Login />
        }/>
        <Route path="/employee" element={
          <Employee data={employee} setEmployee={setEmployee}/>
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