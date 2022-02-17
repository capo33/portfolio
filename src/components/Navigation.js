import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { navItems } from './data/NavItems'

import {RiMenu3Line } from 'react-icons/ri'
import { FiX } from 'react-icons/fi'

import '../../src/styles/css/NavMenu.css'

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("nav_menu");
  const [bc, setBc] = useState("");
 
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active") &&  setBc('#222831')
      : setActive("nav_menu") &&  setBc('#393E46');
      // toggleIcon
      setOpen(!open);
  };

  const changeBackground = () => {
    if(window.scrollY >= 80){
       setBc('#393E46')
    }else{
      setBc('#222831')
    }
  }

  window.addEventListener('scroll', changeBackground)

  // const bc = {
  //   one: '#393E46',
  //   two: '#222831'
  // }
     return (
      <div className='nav'  style={{backgroundColor:bc}}>
      <Link to="/" className="logo">
        Capo
      </Link>
     
      <ul className={active} onClick={navToggle} > 
      {navItems.map(({id,path,title,cName})=>{
            return(

              <li className="nav_item" key={id}>
                <Link to={path} className={cName} >
                 {title}
                </Link>
              </li>
            )
          })} 
        
      </ul>
      <div onClick={navToggle} className="nav-icon" >
          {open ?  <FiX />: <RiMenu3Line />}
        </div>
    </div>
     )
     
}

export default Navigation


