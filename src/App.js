import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import About from './components/About';
import Header from "./components/Home";
import Education from './components/Education';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Navbar/>
   <Header/>
   <About/>
   <Education/>
   <Contacts/>
   <Portfolio/>
   <Footer/>
   </>
 
  );
}

export default App;
