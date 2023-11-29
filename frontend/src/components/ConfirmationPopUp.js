import React from "react";

import '../styles/General.css'
import '../styles/Buttons.css'

export default function ConfirmationPopup ({ onConfirm, onCancel, date, restaurant, specialities }) {
  return (
    <div className="popup-content">
        <h2>Confirmation</h2>
      <p>Your specialities for {restaurant} at {date} are:</p>
      <p> {specialities.map((specialty, index) => (
        <p key={index}>{specialty}</p>
      ))}</p>
      <button className="blue"  onClick={onConfirm}>SUBMIT</button>
      <p className="link" onClick={onCancel}>CANCEL</p>
    </div>
  );
};

