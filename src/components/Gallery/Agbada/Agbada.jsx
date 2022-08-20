import './Agbada.css'


import aga1 from './../../../images/Agada/aga1.png'
import aga2 from './../../../images/Agada/aga2.png'
import aga3 from './../../../images/Agada/aga3.png'
import aga4 from './../../../images/Agada/agada.png'



const data =[
  {
    id: 1,
    image: aga1,
    title: 'Simple Calculator',

  },
  {
    id: 2,
    image: aga2,
    title: 'Challenge From Frontend Mentor ',
  },
  {
    id: 3,
    image: aga3,
  },
  {
    id: 4,
    image: aga4,
  },

  
  

  ]
  





function Agbada() {
  return (
    <div className='agbada-conatiner'>

{


data.map(({id, image, title, github ,demo})=>{
return(
 
  <div key={id}className="agbada-card">

  <img src={image} alt="" />
</div>



)

})
} 
</div>
  )
}

export default Agbada