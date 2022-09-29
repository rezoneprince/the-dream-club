import React from 'react';
import './Gymnastic.css';

const Gymnastic = (props) => {
    const {img, name, age, time } = props.gymnastic;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{ name}</h2>
            <p>For Age : <b>{ age}</b></p>
            <p>Time required : <b>{ time}</b></p>
        </div>
    );
};

export default Gymnastic;