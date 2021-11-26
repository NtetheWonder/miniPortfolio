import './portfolio.css';

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
              Science related role, and thank you for reading this far.
            </p>
          </div>
          
         
        </div>


          <div className="followme-wrap">
            <div className="followme">
              <h3>Connect with me</h3>
              <span className="footer-line"></span>
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
            </div>
          </div>
          </div>
        
    </footer>

    )
}

export default Footer