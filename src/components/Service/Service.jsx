import './Service.css'
import Tra from '../../images/tradi.png'
import agaba from './../../images/agada.png'
import suit from './../../images/siut.png'
import shirt from './../../images/shirt.png'

function Service() {
  return (
    <section id='service'>
      <div className='conatiner srvices-conatiner'>

     <div className='service-heading'>
<h1>Our Services</h1>    
    <h4>We provide you with superb wears such as</h4>
      </div>
   
<div className='srvices-contect-conatiner'>
  
<div className="card">
  <h3>Traditional Wear</h3>
  <img src={Tra} alt="" />
</div>

<div className="card">
  <h3>Agbada</h3>
  <img src={agaba} alt="" />
</div>

<div className="card">
  <h3>Suit</h3>
  <img src={suit} alt="" />
</div>
    

<div className="card">
  <h3>Shirt</h3>
  <img src={shirt} alt="" />
</div>
    
    
    </div>      

     </div>
        </section>
  )
}

export default Service