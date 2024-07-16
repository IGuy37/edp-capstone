import React from "react";
import { Link } from "react-router-dom";

export default function Subordinate(props){

    //TODO: make this link to an Employee component with the corresponding data
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/search`, {
            method: "POST",
            body: JSON.stringify({ name: props.name}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response data
            props.setEmployee(data);
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
        console.log('Switch submitted');
    };

    return(
        <div>
            <Link onClick={handleClick}>{props.name}</Link>  
        </div>
    );    
}