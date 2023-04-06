import React from 'react'
import './footer.css'
import { BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='mydearest__footer '>
        <div className='mydearest__footer-top'>
            <h2>Connect with me on social media!</h2>
            <div className="mydearest__footer-top-links">
                <a id="profile-link" href="https://www.youtube.com/@MyDearestJulia" ><BsYoutube fontSize="inherit" style={{ color: "var(--color-text-red)" }} /></a>
                <a className="contact-link" href="https://www.instagram.com/mydearestjulia/?hl=en" ><BsInstagram style={{ color: "white" }} /></a>
                <a className="contact-link" href="https://www.tiktok.com/@mydearestjulia" ><FaTiktok style={{ color: "white" }} /></a>
                <a className="contact-link" href="https://twitter.com/MyDearestJulia" ><BsTwitter style={{ color: "#1DA1F2" }} /></a>
                <a className="contact-link" href="mailto:mydearestjulia@outlook.com" ><MdOutlineEmail style={{ color: "var(--color-text-red)" }} /></a>
            </div>
        </div>

        <hr></hr>

        <div className='mydearest__footer-below'>
            <div className="mydearest__footer-below-copyright">
                <p>@{new Date().getFullYear()} MyDearestJulia  |  All rights reserved.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer