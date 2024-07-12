import Prediction from "./Prediction";

export default function Employee(props){
    const employee = props.data;
    const canViewSalary = true;
    return (
        <>
            <div>Name: {employee.name}</div>
            <div>Phone Number: {employee.phone_number}</div>
            <div>Job Role: {employee.job_role}</div>
            <div>Work Location: {employee.location}</div>       
            <div>{canViewSalary ? `Salary: ${employee.salary}` : ""}</div>
            <div>Boss: {employee.boss ?? "None"}</div>
            <div>Subordinates: {employee.subordinates ?? "None"}</div>
            <Prediction job_role = {employee.job_role} location={employee.location}/>
        </>
    )
}