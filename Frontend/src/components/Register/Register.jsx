import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://mayank-mart-backendsecond.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
      console.log(data);
      
      if (response.ok) {
        toast.success("Registered successfully. Please log in.");
        navigate("/login");
      } else {
        toast.error(data.error || "Registration failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className='bg-primary/15 h-screen flex justify-center items-center'>
      <div className='bg-white w-[450px] rounded-xl'>
        {/* Heading for signup */}
        <h1 className='text-3xl text-center font-take font-bold mt-8'>Signup</h1>
        
        {/* Input user name */}
        <form onSubmit={handleSubmit}>
        <div className='text-center mb-5 flex-col items-center'>
          <div>
            <input type="text" placeholder='Enter your name' onChange={(e)=>setname(e.target.value)} className='w-3/4 p-4 text-2xl font-semibold placeholder:text-xl border-2 border-gray-300 m-2 outline-none rounded-md' />
          </div>
          
          {/* Input email address */}
          <div>
            <input type="email"   placeholder='Enter your email' onChange={(e)=>setemail(e.target.value)} className='w-3/4 p-4 text-2xl font-semibold placeholder:text-xl border-2 border-gray-300 m-2 outline-none rounded-md' />
          </div>
          
          {/* Input Password */}
          <div>
            <input type="password" placeholder='Enter your password' onChange={(e)=>setpassword(e.target.value)} className='w-3/4 p-4 text-2xl font-semibold placeholder:text-xl border-2 border-gray-300 m-2 outline-none rounded-md' />
          </div>
          
          {/* Signup button */}
          <div className='flex justify-center w-full mt-5'>
            <button type='submit' className='text-2xl rounded-md bg-primary py-2 px-6 text-white'>
              Signup
            </button>
          </div>
          <div className='flex justify-center items-center mt-2 gap-1'>
            <p>Already have a account? </p>
            <Link className="text-blue-600"to={"/login"}>Login</Link>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
