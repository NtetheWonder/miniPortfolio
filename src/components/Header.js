const Header = () =>{

    return(
        <div>
            <div className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Ntethelelo Shabalala</h1>
              <p className="text">
                Hello, I'm Ntethelelo Shabalala, software developer and also a web developer. 
    
              </p>
              <a href="#" className="btn">Download CV</a>
            </div>

            <div className="column-2 image">
            
              <img src="./assets/img/blend.jpg" className="img-element z-index" alt="" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Header