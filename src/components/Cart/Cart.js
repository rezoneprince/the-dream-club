import React from 'react';
import Images from '../../images/prince.png';
import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div>
            <div className="cart-men-details">
                    <div>
                        <img src={Images} alt="" />
                    </div>
                    <div>
                         <h4>Md Rezone Ahamed</h4>
                         <p>👍Meherpur, Bangladesh</p>
                    </div>
                {/* <p>Selected Gym: { cart.length}</p> */}
            </div>
            
                <div className='me-details'>
                        <div>
                            <h2>51kg</h2>
                            <p>Weight</p>
                        </div>
                
                        <div>
                            <h2>5.4</h2>
                            <p>Height</p>
                        </div>
                
                        <div>
                            <h2>21yrs</h2>
                            <p>Age</p>
                        </div>
                </div>
            
        </div>
    );
};

export default Cart;