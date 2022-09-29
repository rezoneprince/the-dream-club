import React from 'react';
import './Gymnastic.css';

const Gymnastic = (props) => {
    const {gymnastic, handleAddToCart} = props;
    const { img, name, age, time } = props.gymnastic;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <h2>{ name}</h2>
                <p>For Age : <b>{ age}</b></p>
                <p>Time required : <b>{ time}</b></p>
            </div>
            <button onClick={ () => handleAddToCart(gymnastic)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Gymnastic;