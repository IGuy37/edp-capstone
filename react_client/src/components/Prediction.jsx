import React, {useState} from "react";

export default function Prediction(props){
    const [prediction, setPrediction] = useState("")
    const predictSalary = (e) => {
        e.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/prediction`, {
            method: "POST",
            body: JSON.stringify({
                job_role : props.job_role,
                location: props.location
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response data
            setPrediction(data.salary)
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
        console.log('Prediction Request submitted');
    }
    return(
        <>
            <button onClick={predictSalary} disabled={!props.job_role}>Predict this employee's salary</button>
            {
                prediction !== "" && 
                <div>Predicted Salary: ${prediction}</div>
            }
        </>
    )
}