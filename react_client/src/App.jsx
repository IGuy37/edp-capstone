import { useState , useEffect} from 'react';
import './index.css';
import Employee from './components/Employee';
import Search from './components/Search';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {

  const [employee, setEmployee] = useState({})

  return (
    <Router>
      <Search setEmployee={setEmployee}/>
      <Routes>
        <Route path="/" element={
          <Employee data={employee}/>
        }/>
        <Route path="/employee/:id" />
      </Routes>
    </Router>
  )
}
