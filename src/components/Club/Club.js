import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gymnastic from '../Gymnastic/Gymnastic';
import './Club.css';

const Club = () => {
    const [gymnastics, setGymnastics] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data=> setGymnastics(data))
    }, [])

    const handleAddToCart = (gymnastic) => {
        console.log(gymnastic);
        const newCart = [...cart, gymnastic];
        setCart(newCart);
    }
    
    return (
        <div className="club-container">
            <div className="exercise-container">
               
                {
                    gymnastics.map(gymnastic => <Gymnastic
                        key={gymnastic.time}
                        gymnastic={gymnastic}
                        handleAddToCart={handleAddToCart}
                    >
                    </Gymnastic>)
                }
            </div> 
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

           
        </div>
    );
};

export default Club;