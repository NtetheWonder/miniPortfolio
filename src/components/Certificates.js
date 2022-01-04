import React from 'react'
import {Link} from 'react-router-dom';

function Certificates() {
    return (
        <section className="collection section" id="Achievements">
        <div className="container-port">
          <div className="section-header">
            <h3 className="title" data-title="My Collection">Hackerrank Certificates</h3>
            <h4 className="text">
              Profile : https://www.hackerrank.com/ntethewonder
            </h4>
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
                  <img src="../assets/img/javaHackerrank.png" className="icon"  />
                  <h3 className="title-sm">Java</h3>
                  <p className="text">
                   java basic certificate.
                  </p>
                  <Link to="https://www.hackerrank.com/certificates/329cd78f1727" target="_blank" >See credentials</Link>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/SQL.png" className="icon"  />
                  <h3 className="title-sm">SQL</h3>
                  <p className="text">
                   SQL Basic certificate.
                  </p>
                  <Link to="https://www.hackerrank.com/certificates/8a1b828c09d4" target="_blank" >See credentials</Link>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/pythonHackerrank.png" className="icon"   />
                  <h3 className="title-sm">Python</h3>
                  <p className="text">
                   Python basic certificate.
                  </p>
                  <Link to="https://www.hackerrank.com/certificates/0de52381993c" target="_blank" >See credentials</Link>
                </div>
              </div>
             
            
            </div>
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
                  <img src="../assets/img/javaHackerrank.png" className="icon"  />
                  <h3 className="title-sm">Java</h3>
                  <p className="text">
                   java basic certificate.
                  </p>
                  <Link to="https://www.hackerrank.com/certificates/329cd78f1727" target="_blank" >See credentials</Link>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/SQL.png" className="icon"  />
                  <h3 className="title-sm">Problem Solving</h3>
                  <p className="text">
                   SQL Basic certificate.
                  </p>
                  <Link to="https://www.hackerrank.com/certificates/8a1b828c09d4" target="_blank" >See credentials</Link>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              
              <div className="card" data-card="">
                <div className="card-content z-index">
                  <img src="../assets/img/pythonHackerrank.png" className="icon"   />
                  <h3 className="title-sm">Python Basic</h3>
                  <p className="text">
                   Python basic certificate.
                  </p>
                  <Link to="https://www.hackerrank.com/certificates/0de52381993c" target="_blank" >See credentials</Link>
                </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </section>
    )
}

export default Certificates
