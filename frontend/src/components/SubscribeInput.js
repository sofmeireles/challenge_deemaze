import React from "react";
import { useState } from "react";

import '../styles/Buttons.css'
import '../styles/Inputs.css'
import '../styles/General.css'

export default function SubscribeInput({handleSubscribe}){
    const [email, setEmail] = useState("");


    const handleSubscribeClick = () => {
        handleSubscribe(email)
    }


    return (
        <div className="subscribe_input">
            <input className="input" type="email"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <button className="blue" onClick={handleSubscribeClick}>Subscribe</button>
        </div>
    );
}