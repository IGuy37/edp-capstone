import Prediction from "./Prediction";
import Subordinate from "./Subordinate";
import Card from 'react-bootstrap/Card';
import profile from '../assets/profile-icon.png'

export default function Employee(props){
    const employee = props.data;
    return (
        <>
        <div style={{ 
            display: 'grid', 
            placeItems: 'center', 
            height: '100vh', 
        }}> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profile} />
            <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <div>Phone Number: {employee.phone_number}</div>
                <div>Job Role: {employee.job_role}</div>
                <div>Work Location: {employee.location}</div>                
                <div>Salary: ${employee.salary}</div>
                <div>Boss:&nbsp;
                    {
                        (!employee.boss) ? "None" :
                        <Subordinate name={employee.boss} setEmployee={props.setEmployee} />
                    }
                </div>
                <div>Subordinates:&nbsp; 
                    {
                        (!employee.subordinates) ? "None" :
                        employee.subordinates.map(
                            sub => <Subordinate key={sub} name={sub} setEmployee={props.setEmployee}/>
                        )
                    }
                </div>
                <Prediction job_role = {employee.job_role} location={employee.location}/>
            </Card.Body>
        </Card>
        </div> 
        </>
    );
}