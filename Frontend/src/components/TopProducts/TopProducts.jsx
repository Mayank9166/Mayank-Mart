import React from 'react'
import Img1 from '../../../public/shirt.png'
import Img2 from '../../../public/shirt2.png'
import Img3 from '../../../public/shirt3.png'
import { FaStar } from 'react-icons/fa';
const ProductsData = [
    {
      id: 100,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 101,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 103,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
const TopProducts = ({handlePop}) => {
  return (
    <div>
      <div className='container'>
        {/* Header Section */}
          <div>
          <div className='mb-24 text-left mx-2 '>
             <p data-aos="fade-up"  className='text-sm text-primary'>Top Selling Products for you</p>
             <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
             <p  data-aos="fade-up" className='text-gray-400 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, reiciendis!
             </p>
        </div>
          </div>
        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
           { 
            ProductsData.map((data)=>(
               <div id={data.id} data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                   {/* Image Section */}
                   <div className='h-[100px]'>
                        <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 '/>

                   </div>
                   {/* Details Section */}
                   <div className='p-4 text-center'>
                     {/* star ratings */}
                     <div className=' w-full flex items-center justify-center gap-1'>
                        
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                     </div>
                   
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-200'>{data.description}</p>
                        <div className='mt-2'>
                            <button onClick={handlePop} className='bg-primary hover:scale-105  text-white py-2 px-4 rounded-full group-hover:bg-white group-hover:text-primary duration-300 text-sm  '>Order me</button>
                        </div>

                    
                   </div>
                </div>
            ))
           }
          </div>
      </div>
    </div>
  )
}

export default TopProducts
