import React from 'react'
import SocialLinks from '../common/SocialLinks'

export default function Footer() {
  return (
    <>
    <footer className='bg-blue-950 text-white w-full'>
      <div className="content lg:w-5xl md:w-3xl sm:w-8xl w-full flex flex-col items-center justify-center m-auto py-6 gap-5">
        <h1 className='md:text-3xl text-2xl'>marlon</h1>
        <SocialLinks />
        <p> &copy; Bedimcode. All rigths reserved</p>
      </div>
    </footer>
    </>
  )
}
