import { useState , useEffect} from 'react';
import './index.css';
import Employee from './components/Employee';
import Search from './components/Search';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {

  const [employee, setEmployee] = useState({})
    
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  //       if (!response.ok) {
  //         throw new Error('Data could not be fetched!');
  //       }
  //       const json_response = await response.json();
  //       setPrediction(json_response);
  //     } catch (error) {
  //       console.error('Error fetching employees:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
      </Routes>
    </Router>
  )
}