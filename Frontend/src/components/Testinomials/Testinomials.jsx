import React from 'react'
import Slider from 'react-slick';
import test1 from '../../assets/test1.jpg'
import test2 from '../../assets/test2.jpg'
import test3 from '../../assets/test3.jpg'
import test4 from '../../assets/test4.jpg'
const TestimonialData = [
    {
      id: 1000,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: test1,
    },
    {
      id: 20000,
      name: "Satya Nadella",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: test2,
    },
    {
      id: 30000,
      name: "Virat Kohli",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: test3,
    },
    {
      id: 500000,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: test4,
    },
  ];
  
const Testinomials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite:true,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:true,
            },
          },
        ],
      };
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* Header Section */}
                <div  className='text-center mb-10 max-w-[600px] mx-auto'>
             <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
             <h1 data-aos="fade-up" className='text-3xl font-bold'>Testinomials</h1>
             <p data-aos="fade-up" className='text-gray-400 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, reiciendis!
             </p>
        </div>
        {/* Testinomials Section */}
        <div data-aos="zoom-in">
            <Slider {...settings}>
            {
                TestimonialData.map((data)=>(
                  <div key={data.id}  className='my-6'>
                      <div  className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                        <div className='mb-4'>
                            <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                        </div> 
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>

                            <p className='text-xs text-gray-500'>{data.text}</p>
                            <h1 className='text-xl font-bold text-black/80  '>{data.name}</h1>
                            </div>
                        
                        </div>
                    <p className='text-9xl absolute text-black/20 font-serif top-0 right-0'>
                        ,,
                    </p>
                    </div>
                  </div>
                ))
            }
            </Slider>
        </div>
        </div>
    </div>
  )
}

export default Testinomials
