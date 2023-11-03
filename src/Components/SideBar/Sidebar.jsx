import React from 'react';
import './Sidebar.css';
import close from '../../Assets/close.png';

function Sidebar({ handleCategoryChange, handlePriceChange, sideBar, toggleSideBar }) {
  
  let classList = 'sidebar responsive'
  if (sideBar) classList = classList + ' visible';
  else classList = 'sidebar responsive';

  return (
    <div className={classList}>
      <img src={close} className='close-btn' onClick={toggleSideBar} alt='cross'></img>
      <div>
        <div>
          <h6>Catogery</h6>
          <ul>
            <li><input type='radio'name='catogery' defaultChecked onClick={()=>handleCategoryChange("all")}></input>All</li>
            <li><input type='radio'name='catogery' onClick={()=>handleCategoryChange("men's clothing")}></input>Men's wear</li>
            <li><input type='radio'name='catogery' onClick={()=>handleCategoryChange("jewelery")}></input>Jewelery</li>
            <li><input type='radio'name='catogery' onClick={()=>handleCategoryChange("electronics")}></input>Electronics</li>
            <li><input type='radio'name='catogery' onClick={()=>handleCategoryChange("women's clothing")}></input>Women's wear</li>
          </ul>
          </div>
          <div>
          <h6>Price</h6>
          <ul>
            <li><input type='radio'name='price-range' defaultChecked onClick={()=>handlePriceChange(0, 999)}></input>All</li>
            <li><input type='radio'name='price-range' onClick={()=>handlePriceChange(1, 9)}></input>$1 - $ 9</li>
            <li><input type='radio'name='price-range' onClick={()=>handlePriceChange(10, 99)}></input>$10 - $ 99</li>
            <li><input type='radio'name='price-range' onClick={()=>handlePriceChange(100, 499)}></input>$100 - $ 499</li>
            <li><input type='radio'name='price-range' onClick={()=>handlePriceChange(500, 999)}></input>$500 - $ 999</li>
          </ul>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;
