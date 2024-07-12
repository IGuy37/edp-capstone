import Prediction from "./Prediction";

export default function Employee(props){
    const employee = props.data
    return (
        <>
            <Prediction job_role={employee.job_role} location={employee.location} prediction={employee.Prediction} />
        </>
    )
}