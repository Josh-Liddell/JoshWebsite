import { Link } from "react-router-dom";

export default function InfoCard({ icon, title, description, link }) {
  return (
    <Link to={link} className="info-card">
      <div className="heading">
        <img src={icon} alt="CardIcon" className="icon" />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
}
