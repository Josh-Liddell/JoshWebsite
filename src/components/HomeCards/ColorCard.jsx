import { Link } from "react-router-dom";
import { useRef } from "react";
import Github from "../../assets/icons/github-mark-white.svg";
import Pool from "../../assets/icons/billiards.png";

function ColorCard({ type }) {
  const boundingRef = useRef(null);

  if (type == 1)
    return (
      <div className="perspective-container">
        <a
          href="https://github.com/josh-liddell"
          className="color-card"
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            if (!boundingRef.current) return;
            const x = ev.clientX - boundingRef.current.left;
            const y = ev.clientY - boundingRef.current.top;
            const xPercentage = x / boundingRef.current.width;
            const yPercentage = y / boundingRef.current.height;
            const xRotation = (xPercentage - 0.5) * 12;
            const yRotation = (0.5 - yPercentage) * 12;

            ev.currentTarget.style.setProperty(
              "--x-rotation",
              `${yRotation}deg`
            );
            ev.currentTarget.style.setProperty(
              "--y-rotation",
              `${xRotation}deg`
            );
            ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
            ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
          }}
        >
          <img src={Github} alt="GitHubIcon" />
          <div className="card-text">
            <p>Visit my</p>
            <p>GitHub</p>
          </div>
        </a>
      </div>
    );
  return (
    <Link to="/about" className="color-card2">
      {/* <p>Explore my</p> */}
      <div className="games-container">
        <img src={Pool} alt="GitHubIcon" />
        <p>Explore</p>
        <h1>GAMES</h1>
      </div>
    </Link>
  );
}

export default ColorCard;
