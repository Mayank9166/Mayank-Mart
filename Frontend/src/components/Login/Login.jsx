import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://mayank-mart-backendfirst.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok==true) {
        localStorage.setItem("Token", data.token); // Store token
        toast.success("Login successful");
        navigate("/"); // Redirect to home page
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  

  return (
    <div className='bg-primary/15 h-screen flex justify-center items-center'>
      <div className='bg-white w-[450px] rounded-xl'>
        <h1 className='text-3xl text-center font-take font-bold mt-8'>Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className='text-center mb-5 flex-col items-center'>
            <div>
              <input 
                type="email" 
                placeholder='Enter your email' 
                onChange={(e) => setemail(e.target.value)} 
                className='w-3/4 p-4 text-2xl font-semibold placeholder:text-xl border-2 border-gray-300 m-2 outline-none rounded-md' 
              />
            </div>
            <div>
              <input 
                type="password"  
                placeholder='Enter your password' 
                onChange={(e) => setpassword(e.target.value)} 
                className='w-3/4 p-4 text-2xl font-semibold placeholder:text-xl border-2 border-gray-300 m-2 outline-none rounded-md' 
              />
            </div>
            <div className='flex justify-center w-full mt-5'>
              <button type='submit' className='text-2xl rounded-md bg-primary py-2 px-6 text-white'>
                  Login
              </button>
            </div>
            <div className='flex justify-center items-center mt-2 gap-1'>
              <p>Don't have an account? </p>
              <Link className="text-blue-600" to={"/register"}>Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
