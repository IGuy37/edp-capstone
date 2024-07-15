import Prediction from "./Prediction";
import Subordinate from "./Subordinate";

export default function Employee(props){
    const employee = props.data;
    return (
        <>
            <div>Name: {employee.name}</div>
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
        </>
    )
}