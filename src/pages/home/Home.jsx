import React from 'react'
import img from '/src/assets/profile-pic.png'
import SocialLinks from '../../components/common/SocialLinks'
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <div className='lg:w-7xl md:w-3xl sm:w-2xl w-2sm m-auto lg:p-10 md:p-8 sm:p-6 p-5 grid grid-cols-2 items-center justify-between gap-3'>
        <div className='flex justify-center flex-col gap-5'>
          <h1 className='lg:text-6xl md:4xl sm:text-3xl text-xl font-bold w-fit'> Hi,I'am <br /> <span className='text-blue-600'>Marlon</span> <br /> Web Designer </h1>
          <SocialLinks />
          <div className="contact-btn">
            <Link to={'contact'} className='sm:w-2xs  p-1 bg-blue-600 text-white text-xl cursor-pointer px-6 py-2 rounded-xl :hover:bg-blue-300 duration-300'>contact us</Link>
          </div>
        </div>
        <div className='overflow-hidden relative flex items-center justify-center'>
          <img src={img} className='object-cover fill pt-5 border rounded-[50%] border-blue-600 bg-blue-600' alt="transparent profile pic" />
        </div>
      </div>
    </>
  )
}