import { Link } from "react-router-dom";
import Github from "../../assets/icons/github-mark-white.svg";

function ColorCard({ type }) {
  if (type == 1)
    return (
      <a href="https://github.com/josh-liddell" className="color-card">
        <img src={Github} alt="GitHubIcon" />
        <div className="card-text">
          <p>View my</p>
          <p>GitHub</p>
        </div>
      </a>
    );
  return <Link to="/about" className="color-card2"></Link>;
}

export default ColorCard;
