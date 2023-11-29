import React, { useState } from "react";

import '../styles/Inputs.css'

import '../styles/Buttons.css'

const SpecialitiesList = ({ onSpecialitiesChange }) => {
  const [specialities, setSpecialities] = useState([]);

  const handleAddSpeciality = () => {
    setSpecialities((prevSpecialities) => [...prevSpecialities, ""]);
  };

  const handleSpecialityChange = (index, value) => {
    setSpecialities((prevSpecialities) => {
        const updatedSpecialities = [...prevSpecialities];
        updatedSpecialities[index] = value;
        onSpecialitiesChange(updatedSpecialities);
        return updatedSpecialities;
      });


  };

  return (
    <div className="container">
      <label className="label">SPECIALITIES</label>
      {specialities.map((speciality, index) => (
        <div key={index}>
          <input
          className="input"
            type="text"
            placeholder="Add a speciality"
            value={speciality}
            onChange={(e) => handleSpecialityChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className="container">
      <button className="white" onClick={handleAddSpeciality}>ADD MORE</button>

      </div>
    </div>
  );
};

export default SpecialitiesList;
