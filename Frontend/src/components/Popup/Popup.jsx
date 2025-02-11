import React from 'react'
 import { IoCloseOutline } from 'react-icons/io5'
const Popup = ({orderPopup,setOrderPopup}) => {
  return (
    <>
       {orderPopup && (
            <div className=''>
                <div className='h-screen w-screen fixed left-0 top-0 bg-black/40 z-50 backdrop-blur-sm'>
                    <div className='fixed top-1/3 left-1/2 rounded-md duration-200 w-[340px] -translate-x-1/2 p-4 shadow-md bg-white dark:bg-gray-900'>
                          
                          <div className='flex items-center justify-between'>
                             <h1 className='text-xl mb-2'>Order Now</h1>
                            < IoCloseOutline className='text-2xl ' onClick={()=>{
                                setOrderPopup(false)
                            }}/>
                          </div>
                          <div>
                         <input type="text" placeholder='Name' className='rounded-full py-1 px-3 m-3 outline-none border border-gray-300 w-[285px] dark:border-gray-500 dark:text-black dark:bg-gray-800' />
                         <input type="text" placeholder='email' className='rounded-full py-1 px-3  m-3 outline-none border border-gray-300 w-[285px] dark:border-gray-500 dark:text-black dark:bg-gray-800' />
                         <input type="text" placeholder='Address' className='rounded-full py-1  m-3 px-3 outline-none border border-gray-300 w-[285px] dark:border-gray-500 dark:text-black dark:bg-gray-800' />
                         </div>
                         <div className='text-center'>
                         <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                         </div>
                    </div>
                </div>
               
            </div>
        )}
    </>
  )
}

export default Popup
