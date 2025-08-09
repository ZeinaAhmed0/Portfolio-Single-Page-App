import React from 'react'
import aboutPic from '/src/assets/about-pic.jpg'
export default function About() {
  return (
    <>
      <h1 className='text-center my-5 lg:text-3xl text-2xl font-bold text-blue-600 p-4'>about</h1>
      <div className="about-content grid grid-cols-2 gap-5 lg:w-7xl md:w-8xl sm:w-9xl w-full m-auto px-10 mb-10">
        <div className="about-img overflow-hidden lg:w-lg md:w-xm">
          <img className='object-cover w-full' src={aboutPic} alt="profile pic" />
        </div>
        <div className="about-txt flex items-start justify-center flex-col gap-3">
          <h2 className='lg:text-3xl sm:text-2xl text-xl font-bold'>i'm marlon</h2>
          <p className='lg:text-2xl sm:text-xl text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
        </div>
      </div>
    </>
  )
}
