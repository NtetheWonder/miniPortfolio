function Header(){

    return(
            <section className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Ntethelelo Shabalala</h1>
              
            
              <div className="social-media">
                <a href="https://www.facebook.com/ntethelelo.shabalala.98/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://github.com/NtetheWonder" target= "_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/ntethewonder9/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ntethewonder/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              
                <p className="text">
                I am a hardworking, driven, technically savvy individual who will collaborate closely with others 
                within the organization to develop innovative software. 
    
              </p>
              <a href="Shabalala Ntethelelo.pdf" download= "Shabalala Ntethelelo.pdf" className="btn">Get Resume</a>
             
            </div>
                
            <div className="column-2 image">
            
              <img src="./assets/img/blend.jpg" className="img-element z-index" alt="" height="100%" width="100%"/>
            </div>
          </div>
        </section>
        
    )
}

export default Header