import React, { useState } from "react";
import Images from "../../images/prince.png";
import "./Cart.css";

const Cart = ({ cart, exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);
    const [btn, activityButton] = useState(false);
    if (btn) {
        setTimeout(()=>{activityButton(false)}, 2000)
    }
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
          
      <div className="addBreak">
        <h2>Add a Break</h2>
        <div className="add-break-btn">
          <button onClick={() => setBreakTime(10)}>10s</button>
          <button onClick={() => setBreakTime(20)}>20s</button>
          <button onClick={() => setBreakTime(30)}>30s</button>
          <button onClick={() => setBreakTime(40)}>40s</button>
          <button onClick={() => setBreakTime(50)}>50s</button>
        </div>
      </div>
      <div className="exercise-details">
        <h2>Exercise Details {cart.length}</h2>
            <div className="exercise-details-time">
                <p className="exercise-time">
                    Exercise Time <span>{exerciseTime} seconds</span>
                </p>
                <p className="break-time">
                    Break Time <span>{breakTime} seconds</span>
                </p>
            </div>
        </div>
          
           <div className={btn? "displayBlock":"displayNone"}>
                  <h1 className="active-pop">Activity Complete</h1>
          </div>
          
          <div className="activity-btn">
              <button onClick={()=> activityButton(true)}><p>Activity Completed</p></button>
          </div>
    </div>
  );
};

export default Cart;