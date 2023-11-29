import React from "react";
import { useState } from "react";
import SpecialitiesList from "./SpecialitiesList";
import ConfirmationPopup from "./ConfirmationPopUp";


import '../styles/Inputs.css'

export default function SpecialitiesForm({handleSubmitForm}){
    const [specialities, setSpecialities] = useState([]);
    const [date, setDate] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [showPopup, setShowPopup] = useState(false);


    const handleSpecialitiesChange = (specialities) => {
        setSpecialities(specialities);
    };

    const handleDateChange = (date) => {
        setDate(date)
    };

    const handleRestaurantChange = (restaurant) =>{
        setRestaurant(restaurant)
    }

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleCancel = () => {
        setShowPopup(false);
    }

    const handleSubmitClick = () => {
        setShowPopup(false);
        handleSubmitForm(restaurant,specialities,date);
    }
    


    return (
        <>
        <div className="container">
            <label className="label" >DATE</label>
            <input
                type="date"
                className="date"
                value={date}
                onChange={(e) => handleDateChange(e.target.value)}
            />
        </div>
        <div className="container">
            <label className="label">RESTAURANT NAME</label>
            <input
                type="text"
                className="input"
                value={restaurant}
                onChange={(e) => handleRestaurantChange(e.target.value)}
            />
        </div>
        <SpecialitiesList
            onSpecialitiesChange={handleSpecialitiesChange}
        />
        <div className="container">
        <button className="blue" onClick={handleShowPopup}>SUMBIT</button>

        </div>

        {showPopup && (
            <ConfirmationPopup 
                onConfirm={handleSubmitClick} 
                onCancel={handleCancel}
                date={date}
                restaurant={restaurant}
                specialities={specialities} />
        ) }
            
        </>
    );
}