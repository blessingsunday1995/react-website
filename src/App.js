import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Landing_Page/LandingPage";
import About_Page from "./components/About/AboutPage";
import Service from "./components/Service/Service";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <LandingPage/>
     <About_Page/>
     <Service/>
     
    </div>
  );
}

export default App;
