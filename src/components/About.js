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
                I grew up in Estcourt . I completed
                my matric in 2017 at Bhekathina High School where I was one of the top achievers in the school.
                Then I moved to Durban where I took on BSc. Computer Science and IT at the university of KwaZulu-Natal.
                I chose Computer Science as it strongly complements my interest and pasion.
                I have a strong interest in technology and enjoy solving problems primiraly through coding.
               </p>
               <p className="text">
                 First Names : Ntethelelo Wonder-boy
               </p>
               <p className="text">
                 Surname : Shabalala
               </p>
               <p className="text">
                 Date of birth : 27 March 1999
               </p>
               <p className="text">
                 Gender : male
               </p>
               <p className="text">
                 From : Estcourt
               </p>
               <p className="text">
                 Languages : IsiZulu(Home), English
               </p>
                
             
              <a href="https://www.linkedin.com/in/ntethewonder/" target="_blank" class="btn">My Linkedin </a>

              <p></p>
           </div>

           <div className="column-2 image">
            
              <img src="./assets/img/wonder.jpg" className="img-element z-index" alt="" height="100%" width="100%"/>
            </div>
           
         </div>
       </div>
     </section>
    )
}

export default About