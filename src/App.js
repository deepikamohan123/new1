import React from 'react';
import './App.css';
function App() {
  return (
    <div className='back'>
    <div className='home-container'>
      <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
         
        </div>
    <div>
    <div className="home-image-section">
    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    alt ="" className="image" />
    <div className="white">
    <div className="text-align">
    <h1 classname="food-name">
      Biriyani
    </h1>
    <p classname ="food-des">
      very tasty
    </p>
    </div>
    <div classname="button">
     <button className="secondary-button">
            Order Now 
          </button>
          </div>
          </div>
</div>
<div className="home-image-section">
    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    alt ="" className="image" />
     <button className="secondary-button">
            Order Now 
          </button>
</div>
    </div>
  <div/>
  </div>
  </div>
  
  
  
  );
}

export default App;
