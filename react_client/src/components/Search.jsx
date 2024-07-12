import React, {useState} from "react";


export default function Search(props){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/search`, {
            method: "POST",
            //search by name, for now
            body: JSON.stringify({ name: searchTerm }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response data
            props.setEmployee(data[0]);
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });e.preventDefault();
            console.log('Search submitted');
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search"
                placeholder="Search" aria-label="Search"
                value={searchTerm} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}