
export default function Prediction(props){
    return(
        <>
            <div>Location: {props.location}</div>
            <div>Job Role: {props.job_role}</div>
            <div>Prediction: {props.prediction}</div>
        </>
    )
}