import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import aos from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testinomials from './components/Testinomials/Testinomials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import { Routes, Route } from "react-router-dom";
import Protected from './components/Protected/Protected';
import Admin from './components/Admin/Admin';
import axios from "axios"; 
const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
   
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://mayank-mart.onrender.com/api/images", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`, // Ensure a valid token is stored
          },
        });
        console.log("Fetched images:", response.data);
        setImages(response.data)
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);
  React.useEffect(() => {
    aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    aos.refresh();
  }, []);

  const [orderPopup, setOrderPopup] = useState(false);
  const handlepop = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className='dark:bg-gray-900 dark:text-white bg-white duration-200'>
      <Routes>
        <Route 
          path="/" 
          element={
            <Protected>
              <>
                <Navbar handlepop={handlepop} />
                <Hero />
                <Products data= {images} />
                <TopProducts />
                <Banner />
                <Subscribe />
                <Products data={images}/>
                <Testinomials />
                <Footer />
                <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
              </>
            </Protected>
          } 
        />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Protected><Admin /></Protected>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
