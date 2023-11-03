import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Productdisplay from './Components/ProductDisplay/Productdisplay';

const App = () => {


  const [Products, setProducts] = useState([]);
  const [searchField, setsearchField] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState({ low: 0, high: 999 });
  const [currentPage, setcurrentPage] = useState(1);
  const [sideBar, setSideBar] = useState(false);
  const [isLoading, setisLoading] = useState('App hide');

//Fetch Product data from API and store is as Product state
  useEffect(() => {
    return () => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data)).then(()=>setisLoading('App'))
    };
  },[]);



//State of sidebar visiblity on smaller devices, True means visible & False means hidden
  const toggleSideBar = () => setSideBar(!sideBar);

//Changes the Current Page State when users nagivate to another page using pagination buttons
  const onPageChange = (p) => {
    setcurrentPage(p);
  }


//Changes the search field state when user searches anything using search bar
  const onSearchChange = (event) => {
    setsearchField(event.target.value);
    setcurrentPage(1);
  }

//Changes the Price state range when users filters product by Price
  const handlePriceChange = (low, high) => {
    console.log(low, high);
    setPrice({ low, high });
    setcurrentPage(1);
  }

//Changes the Catogery state range when users filters product by Catogery
  const handleCategoryChange = (category) => {
    console.log(category);
    setCategory(category);
    setcurrentPage(1);
  }

//Filtering the product based on the category selected by user, by comparing the category state with the Product objects category property.
  const catogeryFilter = (product) => {
    if (category === 'all') return true;
    else if (category === product.category) return true;
    else return false;
  }


//Filtering the product based on the price range selected by user, by comparing the price state with the Product objects price property.
  const priceFitler = (product) => {
    //API provides price as string, so changing it to INT for comparision
    return (price.low <= parseInt(product.price) && price.high >= parseInt(product.price)) 

  }


//If a product satisfies the category filter function and price filter function, the product is added into an array called "filterProduct"
  const filteredProduct = Products.filter(product => {
    return catogeryFilter(product) && priceFitler(product);
  })

  //After the filtered product based on category and price, it is compared with the search bar entry, if user searches anything it is further filtered,
  //else entire array is passed
  const searchedProduct = filteredProduct.filter(product => {
    return (product.title.toLowerCase().includes(searchField.toLowerCase()) || product.category.toLowerCase().includes(searchField.toLowerCase()) );
  })

  //When side bar is visible, background is darkened, this changes the dark overlay based on whether the side bar is visible or not. This is only for
  //small screen devices.
  let overlay = '';
  if (sideBar) overlay = 'overlay';
  else overlay = '';

  return (
    <div className={isLoading}>
      <div className={overlay}></div>
      <Header onSearchChange={onSearchChange} toggleSideBar={toggleSideBar}></Header>
      <div className='body'>
        <Sidebar handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} toggleSideBar={toggleSideBar} sideBar={sideBar}></Sidebar>
        <Productdisplay onPageChange={onPageChange} currentPage={currentPage} Products={searchedProduct}></Productdisplay>
      </div>
    </div>
  );
}

export default App;
