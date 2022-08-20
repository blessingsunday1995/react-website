import './Shirt.css'

import sh1 from './../../../images/Shirt/sh1.png'
import sh2 from './../../../images/Shirt/sh2.png'
import sh3 from './../../../images/Shirt/shirt.png'




const data =[
  {
    id: 1,
    image: sh1,
    title: 'Simple Calculator',

  },
  {
    id: 2,
    image: sh2,
    title: 'Challenge From Frontend Mentor ',
  },
  {
    id: 3,
    image: sh3,
  },
 

  
  

  ]
  





function Shirt() {
  return (
    <div className='shirt-conatiner'>

    {
    
    
    data.map(({id, image, title, github ,demo})=>{
    return(
     
      <div key={id}className="shirt-card">
    
      <img src={image} alt="" />
    </div>
    
    
    
    )
    
    })
    } 
    </div>
  )
}

export default Shirt