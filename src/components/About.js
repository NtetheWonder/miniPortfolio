import './portfolio.css';
const About = () =>{

    return(
       <section className="about section">
       <div className="container">
         <div className="section-header">
           <h3 className="title" data-title="Who Am I">About me</h3>
         </div>

         <div className="section-body grid-2">
           <div className="column-1">
             <h3 className="title-sm">Hi, I'm Ntethelelo Shabalala </h3>
             <p className="text">
                I grew up in Estcourt. I completed
                my matric in 2017 at Bhekathina High School where I was one of the top achievers in the school.
                Then I moved to Durban where I took on BSc. Computer Science and IT at the university of KwaZulu-Natal.
                I chose Computer Science as it strongly complements my interest and pasion.
                I have a strong interest in technology and enjoy solving problems primiraly through coding.
               </p>
               <p className="text">
                 Date of birth : 27 March 1999
               </p>
               <p className="text">
                 Date of birth : 27 March 1999
               </p>
               <p className="text">
                 Date of birth : 27 March 1999
               </p>
               <p className="text">
                 Date of birth : 27 March 1999
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
                  <h5 class="skill-title">HTML, CSS $ JS</h5>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
             
               
                
              </div>
              <a href="https://www.linkedin.com/in/ntethewonder/" target="_blank" class="btn">My Linkedin </a>

              <p></p>
           </div>

           <div className="column-2 ">
           <h3 className="title-sm">Summary</h3>
           
              <p className="text">
                The skills and qualities I possess include the ability to work as part 
                of a team and on my own, the ability to focus on building positive relationships with other team 
                members/colleagues, customers and clients. A hard-working attitude that wants to complete tasks
                to a high standard; and the desire to continually learn and develop by listening to and applying 
                the knowledge others are willing to pass to me.

             </p>

        
             <p className="text">
              I am someone who is ambitious; I don't like to sit back and do the bare minimum, and I feel
              confident that anyone I work with will be impressed with my work values, ethics and high standards.
             </p>
             
              
             

             
           </div>
           
         </div>
       </div>
     </section>
    )
}

export default About