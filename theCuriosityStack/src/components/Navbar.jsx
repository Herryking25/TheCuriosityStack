import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
      // nav items
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/services', link: 'Services' },
    { path: '/about', link: 'About' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-white'>
            The 
            <span className='text-orange-500'>CuriosityStack</span>
        </a>

        {/* navigation for lg screens */}
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navItems.map(({path, link}) =><li className='text-white' key={path}>
                    <NavLink  className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                } to={path}>{link}</NavLink>
                </li>)
            }
        </ul>
        {/* Menu Icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-500'> <FaFacebook /></a>
            <a href="/" className='hover:text-orange-500'> <FaDribbble /></a>
            <a href="/" className='hover:text-orange-500'> <FaSquareXTwitter /></a>
            <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>
                Log In
            </button>
        </div>
        {/* Hamburger Menu, btn, display for mobile screens */}
        <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                    isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                }
            </button>
        </div>
      </nav>
      {/* menu items for mobile */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all duration-150' : 'hidden'}`}>
                {
                    navItems.map(({path, link}) =><li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
      </div>
    </header>
  )
}

export default Navbar
