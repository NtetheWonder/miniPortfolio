import './portfolio.css';

const Footer =() => {
    return(

      <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <div className="grid-4-col footer-about">
            <h3 className="title-sm">About</h3>
            <p className="text">
              I created this website using React.js, CSS and some bootstrap for the navigation bar.
            </p>
          </div>
          
         
        </div>
          <div className="followme-wrap">
            <div className="followme">
              <h3>Connect</h3>
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