import React from 'react'
import logo from '../assets/logo2.svg'
import { Link } from 'react-router-dom'
import { footerList } from '../utils'
export default function Footer() {
  return (
    <footer className='bg-[#333333] h-[700px] mt-8'>
      <div className='w-[95%] mx-auto'>
        <div className='flex justify-between items-center'>
          <img className='w-28 h-28' src={logo} alt="" />
          <p className='text-white text-700'>ALL FOR LOVE</p>
        </div>




        <ul className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {
            footerList.map((items, idx) => {
              return (
                <ul className=''>
                  <li key={idx} className='text-white mb-2'>{items.title}</li>
                  {items.subFooter && items.subFooter.map((items, idx) => (
                    <Link key={idx} className='block text-[#808080] my-4 text-sm'>{items.name}</Link>
                  ))}
                </ul>
              )
            })
          }
        </ul>
      </div>
      <hr className='border border-[#808080]' />
      <div className='w-[95%] mx-auto'>
        <div className='py-4'>
          <h1 className='text-white'>Connect with Us</h1>
          <p className='text-[#808080] py-2 text-sm'>Telephone: <span className='text-sm '>0800000000</span> <span className='border border-[#FFC93D] mx-2 h-4 inline-block' /> <span className='text-sm'>0800000000</span> </p>
          <p className='text-[#808080] text-sm'>Email: <span>9jaParrot@gmail.com</span></p>
        </div>
        <div>

        </div>
      </div>
    </footer>
  )
}
