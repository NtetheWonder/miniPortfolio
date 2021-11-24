const Portfolio =() => {
    return(
        <div>
            <section class="services section" id="services">
        <div class="container">
          <div class="section-header">
            <h3 class="title" data-title="What I Do">Projects</h3>
            <p class="text">
              Programming languages I am proficient on:
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
                  <h3 class="title-sm">Java</h3>
                  <p class="text">
                    The main language of which I did most of acadermic work in, 
                    from 1st year to third year.
                  </p>
                  <a href="#" class="btn small">Read more</a>
                </div>
              </div>
            </div>

            <div class="card-wrap">
              <div class="card" data-card="Code">
                <div class="card-content z-index">
                  <img src="./img/python.jpg" class="icon" alt="" />
                  <h3 class="title-sm">Python</h3>
                  <p class="text">
                    The first language I ever learned, which got me more interested 
                    and in love with programming.
                  </p>
                  <a href="#" class="btn small">Read more</a>
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
                  <img src="./img/html.png" class="icon" alt="" />
                  <h3 class="title-sm">HTMl</h3>
                  <p class="text">
                   The foundation and probably the most important of all web deveopment,
                   first learned it back as a freshman in university in 2018.
                  </p>
                  <a href="#" class="btn small">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        </div>
    )
}
export default Portfolio