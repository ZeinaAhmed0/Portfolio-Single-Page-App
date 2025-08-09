import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className='text-center my-5 lg:text-3xl text-2xl font-bold text-blue-600 p-4'>contact</h1>
        <form action="" className='flex flex-col gap-5 items-center justify-center m-auto my-10 p-6 rounded-2xl border-2 w-fit'>
          <input type="text" placeholder='name :' className='w-2xs p-1.5 outline-[2px] text-xl rounded-md' />
          <input type="email" placeholder='email :' className='w-2xs p-1.5 outline-[2px] text-xl rounded-md' />
          <textarea placeholder='message :' className='w-2xs p-1.5 outline-[2px] text-xl rounded-md' cols="30" rows="5"></textarea>
          <button className='w-2xs p-1 bg-blue-600 text-white text-xl cursor-pointer :hover:opacity-75'>submit</button>
        </form>
      </div>
    </>
  )
}
