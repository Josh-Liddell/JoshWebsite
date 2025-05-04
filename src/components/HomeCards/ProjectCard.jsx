import '../../scss/HomeComponents.scss'


function ProjectCard({ icon, title, description }) {
  return (
    <div className="project-card">
      <div className="heading">
        <img src={icon} alt="CardIcon" className="icon"/>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;


{/* <p class="description">
    Custom CLI tool for detecting trangular arbitrage opportunity
    <!-- Created a CLI tool in Python that uses triangular arbitrage to detect profitable trading opportunities between currency pairs by continuously monitoring exchange rates and identifying price discrepancies -->
</p> */}
// Crypto Trading
// "assets/icons/square-terminal.svg"