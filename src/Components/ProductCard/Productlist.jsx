import React from 'react';
import Productcard from './Productcard';
import './Productcard.css';

const Productlist = ({ products, currentPage }) => {
  
  const ProductCards = products.map((product, i) => {
    if (i >= (currentPage - 1) * 5 && i < currentPage * 5) {
      return <Productcard title={product.title} price={product.price} imageURL={product.image} rating={product.rating}
      category={product.category} id={product.id} key={product.id}></Productcard>
    }
    return <></>
    // return <Productcard title={product.title} price={product.price} imageURL={product.image} rating={product.rating}
    // category={product.category} id={product.id} key={product.id}></Productcard>
  })



  return (
    <>
    <div className='product-list'>
        {ProductCards}
      </div>
    </>
  );
}

export default Productlist;
