import React from 'react';
import './Productcard.css';

function Productcard({ title, imageURL, category, price, rating, id }) {
  
  const titleArray = title.split(" ");
  const productTitle=titleArray[0]+" " + titleArray[1] +" "+titleArray[2]

  return (
    <div className='product-card'>
      <img src={imageURL} alt={id}></img>
      <h4 className='title'>{productTitle}</h4>
      <h5 className='price'>$ {parseInt(price)}</h5>
      <h5 className='rating'>Rating: {rating.rate}/5</h5>
      <div className='btn'>
        <button className='buy-btn'>Buy Now</button>
        <button className='cart-btn'>Add to Cart</button>
      </div>
      
    </div>
  );
}

export default Productcard;
