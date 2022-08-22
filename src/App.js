import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Landing_Page/LandingPage";
import AboutPage from "./components/About/AboutPage";
import Service from "./components/Service/Service";
import Gallery from "./components/Gallery/Gallery";
import Contact from './components/contact/Contect'



function App() {
  return (

  
     <div className="App">
          
      
     <Navbar/>
     <LandingPage/>
     <AboutPage/>
     <Service/>
<Gallery/>
<Contact/>

     
    </div> 
  
  
  );
}

export default App;
