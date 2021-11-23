
const About = () =>{

    return(
       <div className="about section" id="about">
       <div className="container">
         <div className="section-header">
           <h3 className="title" data-title="Who Am I">About me</h3>
         </div>

         <div className="section-body grid-2">
           <div className="column-1">
             <h3 className="title-sm">Hi, my name is Ntethelelo Shabalala </h3>
             <p className="text">
               Highly motivated individual with ability to analyze and solve problems, 
               I can recognize problem areas, and I am able to evaluate the possible 
               alternatives as well as implement effective solutions. Flexible, 
               Adaptable I learn very quickly and can adapt easily to new work environments,
               new procedures, new technologies, and new policies.
               </p>
               <p className="text">
                Reliable, Self-motivator 
               I consistently strive to achieve new levels of performance, welcome new projects, 
               and require little, if any, direct supervision. I enjoy gathering, organizing, 
               and analyzing information, working in groups, and contributing to project strategies.
               My focus is to utilize my strengths in problem-solving to make a positive impact.
             </p>
             <div className="skills">
               <div className="skill html">
                 <h3 className="skill-title">Java</h3>
                 <div className="skill-bar">
                   <div className="skill-progress" data-progress="90%"></div>
                 </div>
               </div>
               <div className="skill css">
                 <h3 className="skill-title">Python</h3>
                 <div className="skill-bar">
                   <div className="skill-progress" data-progress="70%"></div>
                 </div>
               </div>
               <div className="skill js">
                 <h3 className="skill-title">HTML</h3>
                 <div className="skill-bar">
                   <div className="skill-progress" data-progress="80%"></div>
                 </div>
               </div>
             </div>
             <a href="#" className="btn">Read more</a>
           </div>

           <div className="column-2 ">
           <h3 className="title-sm">Why me!</h3>
             <p className="text">
               I want to be a software developer simply because it is a role that I am extremely passionate about,
               and also one I get immense job satisfaction from,
               expecially when I get to see first-hand the positive contribution my work makes to the organization I am 
               working on.
              </p>
              <p className="text">
               If you pick me as part the SovTech graduate team, I will not only work hard to deliver consistent positive
               result, but I will use my developing, researching, analytical and technical skills to help the company to 
               continually thrive and develop.
             </p>

             <p className="text">
               For me, the company I work for is very important.I believe that, to be able to perform your duties and responsibilies
               as a software develope competently, you need the support of your employer, and also need to work with like minded people
               who are all working towarsds a common goal
             </p>

             
           </div>
           
         </div>
       </div>
     </div>
    )
}

export default About