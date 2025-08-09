import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <div className="social flex align-center justify-start text-3xl gap-2 w-fit">
            <div className=' hover:text-blue-600 transition duration-400'>
                <a href="#"><FaLinkedin /></a>
            </div>
            <div className=' hover:text-blue-600 transition duration-400'>
                <a href="#"><FaGooglePlusSquare /></a>
            </div>
            <div className=' hover:text-blue-600 transition duration-400'>
                <a href="#"><FaTwitterSquare /></a>
            </div>
        </div>
    )
}
