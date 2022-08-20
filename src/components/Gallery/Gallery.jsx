import './Gallery.css'

import {Link, Route,Routes} from 'react-router-dom'

import Agbada from './Agbada/Agbada'
import Shirt from './Shirt/Shirt'
import Suit from './Suit/Suit'
import { useState } from 'react'
import Traditional from './Traditional/Traditional'

function Gallery() {

  const [activeNav , setActiveNav]= useState('/b')

  return (
 
    <section id='gallery'>
        <div className="conatiner">

            <div className='gallery-heading'>
                <h1>Gallery</h1>
                 <h5>Non hic nulla eum consequatur maxime ut vero memo vero totam officiis pariatur
                     eos dolorum sed fug dolorem est possimus esse quae repudiandae. Dolorem
                     id enim officiis sunt deserunt esse soluta consequatur quaerat</h5>

            </div>
<div className="nav">
<ul>
  <li  onClick={()=>setActiveNav('/b')}
     className={activeNav === '/b' ? 'active' : ''}><Link  to='/b'>Traditional</Link></li>


  <li  onClick={()=>setActiveNav('/a')}
     className={activeNav === '/a' ? 'active' : ''}><Link to='/a'>Agbada</Link></li>



  <li  onClick={()=>setActiveNav('/d')}
     className={activeNav === '/d' ? 'active' : ''}><Link to='/d'>Suit</Link></li>



  <li  onClick={()=>setActiveNav('/c')}
     className={activeNav === '/c' ? 'active' : ''}><Link to='/c'>Shirt</Link></li>



</ul>

</div>
<Routes> 
  <Route path='/a' element={<Agbada/>}/>
  <Route path='/b' element={<Traditional/>}/>
  <Route path='/c' element={<Shirt/>}/>
  <Route path='/d' element={<Suit/>}/>
  
   </Routes>

        </div>
        </section>
      
    
  )
}

export default Gallery