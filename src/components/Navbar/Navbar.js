import './Navbar.css'
import React, {useState} from "react";
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import logo from '../../images/hcode-logo.png'

function Navbar() {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (

    <div className='conatiner'>
    <nav className={toggle?'navbar expanded':'navbar'}>
   <a href='#home'><img src={logo} className='logo'/></a>
    <div className='toggle-icon' onClick={handleToggle}>
      {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
    </div>
    <ul className='links'>
      <li>  <a href="#">Home</a></li>
      <li>  <a href="#">About</a></li>
      <li> <a href="#"> <a href="#">Services</a></a></li>
      <li>  <a href="#">Contact</a></li>
      <li>  <a href="#">Sign Up</a></li>
    </ul>
</nav>

</div>

  
  )
}

export default Navbar