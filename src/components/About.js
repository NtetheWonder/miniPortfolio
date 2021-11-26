import './portfolio.css';
const About = () =>{

    return(
       <section className="about section" id="about">
       <div className="container">
         <div className="section-header">
           <h3 className="title" data-title="Who Am I">About me</h3>
         </div>

         <div className="section-body grid-2">
           <div className="column-1">
             <h3 className="title-sm">Hi, my name is Ntethelelo Shabalala </h3>
             <p className="text">
              I want to work in software development and would like to
               gain experience that is not restricted to the field.
                I chose Computer Science as it strongly complements my interest and pasion.
                I have a strong interest in technology and enjoy solving problems primiraly through coding.
               </p>
               <p className="text"> 
                If you pick me as part the SovTech graduate team, I will not only work hard to deliver consistent positive
               result, but I will use my developing, researching, analytical and technical skills to help the company to 
               continually thrive and develop.
             </p>
             <h4 className="title-sm">Skills highlight:</h4>
             <div class="skills">
                <div class="skill java">
                  <h5 class="skill-title">Java</h5>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="90%"></div>
                  </div>
                </div>
                <div class="skill python">
                  <h5 class="skill-title">Python</h5>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="70%"></div>
                  </div>
                </div>
                <div class="skill html">
                  <h5 class="skill-title">HTML</h5>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
             
                <div class="skill css">
                  <h5 class="skill-title">CSS</h5>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="70%"></div>
                  </div>
                </div>
                <div class="skill js">
                  <h5 class="skill-title">Javascript</h5>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
              </div>
              
              <a href="#" class="btn">Read more</a>
           </div>

           <div className="column-2 ">
           <h3 className="title-sm">Why SovTech!</h3>
             <p className="text">
              For me, the company I work for is very important.I believe that, to be able to perform your duties and responsibilies
              as a software developer competently, you need the support of your employer, and also need to work with like minded people
              who are all working towards a common goal.
              </p>
              <p className="text">
              SovTech is known for it strong culture and strong belief in technology. You guys are not only a leader in the industry,
              but you continually look for ways to grow and develop.
              You clearly hire the best people in the business, which means I can get to learn from and grow alongside strong professionals who clearly cares and love their
              jobs.
             </p>

        
             <p className="text">
              I am someone who is ambitious; I don't like to sit back and do the bare minimum, and if you take a chance on me, I feel
              confident you will be impressed with my work values, ethics and high standards.
             </p>
             
              
              <a href="https://www.linkedin.com/in/ntethewonder/" target="_blank" class="btn">My Linkedin <img src = "./img/linkedin.png"/></a>

             
           </div>
           
         </div>
       </div>
     </section>
    )
}

export default About