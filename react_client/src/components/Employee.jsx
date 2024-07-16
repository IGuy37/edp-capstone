import Prediction from "./Prediction";
import Subordinate from "./Subordinate";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile from '../assets/profile-icon-png-898.png'

export default function Employee(props){
    const employee = props.data;
    return (
        <>
        <div style={{ 
            display: 'grid', 
            placeItems: 'center', 
            height: '100vh', 
        }}> 
        <Card style={{ display: 'grid', 
            placeItems: 'center', 
            width: '18rem' }}>
      <Card.Img variant="top" src={profile} />
      <Card.Body>
      <Card.Title>{employee.name}</Card.Title>
            <div>Phone Number: {employee.phone_number}</div>
            <div>Job Role: {employee.job_role}</div>
            <div>Work Location: {employee.location}</div>                
            <div>Salary: ${employee.salary}</div>
            <div>Boss: {employee.boss ?? "None"}</div>
            <div>Subordinates: 
                {
                    (!employee.subordinates) ? "None" :
                    employee.subordinates.map(
                        sub => <Subordinate key={sub} name={sub} />
                    )
                }
            </div>
            <Prediction job_role = {employee.job_role} location={employee.location}/>
      </Card.Body>
    </Card>
    </div>      
        </>
    )
}