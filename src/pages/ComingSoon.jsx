import { Link } from "react-router-dom";

function About() {
  return (
    <div className="coming-soon">
      <div className="titles">
        <h1 class="text">Website coming August 1</h1>
        <h2 class="gradient-text">Come back soon</h2>
      </div>
      <div className="foot">
        <Link to="/home">joshliddell.com</Link>
      </div>
    </div>
  );
}

export default About;
