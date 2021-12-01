import React from 'react'

function Certificates() {
    return (
        <section class="collection section" id="Achievements">
        <div class="container-port">
          <div class="section-header">
            <h3 class="title" data-title="My Collection">Certificates</h3>
            <p class="text">
              My collection so far.
            </p>
          </div>

          <div class="cards">
            <div class="card-wrap">
              <img
                src="./img/shapes/points3.png"
                class="points points1 points-sq"
                alt=""
              />
              <div class="card" data-card="UI/UX">
                <div class="card-content z-index">
                  <img src="./img/java.png" class="icon" alt="" />
                  <h3 class="title-sm">Pet sitter app</h3>
                  <p class="text">
                    Redesigning the pet sitter application.
                  </p>
                  <a href="" class="btn small">Read more</a>
                </div>
              </div>
            </div>

            <div class="card-wrap">
              <div class="card" data-card="Code">
                <div class="card-content z-index">
                  <img src="./img/python.jpg" class="icon" alt="" />
                  <h3 class="title-sm">Maze Application</h3>
                  <p class="text">
                    This is a java Gui application to finding the shortest through a maze.
                  </p>
                  <a href="" class="btn small">Read more</a>
                </div>
              </div>
            </div>

            <div class="card-wrap">
              <img
                src="./img/css.png"
                class="points points2 points-sq"
                alt=""
              />
              <div class="card" data-card="App">
                <div class="card-content z-index">
                  <img src="" class="icon" alt=""  />
                  <h3 class="title-sm">Fitness Quiz </h3>
                  <p class="text">
                   This is a quiz application about healthy living lifestyle practise developed using C++
                  </p>
                  <a href="" class="btn small">Read more</a>
                </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </section>
    )
}

export default Certificates
