import './Traditional.css'
import tr1 from './../../../images/Traditional/tra1.png'
import tr2 from './../../../images/Traditional/tra2.png'
import tr3 from './../../../images/Traditional/tra3.png'
import tr4 from './../../../images/Traditional/tradi.png'



const data =[
  {
    id: 1,
    image: tr1,
    title: 'Simple Calculator',
    github: 'https://github.com/blessingsunday1995/Simple_Calculator',
    demo: 'https://simple-calculator-2df23.netlify.app'
  },
  {
    id: 2,
    image: tr2,
    title: 'Challenge From Frontend Mentor ',
    github: 'https://github.com/blessingsunday1995/MyFristChalleng',
    demo: 'https://challenge323.netlify.app/'
  },
  {
    id: 3,
    image: tr3,
    title: 'Simple Cloud Hosting Platform',
    github: 'https://github.com/blessingsunday1995/web_pratice',
    demo: 'https://matrix1099.netlify.app'
  },
  {
    id: 4,
    image: tr4,
    title: 'Simple Tasks Tracker',
    github: 'https://github.com/blessingsunday1995/Simple_Task_Tracker',
    demo: 'https://tasktracker23.netlify.app'
  },

  ]
  



function Traditional() {
  return (
    <div className='traditional-conatiner'>

{


data.map(({id, image, title, github ,demo})=>{
return(
 
  <div key={id}>
<div  className="card1">
  <img src={image} alt="" />
</div>

</div>

)

})
} 
</div>
  )

}

 
  


export default Traditional