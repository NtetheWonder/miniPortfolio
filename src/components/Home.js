const Header = () =>{

    return(
            <div className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Ntethelelo Shabalala</h1>
              <p className="text">
                Hello, I'm Ntethelelo Shabalala, software developer.
                I chose Computer Science as it strongly complements my interest and pasion.
                I have a strong interest in technology and solving problems primiraly through coding.
                I am hardworking, driven, technically astute and someone who will work closely with people within
                the organization to achieve your  innovative software, technological development, solutions and services goals. 
    
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