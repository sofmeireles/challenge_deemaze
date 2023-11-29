import React from "react";
import { useState } from "react";
import SubscribeInput from "../components/SubscribeInput";
import { Link } from 'react-router-dom';

export default function HomePage(){
    const [subscribed, setSubscribed] = useState(false);


    const handleSubscribe = (email) => {
       const user = {
            email: email,
       };

       fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        }).then(response => response.json())
        .then(setSubscribed(true));
    }


    return (
        <div>
            {subscribed ? (
            <div className="card">
                <h2>Thank You!</h2>
                <p>You are now subscribed to our newsletter.</p>
            </div>
            ) : (
                <div className="card">
                <h2>Restaurant Newsletter</h2>
                <p>Subscribe to our newsletter to get daily specialities of our best restaurants right in your mailbox.</p>
                <SubscribeInput
                    handleSubscribe={handleSubscribe}
                />
                
                </div>
            )}
            <div>
            <p> Are you a restaurant owner?{' '}
                 <Link to="/specialities">Click here</Link> to add your daily specialties.
                 </p>
            </div>
            
            
        </div>
    );
}