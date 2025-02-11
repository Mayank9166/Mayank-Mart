import React from 'react'
import banner from '../../../public/orange-pattern.jpg'
const BannerImg = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
const Subscribe = () => {
  return (
    <div data-aos="fade-up" style={BannerImg} className='bg-gray-100 dark:bg-gray-800 text-white'>
      <div className='container backdrop-blur-sm py-10 mb-20'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl sm:text-4xl !text-center font-semibold sm:text-left '>Get Notified About New Products</h1>
            <input data-aos="fade-up" type="text" placeholder='Enter your email' className='w-full p-3 text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
