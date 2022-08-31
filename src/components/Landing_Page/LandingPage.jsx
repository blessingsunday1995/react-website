import React from 'react'
import './LandingPage.css'
import Lad from '../../images/lading2-PhotoRoom (1).png'

function LandingPage() {
  return (
    <section id='home'>
    <div className='conatiner landing-conatiner'>

<div className='landing-text'>
          <h3>Welcome to H-Code CLOTHINGS</h3>
<h5>Dwelling Place of Extra-ordinary Wears</h5>
          <a href='#contact' className='btn landing-btn'>Get in Touch</a>
</div>

<div className='landing-img'>
<img src={Lad}/>

</div>

    </div>

    </section>
  )
}

export default LandingPage