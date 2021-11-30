const Header = () =>{

    return(
            <div className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Ntethelelo Shabalala</h1>
              <p className="text">
              Hello, I'm Ntethelelo Shabalala, I want to work in software development and would like to
               gain experience that is not restricted to the field.
                I chose Computer Science as it strongly complements my interest and pasion.
                I have a strong interest in technology and enjoy solving problems primiraly through coding.
                </p>
                <p className="text">
                I am a hardworking, driven, technically savvy individual who will collaborate closely with others 
                within the organization to develop innovative software. 
    
              </p>
              <a href="#" className="btn">Download CV</a>
             
            </div>
                
            <div className="column-2 image">
            
              <img src="./assets/img/blend.jpg" className="img-element z-index" alt="" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        
    )
}

export default Header