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
import LoginForm from './components/LoginForm';

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
          <LoginForm />
        }/>
      </Routes>
    </Router>
  )
}