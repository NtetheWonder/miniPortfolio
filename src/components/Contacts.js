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
              <div className="section-body">
              <div className="column-1">
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

            <div className="column-2">
              <h3 className="title">Contact me</h3>
              <div className="row">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Last Name"
                />
              </div>

              <div className="row">
                <input type="text" className="contact-input" placeholder="Phone" />
                <input type="email" className="contact-input" placeholder="Email" />
              </div>

              <div className="row">
                <textarea
                  name="message"
                  className="contact-input textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <a href="#" className="btn">Send</a>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
}
export default Contacts