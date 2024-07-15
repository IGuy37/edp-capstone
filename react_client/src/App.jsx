import { useState , useEffect} from 'react';
import './index.css';
import Employee from './components/Employee';
import Search from './components/Search';
import Home from './components/Home';

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
      <Search setEmployee={setEmployee}/>
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
      </Routes>
    </Router>
  )
}