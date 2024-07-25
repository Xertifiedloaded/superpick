import React from 'react'
import logo from '../assets/logo2.svg'
import { navbar } from '../utils'
import hamburger from '../assets/hamburger.svg'
export default function Header() {
    return (
        <>
            <header className='flex mt-4 py-4 w-[95%] justify-between items-center mx-auto '>
                <div className='flex lg:w-[20%] items-center'>
                    <img className='lg:w-28 lg:h-16 xs:w-24 xs:h-10' src={logo} alt="" />
                </div>
                <div className='xs:block lg:hidden'>
               <img src={hamburger} alt="" />
                </div>
                <nav className=' xs:hidden lg:flex   lg:w-[80%] justify-between items-center'>
                    <ul className='flex gap-5 bg-[#247423] p-5 rounded-xl'>
                        {
                            navbar.map((items, idx) => {
                                return (
                                    <li className='flex text-xs font-700 text-white items-center gap-3' key={idx}><img className='w-3 h-3' src={items.logo} alt="" />{items.title}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className='flex justify-between items-center gap-8'>
                        <li>Log in</li>
                        <button className='w-28 rounded-2xl h-12 bg-[#247423] text-[#FFC93D]'>Sign Up</button>
                    </ul>
                </nav>
            </header>
        </>
    )
}
