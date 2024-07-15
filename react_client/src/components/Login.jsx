import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: "POST",
            body: JSON.stringify({
                "name": username,
                "password": password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // TODO: Handle the response data
            if(data.ok){
                navigate('/employee');
            }
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
        console.log("Login sent successfully");
        
    };

    return (
        <div className="container">
            <form onSubmit={handleLogin} className="mt-5">
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
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
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}