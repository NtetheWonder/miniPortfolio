import './education.css';

const Education =() => {
  
  return(

  <section className="education" id="education">
    <div className="container">
    <div className="section-header">
      <h3 className="title" data-title="My journey">My Education</h3>

    </div>
    <div className="container-ed">

      <div className="section-body grid-2">
        <div className="column-1">
          <i className="fas fa-graduation-cap"></i>
          <span>2018 - 2021</span>
          <h2>University of KwaZulu-Natal</h2>
          <h3>BSc. Computer Science and information Technology</h3>
          <h4>Relevent caurses:</h4>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Computer Systems</li>
            <li>Databases and programming</li>
            <li>Systems analyses</li>
            <li>Data Structures</li>
            <li>Object-oriented programming</li>
          </ul>
          <p>Hard work pays off</p>
          <a href="#Achievements"  class="btn">Achievements</a>

        </div>

        <div className="column-2">
          <i className="fas fa-graduation-cap"></i>
          <span>2013 - 2017</span>
          <h2>Bhekathina High School</h2>
          <h3>Science stream</h3>
          <h4>Subjects taken:</h4>
          <ul>
            <li>Pyhsical Sciences</li>
            <li>Mathamatics </li>
            <li>English (as First Additional language)</li>
            <li>IsiZulu (Home language)</li>
            <li>Life Sciences </li>
            <li>Geography </li>
            <li>Life Orientation</li>
          </ul>
        </div>

      </div>

      </div>
     

    </div>

    
  </section>


)
}

export default Education