import React from "react";
import logo from "../../../public/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Men's Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const dropdown = [
  { id: 6, name: "Trending Products", link: "/#" },
  { id: 7, name: "Best Selling", link: "/#" },
  { id: 8, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handlepop }) => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("Token"); // Clear auth token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="shadow:md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10" />
              Mayank Mart
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 
                focus:border-primary focus:outline-none px-2 py-1 dark:bg-gray-800 dark:border-gray-500"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            {/* Order button */}
            <button
              onClick={handlepop}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full"
            >
              Logout
            </button>

            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href="#" className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block rounded-md w-[190px] bg-white p-2 text-black">
              <ul>
                {dropdown.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-[170px] p-2 rounded-md hover:bg-primary/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
