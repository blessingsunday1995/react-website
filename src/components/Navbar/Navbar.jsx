import './Navbar.css'
import React, {useState} from "react";
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import {twitter} from 'react-icons-kit/fa/twitter'
import logo from '../../images/hcode-logo.png'
import {facebook} from 'react-icons-kit/fa/facebook'
import {instagram} from 'react-icons-kit/icomoon/instagram'

function Navbar() {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
<div className='conatiner'>
    <div className=' conatiner-nav '>
    <nav className={toggle?'navbar expanded':'navbar'}>
   <a href='#home'><img src={logo} className='logo'/></a>
    <div className='toggle-icon' onClick={handleToggle}>
      {toggle?<Icon icon={x} size={50}/>:<Icon icon={menu} size={50}/>}
    </div>
    <ul className='links'>
            <li onClick={handleToggle}>  <a href="#">Home</a></li>
            <li onClick={handleToggle}>  <a href="#about">About</a></li>
            <li onClick={handleToggle}> <a href="#service">Services</a></li>
            <li onClick={handleToggle}>  <a href="#gallery">Gallery</a></li>
            <li onClick={handleToggle}>  <a href="#">Contact</a></li>
     
   
    </ul>
    
      <ul className='links social-nav'>
     <li><a> <Icon icon={twitter} size={28}/></a></li>
    <li> <a><Icon icon={facebook} size={28}/></a> </li>
     <li> <a><Icon icon={instagram} size={28}/></a></li>
      </ul>
      
</nav>

</div>
</div>
  
  )
}

export default Navbar