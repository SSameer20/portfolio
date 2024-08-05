import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../style/navigation.css";
import { IoMdHome, IoMdPerson, IoMdContact } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { FaAward, FaBriefcase } from "react-icons/fa";


export default function Navigation() {

  return (
    <nav className='navigation' style={{position : 'fixed', right : '10px',top : '25%'}}>
      <ul>
        <li className='nav-icon'>
          <Link to="/"><IoMdHome 
          color='white'
          fontSize='xx-large'
          style={{ transition: 'color 0.8s', cursor: 'pointer' }}
          /></Link>
          <span >Home</span>
        </li>

        <li >
          <Link to="/project">
            <FaBriefcase
              color='white'
              fontSize='xx-large'
              className='nav-icon'
              style={{ transition: 'color 0.8s', cursor: 'pointer' }}
             /></Link>
        </li>

       

        <li >
          <Link to="/education">
            <FaBook
              color='white'
              fontSize='xx-large'
              className='nav-icon'
              style={{ transition: 'color 0.8s', cursor: 'pointer' }}
            /></Link>
        </li>

        <li >
          <Link to="/achievements">
            <FaAward
              color='white'
              fontSize='xx-large'
              className='nav-icon'
              style={{ transition: 'color 0.8s', cursor: 'pointer' }}
              /></Link>
        </li>
        <li >
          <Link to="/about">
            <IoMdPerson
              color='white'
              fontSize='xx-large'
              className='nav-icon'
              style={{ transition: 'color 0.8s', cursor: 'pointer' }}
               /></Link>
        </li>

        

        <li >
          <Link to="/contact">
          <TiContacts
              color='white'
              fontSize='xx-large'
              className='nav-icon'
              style={{ transition: 'color 0.8s', cursor: 'pointer' }}
             /></Link>
             
        </li>
      </ul>
    </nav>
  )
}
