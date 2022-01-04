function Header(){

    return(
            <section className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Ntethelelo Shabalala</h1>
              <p className="text">
              I want to be a software developer simply because it is a role that I am extremely passionate about, 
              and also one I get immense job satisfaction, especially when I get to see first-hand the positive contribution my work makes to the organization I am  working on.
             
                </p>
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