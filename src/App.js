import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Header from "./components/Home";
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Switch>
      <Route path="/" exact component ={Header}/>
      <Route path="/home" component ={Header}/>
      <Route path="/about" component={About}/>  
      <Route path ="/contact" component={Contacts}/>
      <Route path ="/portfolio" component={Portfolio}/>
      <Route path ="/education" component= {Education}/>
      <Route path ="/Achievements" component= {Certificates}/>
       
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
