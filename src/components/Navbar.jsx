import {Menu, X} from "lucide-react";
import { useState } from "react";

import logo from '../assets/logo.png'

import {navItems} from "../constants"
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
    
  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-transparent border-b border-neutral-700/80">
    <div className="container px-10 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2"  src={logo} alt="Logo" />
                <span className='text-xl tracking-tight'>VirtualR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 group">
                {
                navItems.map((item, index) =>(
                <li key={index} className=" cursor-pointer text-white">
                    <a href={item.href}>{item.label}</a>
                </li>
                ))
                }

            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="py-2 px-5 border rounded-md">Sign In</a>
                <a href="create" className="py-2 px-5  rounded-md bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:from-orange-600 hover:to-orange-400">Create an account</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
            </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center lg:hidden">
                <ul className="flex flex-shrink">
                    {navItems.map((item,index) =>(<li key={index} className="py-2 px-2">
                        <a href={item?.href}>{item?.label}</a>
                        </li>))
                    }
                </ul>
                <div className="flex flex-row space-x-3  md:space-x-6 mt-5">
                    <a href="#" className="rounded-md border p-3 text-wrap  ">Sign In</a>
                    <a href="#create" className="text-wrap  p-3 text-white rounded-md bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400">Create an account</a>
                </div>
            </div>
        )}
    </div>
   </nav>
  )
}

export default Navbar
