import React from 'react'

import Banner from '../../../public/footer-pattern.jpg'

import footerlogo from '../../../public/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";
import { DiVim } from 'react-icons/di';
const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  const FooterLinks = [
    {
      id:1032,
      title: "Home",
      link: "/#",
    },
    {
      key:1023,
      title: "About",
      link: "/#about",
    },
    {
       key:122,
      title: "Contact",
      link: "/#contact",
    },
    {
      key:3243,
      title: "Blog",
      link: "/#blog",
    },
  ];
  const Footerinks = [
    {
      id:1203,
      title: "Home",
      link: "/#",
    },
    {
      key:10323,
      title: "About",
      link: "/#about",
    },
    {
       key:1322,
      title: "Contact",
      link: "/#contact",
    },
    {
      key:323243,
      title: "Blog",
      link: "/#blog",
    },
  ];
const Footer = () => {
  return (
    <div style ={BannerImg} className='text-white mb-0'>
       <div   className='container '>
        <div className='grid md:grid-cols-3 pb-44 pt-5 '>
         {/* company details */}                        
         <div className='py-8 px-4'>
            <h1 data-aos="zoom-in" className='sm:text-3xl text-xl text-justify sm:text-left font-bold mb-3 flex gap-3 items-center '> 
                <img data-aos="zoom-in" src={footerlogo} className='max-w-[50px]' alt="" />
                Mayank Mart</h1>
            <p data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab itaque laboriosam natus ratione voluptates!</p>
         </div>
         {/* Footer links */}
         <div  data-aos="zoom-in" className='grid sm:grid-cols-3 grid-cols-2 col-span-2 md:pl-10'>
             <div>
                <div className='py-8 px-4'>
                    <h1 data-aos="zoom-in" className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                    <ul>
                        {
                            FooterLinks.map((data)=>(
                               <div key={data.id} >
                                <li  className='p-1 m-2 hover:text-primary hover:translate-x-1 text-gray-100 duration-200'>
                                    <a href={data.link}>{data.title}</a>
                                </li>
                                </div>

                            ))
                        }
                    </ul>
                </div>
             </div>
             <div>
                <div data-aos="zoom-in" className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Links Links</h1>
                    <ul>
                        {
                            Footerinks.map((data)=>(
                              <div key={data.id}>
                                <li  className='p-1 m-2 hover:text-primary hover:translate-x-1 text-gray-100 duration-200'>
                                    <a href={data.link} className='hover:text-primary'>{data.title}</a>
                                </li>
                                </div>

                            ))
                        }
                    </ul>
                </div>
                
             </div>
             <div>
                <div data-aos="zoom-in" className='text-3xl flex gap-3 mt-7 mb-1'>
                    <FaInstagram className='cursor-pointer'/>
                    <FaFacebook className='cursor-pointer'/>
                    <FaLinkedin className='cursor-pointer'/>

                </div>
                <div data-aos="zoom-in" className='flex gap-3 items-center mt-5'>
                    <FaLocationArrow/>
                    Jaipur, Rajasthan
                </div>
                <div data-aos="zoom-in" className='flex gap-3 items-center mt-5'>
                    <FaMobileAlt/>
                    +91 7851805650
                </div>

             </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Footer
