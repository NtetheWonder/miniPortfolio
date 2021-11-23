const Footer =() => {
    return(

        <footer className="footer">
        <div className="container">
          <div className="grid-4">
            <div className="grid-4-col footer-about">
              <h3 className="title-sm">About</h3>
              <p className="text">
                I am currently doing my final year in Computer Science at 
                university of KwaZulu-Natal. I'm more interested in software development or any Computer
                Science related role, And thank you for reading this far.
              </p>
            </div>
            
            <div className="grid-4-col footer-newstletter">
              <h3 className="title-sm"/>
              <p className="text">
              </p>
              <div className="footer-input-wrap">
                <input type="email" className="footer-input" />
                
              </div>
            </div>
          </div>
  
  
            <div className="followme-wrap">
              <div className="followme">
                <h3>Connect with me</h3>
                <span className="footer-line"></span>
                <div className="social-media">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
  
    
            </div>
            </div>

      </footer>
    )
}

export default Footer