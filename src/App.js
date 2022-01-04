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

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route path="/" exact>
        <Header/>
        <Footer/>
      </Route>
      <Route path="/home">
        <Header/>
        <Footer/>
      </Route>
      <Route path="/about">
        <About/>
        <Footer/>
      </Route>
      <Route path ="/contact">
        <Contacts/>
        <Footer/>
      </Route>
      <Route path ="/portfolio">
        <Portfolio/>
        <Footer/>
      </Route>
      <Route path ="/education">
        <Education/>
        <Footer/>
      </Route>
      
      </Switch>
      
    </div>
  );
}

export default App;
