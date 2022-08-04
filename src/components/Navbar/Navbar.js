import './Navbar.css'
import React, {useState} from "react";
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

function Navbar() {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (

    <nav className={toggle?'navbar expanded':'navbar'}>
    <h2 className='logo'>dolla</h2>
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



  
  )
}

export default Navbar