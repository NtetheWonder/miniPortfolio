import {Link} from 'react-router-dom';

function Navbar(){
    return(
        
        <nav className="navbar  navbar-expand-lg navbar-dark bg-black">
        
        <div className ="container"> 
        <Link to='/' className ="logo">NS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
        </button>
        
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
                < Link className="nav-link" to="/home">Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
                <Link className="nav-link" to="/Achievements">Certificates</Link>
        </li>
        <li className="nav-item">
                < Link className="nav-link" to="/education">Education</Link>
        </li>
        <li className="nav-item">
            < Link href="/contact" className="nav-link" to="/contact">Contacts</Link>
        </li>   
        </ul>
        </div>
        </div>
    
    </nav>
   
    )
}

export default Navbar