import React, { useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { navItems } from './data/NavItems'
import '../../src/styles/css/NavMenu.css'

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  
     return (
      <>
        <nav className='navbar' >
        <div onClick={handleClick} className="nav-icon">
          {open ?  <FiX /> : <FiMenu />}
        </div>
        <ul className={open ? 'nav-links active' : 'nav-links'} onClick={closeMenu}>
          {navItems.map(({id,path,title,cName,icon})=>{
            return(
              <li className="nav-item" key={id} onClick={closeMenu}>
                <Link to={path} className={cName} onClick={closeMenu}>
                  <i>{icon}</i>{title}
                </Link>
              </li>
            )
          })} 
        </ul>
      </nav>
      </>
    )   
}

export default Navigation
