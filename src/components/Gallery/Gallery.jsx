import './Gallery.css'

import {Link, Route,Routes,useLocation} from 'react-router-dom'

import Agbada from './Agbada/Agbada'
import Shirt from './Shirt/Shirt'
import Suit from './Suit/Suit'
import { useState } from 'react'
import Traditional from './Traditional/Traditional'

import {AnimatePresence} from "framer-motion"


function Gallery() {

const location = useLocation()
  const [activeNav , setActiveNav]= useState('/b')

  return (
 
    <section id='gallery'>
        <div className="conatiner gallery-conatiner">

            <div className='gallery-heading'>
                <h1>Gallery</h1>
                 <h5>Here is our gallery, explore some of our amazing outfits</h5>

            </div>
<div className="nav">
<ul>
  <li  onClick={()=>setActiveNav('/')}
     className={activeNav === '/' ? 'active' : ''}><Link  to='/'>Traditional</Link></li>


  <li  onClick={()=>setActiveNav('/a')}
     className={activeNav === '/a' ? 'active' : ''}><Link to='/a'>Agbada</Link></li>



  <li  onClick={()=>setActiveNav('/d')}
     className={activeNav === '/d' ? 'active' : ''}><Link to='/d'>Suit</Link></li>



  <li  onClick={()=>setActiveNav('/c')}
     className={activeNav === '/c' ? 'active' : ''}><Link to='/c'>Shirt</Link></li>



</ul>

</div>
<AnimatePresence>
<Routes location={location} key={location.pathname}> 
  <Route path='/a' element={<Agbada/>}/>
  <Route path='/' element={<Traditional/>}/>
  <Route path='/c' element={<Shirt/>}/>
  <Route path='/d' element={<Suit/>}/>
  
   </Routes> 
   </AnimatePresence>

        </div>
        </section>
      
    
  )
}

export default Gallery