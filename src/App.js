import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Header from "./components/Home";
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Navbar/>
    
   <Header/>
   <About/>
   
   <Portfolio/>
   <Education/>
   <Contacts/>
   <Footer/>

  </>
  );
}

export default App;
