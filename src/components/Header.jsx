import React, { useState } from 'react'
import logo from '../assets/logo2.svg'
import { navbar } from '../utils'
import hamburger from '../assets/hamburger.svg'
export default function Header() {
    const [toggle, setToggle] = useState(false)
    const toggleFunction = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <header className='flex mt-4 py-4 w-[95%] justify-between items-center mx-auto '>
                <div className='flex lg:w-[20%] items-center'>
                    <img className='lg:w-28 lg:h-16 xs:w-24 xs:h-10' src={logo} alt="" />
                </div>
                <div onClick={toggleFunction} className='xs:block lg:hidden'>
                    <img src={hamburger} alt="" />
                </div>

                {
                    toggle && <nav className='xs:block lg:hidden xs:fixed inset-0 h-screen bg-[#247423]  lg:w-[80%] '>

                        <ul className='xs:block gap-5   p-5 rounded-xl'>
                            <div className='xs:block text-end lg:hidden'>
                                <img onClick={toggleFunction} className='inline-flex invert' src={hamburger} alt="" />
                            </div>
                            {
                                navbar.map((items, idx) => {
                                    return (
                                        <li className='flex text-xs mt-6 font-700 text-white items-center gap-3' key={idx}><img className='w-3 h-3' src={items.logo} alt="" />{items.title}</li>
                                    )
                                })
                            }
                            <ul className='xs:block xs:w-[85%] mt-6 mx-auto justify-between items-center gap-8'>
                                <li className=' text-white text-sm font-700'>Log in</li>
                                <button className='w-28 text-start rounded-2xl h-12 text-sm font-700 bg-[#247423] text-[#FFFF]'>Sign Up</button>
                            </ul>
                        </ul>

                    </nav>
                }
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
