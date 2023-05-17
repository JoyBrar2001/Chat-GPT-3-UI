import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../assets/logo.svg'

const NavbarMenu = () => (
  <>
    <p className='mx-4 my-2'><a href="#home">Home</a></p>
    <p className='mx-4 my-2'><a href="#wgpt3">What is GPT3?</a></p>
    <p className='mx-4 my-2' my-2><a href="#possibility">Open AI</a></p>
    <p className='mx-4 my-2'><a href="#features">Case Studies</a></p>
    <p className='mx-4 my-2'><a href="#Blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='flex justify-between items-center py-8 w-full text-white text-base section__padding'>
      <div className='hidden lg:flex flex-1 justify-start items-center'>
        <div className='mr-8'>
          <img src={logo} className='w-[62px] h-[16px]' alt="logo" />
        </div>

        <div className='flex flex-row text-white font-[Manrope] font-semibold capitalize'>
          <NavbarMenu />
        </div>
      </div>

      <div className='hidden lg:flex flex-row justify-end items-center text-white font-[Manrope] font-semibold capitalize'>
        <p className='mx-4'>Sign In</p>
        <button type='button' className='mx-4 bg-[#ff4822] px-6 py-3 rounded-lg'>Sign Up</button>
      </div>

      <div className='flex flex-row w-full justify-between items-center lg:hidden'>
      <div className='mr-8'>
          <img src={logo} className='w-[62px] h-[16px]' alt="logo" />
        </div>
        {
          menu ?
            <RiCloseLine color='#fff' size={27} onClick={() => setMenu(!menu)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setMenu(!menu)} />
        }
        {menu && (
          <div className='flex flex-col justify-end
           items-end text-right p-8 absolute top-[40px] right-0 mt-4 min-w-[210px] rounded-lg bg-[#031B34]'>
            <div>
              <NavbarMenu my-2 />
              <div>
                <p className='mx-4'>Sign In</p>
                <button type='button' className='mx-4 bg-[#ff4822] px-6 py-3 rounded-lg mt-3'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div >

    </div>
  )
}

export default Navbar
