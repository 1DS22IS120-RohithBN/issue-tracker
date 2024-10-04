'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const links=[{
        title:"Dashboard",
        href:"/"
    },{
        title:"Issues",
        href:"/issues"
    }]
    const currentPath=usePathname()

  return (
    <nav className='flex border-b text-xl'>
        <div className='p-4 mb-3'><FaBug/></div>
        <ul className='flex p-4 mb-3 space-x-6'>
            {links.map((link,index)=><Link key={link.href} href={link.href} className={`${link.href===currentPath?"text-black ":"text-gray-600 hover:text-black"}`}>  {link.title}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar