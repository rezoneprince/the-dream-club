import React, { useEffect, useState } from "react";
import { addToLocalStorage, getStoredCart } from "../../Utilities/localstorage";

import Cart from "../Cart/Cart";
import Gymnastic from "../Gymnastic/Gymnastic";
import "./Club.css";

const Club = () => {
  const [gymnastics, setGymnastics] = useState([]);
  const [cart, setCart] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setGymnastics(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const selectedItems = gymnastics.filter(
        (gymnastic) => gymnastic.id === id
      );
      if (selectedItems) {
        selectedItems.quantity = storedCart[id];
        savedCart.push(selectedItems);
      }
    }
    setCart(savedCart);
  }, [gymnastics]);

  const handleAddToCart = (gymnastic) => {
    const newCart = [...cart, gymnastic];
    setCart(newCart);
    setExerciseTime(exerciseTime + gymnastic.time);
    addToLocalStorage(gymnastic.id);
  };

  console.log(cart)
;

  return (
    <div className="club-container">
      <div className="exercise-container">
        {gymnastics.map((gymnastic) => (
          <Gymnastic
            key={gymnastic.id}
            gymnastic={gymnastic}
            handleAddToCart={handleAddToCart}
          ></Gymnastic>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} exerciseTime={exerciseTime}></Cart>
          </div>
          
          

    </div>
  );
};

export default Club;