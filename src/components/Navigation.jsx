import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import "../style/navigation.css";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize(); // Call once to set initial state

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='navigation' style={open ? {flexDirection : "row", justifyContent:"end"} : {flexDirection: "column", justifyContent:"end"}}>
     {isMobile ?  <p id='menu' onClick={()=>{setOpen(!open);}} style={{backgroundColor : 'transparent'}}>{ open === true ? <IoMenu  color='white'/> : <IoClose  color='white'/>}</p>
       : (<ul>
        <li onClick={()=>{setOpen(!open);}}>
          <Link to="/">HOME</Link>
        </li>

        <li onClick={()=>{setOpen(!open);}}>
        <Link to="/about">ABOUT</Link>
        </li>

        <li onClick={()=>{setOpen(!open);}}>
        <Link to="/education">EDUCATION</Link>
        </li>

        <li onClick={()=>{setOpen(!open);}}>
        <Link to="/achievements">ACHIEVEMENTS</Link>
        </li>

        <li onClick={()=>{setOpen(!open);}}>
        <Link to="/project">PROJECTS</Link>
        </li>
      </ul>) }
    </nav>
  )
}
