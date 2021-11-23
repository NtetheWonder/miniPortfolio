import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import About from './components/About';
import Header from "./components/Home";
import Education from './components/Education';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
    <Navbar/>
   <Header/>
   <About/>
   <Education/>
   <Contacts/>
   
   </>
 
  );
}

export default App;
