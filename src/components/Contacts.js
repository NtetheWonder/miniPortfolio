import './portfolio.css';

const Contacts =() => {
    return(
      <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="title">Get in touch</h3>
            <p className="text">
              Please feel free to reach out to me, I would appriciate to hear any feeback,suggestion
              or anything you have to say. I would be happy to engage with you.
            </p>
            <div className="information-wrap">
              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="info-text">120 O'flaherty Road, Durban, 4091</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <p className="info-text">ntethewonder@gmail.com</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <p className="info-text">+27 797 502 592</p>
              </div>
            </div>
          </div>

          <form className="contact-form" action="https://formsubmit.co/ntethewonder@gmail.com" method="POST">
            <h3 className="title">Contact me</h3>
            
            <div className="row">
              <input type="text" className="contact-input"  name="first-name" placeholder="First Name" required
              />
              <input type="text" className="contact-input"  name="last-name" placeholder="Last Name" required/>
            </div>

            <div className="row">
              <input type="text" className="contact-input" placeholder="Phone" />
              <input type="email" className="contact-input" name='email' placeholder="Email address" required />
            </div>

            <div className="row">
              <input type="text" name="message" className="contact-input textarea" placeholder="Enter message here" required/>
            </div>
            <button type="submit" className="btn">Send</button>
            </form>
          </div>
          
        </div>
      
    </section>
    )
}
export default Contacts