import React from 'react'

function Certificates() {
    return (
        <section className="collection section" id="Achievements">
        <div className="container-port">
          <div className="section-header">
            <h3 className="title" data-title="My Collection">Certificates</h3>
            <p className="text">
              My collection so far.
            </p>
          </div>

          <div className="cards">
            <div className="card-wrap">
              <img
                src="./img/shapes/points3.png"
                className="points points1 points-sq"
                alt=""
              />
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/java.png" className="icon" alt="" />
                  <h3 className="title-sm">Java</h3>
                  <p className="text">
                    Hackerrank java basic certificate.
                  </p>
                  <a href="" target="_blank" className="btn small">See credentials</a>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/javascript.png" className="icon" alt="" />
                  <h3 className="title-sm">JavaScript</h3>
                  <p className="text">
                    Hackerrank JavaScript basic certificate.
                  </p>
                  <a href="" target="_blank" className="btn small">See credentials</a>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/python.jpg" className="icon" alt=""  />
                  <h3 className="title-sm">Python</h3>
                  <p className="text">
                  Hackerrank Python basic certificate.
                  </p>
                  <a href="" target="_blank" className="btn small">See credentials</a>
                </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </section>
    )
}

export default Certificates
