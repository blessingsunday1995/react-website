import React from 'react'
import './LandingPage.css'
import Lad from '../../images/lading2-PhotoRoom (1).png'

function LandingPage() {
  return (
    <section id='home'>
    <div className='conatiner landing-conatiner'>

<div className='landing-text'>
<h2>Build Your Landing Page with Bootstlander</h2>
<h5>We are team of telened designers making website with bootstrap</h5>
<a href='#' className='btn landing-btn'>Get Started</a>
</div>

<div className='landing-img'>
<img src={Lad}/>

</div>

    </div>

    </section>
  )
}

export default LandingPage