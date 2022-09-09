import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer-content">
                <h3>Organic Couture</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quos itaque aperiam amet veniam facere similique dolores ex nam sed.</p>
                <ul className='socials'>
                    <li><a href="#"><BsFacebook/></a></li>
                    <li><a href=""><BsTwitter/></a></li>
                    <li><a href="https://www.linkedin.com/in/faith-oluwibe/"><BsLinkedin/></a></li>
                    <li><a href="#"><BsYoutube/></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2022 organicCouture. designed by <span>Olubebe</span></p>
            </div>
        </footer>
    </div>
  )
}

export default Footer