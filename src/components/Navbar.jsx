import React from 'react';
import {BsCart3} from 'react-icons/bs';
import {BsPersonPlusFill} from 'react-icons/bs';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  
  const state = useSelector((state) => state.handleCart)
  const [Mobile, setMobile] = useState(false)
  return (
    <div className='nav-container'>
       
            <nav>
                    <h1 className="logo">Organic Couture</h1>
                <div className={Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                     <Link to="/home" className="navbar-item"><li>Home</li></Link>   
                     <Link to="/products" className="navbar-item"><li>Products</li></Link>   
                     <Link to="/about" className="navbar-item"><li>About</li></Link>   
                   <Link to="/contact" className="navbar-item"><li>Contact</li></Link>    
                </div>
                        <div className="nav-menu-link">
                        <Link to="/login" className="nav-menu-link__login"><BsPersonPlusFill/></Link>
                        <Link to="/cart" className="nav-menu-link__cart">
                          <span className="material-icons"><BsCart3/></span>
                          <span className="icon-button__badge">{state.length}</span>
                        </Link>
                        </div>
                        <button className="mobile-menu-icons" onClick={() => setMobile(!Mobile)}>
                          {Mobile? <FaTimes/> : <FaBars/>}
                        </button>
                       </nav>
    </div>
  )
}

export default Navbar