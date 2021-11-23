import React from 'react'

const Navbar =() =>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
        <div className ="container"> 
        <a className="navbar-brand" href="#" className ="logo">NS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#home">Home </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact">Contacts</a>
        </li>   
        </ul>
        </div>
        </div>
    
    </nav>
   
    )
}

export default Navbar