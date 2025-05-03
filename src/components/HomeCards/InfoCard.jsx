import { Link } from 'react-router-dom';
import '../../scss/HomeComponents.scss'


function InfoCard({ icon, title, description }) {
  return (
    <Link to="/about" className='info-card'>
      <div class="heading">
        <img src={icon} alt="CardIcon" className="icon"/>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
}

export default InfoCard;


{/* <a href="https://github.com/josh-liddell" target="_blank" rel="noopener noreferrer" class="box">
  <div class="heading">
    <img src = "assets/icons/rocket-lunch.svg" alt="RocketIcon" class="icon"/>
    <h2>Experience</h2>
  </div>
  <p class="description">A summary of my work history, roles, and skils developed</p>
</a> */}

// src/assets/icons/rocket-lunch.svg