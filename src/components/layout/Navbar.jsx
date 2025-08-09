import React from 'react'
import { BsList } from 'react-icons/bs'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  return (
    <>
      <header className='bg-gray-200 static top-0 py-6'>
        <div className="nav-content flex items-center justify-between lg:w-7xl md:w-8xl w-full m-auto px-5">
          <h1 className='md:text-3xl text-lg font-bold'>Marlon</h1>
          <div className='list flex items-center justify-center'>
            <ul className="list flex align-center justify-center md:gap-5 gap-2 flex-row md:text-xl sm:text-lg text-sm">
              <li className='hover:text-blue-600 transition duration-300'> <NavLink end to={''} className={({ isActive }) => isActive ? 'active text-blue-600' : ''}> home </NavLink> </li>
              <li className='hover:text-blue-600 transition duration-300'> <NavLink to={'about'} className={({ isActive }) => isActive ? 'active text-blue-600' : ''}> about </NavLink> </li>
              <li className='hover:text-blue-600 transition duration-300'> <NavLink to={'skills'} className={({ isActive }) => isActive ? 'active text-blue-600' : ''}> skills </NavLink> </li>
              <li className='hover:text-blue-600 transition duration-300'> <NavLink to={'work'} className={({ isActive }) => isActive ? 'active text-blue-600' : ''}> work </NavLink> </li>
              <li className='hover:text-blue-600 transition duration-300'> <NavLink to={'contact'} className={({ isActive }) => isActive ? 'active text-blue-600' : ''}> contact </NavLink> </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
