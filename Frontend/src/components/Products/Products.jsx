import React from 'react'

// import Img1 from '../../assets/Women.png'
// import Img2 from '../../assets/Women2.jpg'
// import Img3 from '../../assets/Women3.jpg'
// import Img4 from '../../assets/Women4.jpg'
import { FaStar } from 'react-icons/fa'
// const ProductsData = [
//   {
//     id: 23,
//     img: Img1,
//     title: "Women Ethnic",
//     rating: 5.0,
//     color: "White",
//     aosDelay: "0",
//   },
//   {
//     id: 24,
//     img: Img2,
//     title: "Women western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//   },
//   {
//     id: 26,
//     img: Img3,
//     title: "Goggles",
//     rating: 4.7,
//     color: "Brown",
//     aosDelay: "400",
//   },
//   {
//     id: 27,
//     img: Img4,
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//   },
//   {
//     id: 28,
//     img: Img2,
//     title: "Fashin T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
// ];

const Products = ({data}) => {

  return (
    <div className='mt-10 mb-12'>
     <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
             <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
             <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
             <p data-aos="fade-up" className='text-gray-400 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, reiciendis!
             </p>
        </div>
        {/* Body Section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/* Card Section */}
                {
                  data.map((data)=>(
                   <div key={data._id} data-aos="fade-up" data-aos-delay="2ms" className='space-y-3'>
                    <img src={data.imageUrl} alt={data.title} className='h-[220px] w-[150px] object-contain rounded-md' />
                     <div>
                      <h3 className='font-semibold'>{data.title}</h3>
                      <p className='text-sm text-gray-600'>{data.color}</p>
                      <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500'/>
                        <span>{data.rating}</span>
                      </div>
                      </div>
                    </div>
                  ))
                }
            </div>
            <div data-aos="fade-up" className='flex justify-center'>
              <button className='mt-10 text-center bg-primary text-white rounded-md px-5 py-1 cursor-pointer'>View All Button</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Products
