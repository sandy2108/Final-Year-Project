import React, { useState } from 'react'
import Link from 'next/link'
import {RiMenu5Line} from "react-icons/ri";
import {AiOutlineClose} from "react-icons/ai"
import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";



export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "https://twitter.com/Sanjay33160173",
    title: "Twitter",
  },
];

const Navbar = () => {

  

  const [active, setActive] = useState("Home");
  const [toggle , setToggle] = useState(false);

  return (
    <nav className='navbarbg shadow-lg shadow-blue-100'>
    <div className='max-w-[1340px] mx-auto flex justify-between items-center py-6 px-4 '>
        <Link href="/">
            <h1 className='text-2xl text-black md:text-4xl font-bold'>NFT SEEKER</h1>        
        </Link>

        <ul className='list-none sm:flex hidden justify-end items-center '>
           {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-lg ${active === nav.title ? "text-black" : "text-gray-800"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
               <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
           ))}
        </ul>
        <ConnectWallet colorMode='light'/>
    </div>
    </nav>
  )
}

export default Navbar