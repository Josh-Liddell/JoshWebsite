import { Link } from "react-router-dom";

export default function InfoCard({ icon, title, description, link }) {
  const handleClick = (e) => {
    if (title === "Projects") {
      e.preventDefault(); // Preventing navigation
      const element = document.querySelector("#projects");
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      to={link || "#"} // Using "#" as fallback if link is undefined
      onClick={handleClick}
      className="info-card"
    >
      <div className="heading">
        <img src={icon} alt="CardIcon" className="icon" />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
}
