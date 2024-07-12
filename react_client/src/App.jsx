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

  const [prediction, setPrediction] = useState({})
  const [employee, setEmployee] = useState({})
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setPrediction(json_response);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Search setEmployee={setEmployee}/>
      <Routes>
        <Route path="/" element={
          <Employee data={employee} prediction={prediction} />
        }/>
        <Route path="/employee/:id" />
      </Routes>
    </Router>
  )
}