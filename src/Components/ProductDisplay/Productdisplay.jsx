import React from 'react';
import Productlist from '../ProductCard/Productlist';
import './Productdisplay.css';

const Productdisplay = ({ Products, currentPage, onPageChange }) => {


  let n = Math.ceil(Products.length / 5);
  const btn = [];
  let c = 'pagination-btn'
  for (let i = 1; i <= n; i++){
    
    if (currentPage === i) c = c + ' active';
    else c = "pagination-btn";

    btn.push(<button key={i} className={c} onClick={()=>onPageChange(i)}>{i}</button>)
  }

  return (
    <div className='product-display'>
      <Productlist products={Products} currentPage={currentPage}></Productlist>
      <div className='btn-container'>
        {btn}
      </div>
    </div>
  );
}

export default Productdisplay;
