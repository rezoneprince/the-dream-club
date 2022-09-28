import React, { useEffect, useState } from 'react';
import './Club.css';

const Club = () => {
    const [gymnastics, setGymnastics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data=> setGymnastics(data))
    }, [])
    return (
        <div className="club-container">
            <div className="exercise-container">
                <div>
                    <h3>Exercise container ok: {gymnastics.length}</h3>
                </div>
            </div> 
            
            <div className="cart-container">
                <h4>Rezone Prince</h4>
            </div>
        </div>
    );
};

export default Club;