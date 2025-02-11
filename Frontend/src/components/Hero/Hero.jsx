import React from 'react'
import image1 from '../../assets/women.png'
import image2 from '../../assets/shopping.png'
import image3 from '../../assets/sale.png'
import Slider from "react-slick";

const imageList = [
    {
        id: 14,
        img: image1,
        title: "Upto 50% off on all Men's Wear",
        description:
          "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 15,
        img: image2,
        title: "30% off on all Women's Wear",
        description:
          "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 16,
        img: image3,
        title: "70% off on all Products Sale",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
]
const Hero = () => {
    
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
   {/* background pattern */}
   <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

     </div>
   {/* hero section */}
   <div className='container pb-8 sm:pb-0'>
   <Slider {...settings}>
    {
    imageList.map((data)=>(

    <div key={data.id}>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
         {/* text-section */}
         <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
          <h1 
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="500"
          className='font-bold text-5xl sm:text-6xl lg-text-7xl'>{data.title}
          </h1>
          <p data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="500" className='text-sm'>{data.description}</p>
          <div data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="500">
            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
          </div>
         </div>
         {/* image-section */}  
         <div className='order-2 sm:order-1'>
          <div data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="500"
           className='relative z-10'>
            <img src={data.img} alt="" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-10 mx-auto object-contain '/>
          </div>
         </div>
      </div>
    </div>
    ))
}
    </Slider>
   </div>
  
    </div>
  )
}

export default Hero
