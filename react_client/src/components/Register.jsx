import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState(0);
    const [boss, setBoss] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/register`, {
            method: "PUT",
            body: JSON.stringify({
                "name": username,
                "phone_number": phoneNumber,
                "job_role": jobRole,
                "location" : location,                
                "salary": salary,
                "boss": boss,
                "subordinates" : null,
                "password" : password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // TODO: Handle the response data
            if(data){
                alert("Registered Successfully! Please log in using the credentials you just made.")
                navigate('/login');
            }
    })        
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
        console.log("Registration sent successfully");
        
    };

    return (
        <div className="container">
            <form onSubmit={handleRegister} className="mt-5">
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobRole">Job Role</label>
                    <input
                        type="text"
                        className="form-control"
                        id="jobRole"
                        placeholder="Enter Job Role"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Work Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="text"
                        className="form-control"
                        id="salary"
                        placeholder="Enter Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>
                <div className="form-group">
                        <label htmlFor="boss">Boss</label>
                        <input
                            type="text"
                            className="form-control"
                            id="boss"
                            placeholder="Enter Boss"
                            value={boss}
                            onChange={(e) => setBoss(e.target.value)}
                        />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            
        </div>
    );
}