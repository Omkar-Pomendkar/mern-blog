import { Navbar, TextInput } from 'flowbite-react'
import {Link} from  "react-router-dom";
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";




export default function Header() {
  return (
    
      <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Omkar's</span>
            Blog
        </Link>

        <form>
          <TextInput
           type = 'text'
           placeholder='Search....'
           rightIcon = {IoSearchOutline}
           className=' hidden lg:inline'
          />
          
        </form>
       <button className='px-2 py-1 w-12 h-10 lg:hidden '   color='gray' pill="true">
       <IoSearchOutline />
       </button>

       <div className='flex gap-2 md:order-2 '>
        <button className='px-2 py-1 w-12 h-10 hidden sm:inline ' color='gray' pill="true">
        <FaMoon />
        </button>


        <Link to='/signin'>
        <button   className='px-2 py-1 w-20 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg	 text-white outline' >
          SignIn
        </button>
        <Navbar.Toggle className=' h-10' />
        </Link>
       </div>
       <Navbar.Collapse>
       <Navbar.Link>
        <Link to="/">Home</Link>
       </Navbar.Link>

       <Navbar.Link>
        <Link to="/about">About</Link>
       </Navbar.Link>

       <Navbar.Link>
        <Link to="/project">Project</Link>
       </Navbar.Link>
       </Navbar.Collapse>

      </Navbar>
    
  )
}
