import React, { useEffect, useState } from 'react';
import Gymnastic from '../Gymnastic/Gymnastic';
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
               
                {
                    gymnastics.map(gymnastic => <Gymnastic
                        key={gymnastic.time} gymnastic={gymnastic}>
                    </Gymnastic>)
                }
            </div> 
            
            <div className="cart-container">
                <h4>Rezone Prince</h4>
            </div>
        </div>
    );
};

export default Club;