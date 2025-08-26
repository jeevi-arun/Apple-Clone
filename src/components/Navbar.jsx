import React from 'react'
import {FaApple, FaSearch, FaShoppingBag}from "react-icons/fa"


const Navbar = () => {

    const navLinks=[
        {name:<FaApple></FaApple>},
        {name:"Store", href:""},
        {name:"Mac", href:""},
        {name:"iPad", href:""},
        {name:"iPhone", href:""},
        {name:"Watch", href:""},
        {name:"Vision", href:""},
        {name:"Airpods", href:""},
        {name:"Tv & Home", href:""},
        {name:"Entertainment" , href:""},
        {name:"Accessories" , href:""},
        {name:"Support" , href:""},
        {name:<FaSearch></FaSearch> , href:""},
        {name:<FaShoppingBag></FaShoppingBag> , href:""},
    ]
  return (
   <nav className='flex items-center gap-3 text-sm flex-wrap justify-center py-3 fixed mx-auto top-0 bg-white z-20 w-full md:gap-6'>
    
        {
            navLinks.map(link =>(

                <p ><a href={link.href} className=' text-black hover:cursor-pointer'> {link.name}</a></p>
            ))
        }
        
    
    
    
   </nav>
  )
}

export default Navbar