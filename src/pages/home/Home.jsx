import React from 'react'
import img from '/src/assets/profile-pic.png'
import SocialLinks from '../../components/common/SocialLinks'

export default function Home() {
  return (
    <>
      <div className='lg:w-7xl md:w-3xl sm:w-2xl w-2sm m-auto lg:p-10 md:p-8 sm:p-6 p-5 grid grid-cols-2 items-center justify-between gap-3'>
        <div className='flex justify-center flex-col gap-5'>
          <h1 className='lg:text-6xl md:4xl sm:text-3xl text-xl font-bold w-fit'> Hi,I'am <br /> <span className='text-blue-600'>Marlon</span> <br /> Web Designer </h1>
          <SocialLinks />
        </div>
        <div className='overflow-hidden relative flex items-center justify-center'>
          <img src={img} className='object-cover fill pt-5 border rounded-[50%] border-blue-600 bg-blue-600' alt="transparent profile pic" />
        </div>
      </div>
    </>
  )
}