import Arrow from "../../assets/icons/arrow.png";

export default function ProjectCard({
  icon,
  title,
  description,
  bullet1,
  bullet2,
  bullet3,
  link1,
  link2,
  link3,
}) {
  return (
    <div className="project-card">
      <div className="heading">
        <img src={icon} alt="CardIcon" className="icon" />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <div className="bullets">
        <div className="point">
          <img src={Arrow} alt="bullet" />
          <a href={link1}>{bullet1}</a>
        </div>
        <div className="point">
          <img src={Arrow} alt="bullet" />
          {/* <p>Link here!</p> */}
          <a href={link2}>{bullet2}</a>
        </div>
        <div className="point">
          <img src={Arrow} alt="bullet" />
          <a href={link3}>{bullet3}</a>
        </div>
      </div>
    </div>
  );
}
