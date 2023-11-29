import React from "react";
import { useState } from "react";
import SpecialitiesForm from "../components/SpecialitiesForm";
import { Link } from 'react-router-dom';

import '../styles/General.css'
import '../styles/Inputs.css'


export default function SpecialitiesPage(){ 
    const [submited, setSubmited] = useState(false)
    const [date, setDate] = useState("")

    const handleSubmitForm = (restaurant,specialities,date) =>{
        const speciality = {
            restaurant: restaurant,
            specialities: specialities,
            date: date,
        };

       fetch('http://localhost:3000/api/speciality', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ speciality }),
        }).then(response => response.json())
        .then(setDate(date))
        .then(setSubmited(true));
    }

    return (
        <>
        {submited ? (
        <div className="card">
            <h2>Thank You!</h2>
            <p>Your specialties for {date} were added to our database.</p>
            <Link  to="/">BACK TO HOME</Link>
        </div>
        ) : (
        <div className="card">
            <h2>Your specialities</h2>
            <p>Add your informatiion and daily specialities.</p>
            <SpecialitiesForm 
                handleSubmitForm={handleSubmitForm}
            />
            <Link  className="link" to="/">CANCEL</Link>
        </div>
        )}
    </>
    );
}