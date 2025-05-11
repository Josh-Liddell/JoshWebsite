import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar({ onContinue }) {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Prevent navigation
      const element = document.querySelector("#projects");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav>
      <h3 className="logo" onClick={onContinue}>
        Joshua <span>Liddell</span>
      </h3>
      <div className="navigator">
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/" onClick={handleClick}>
          Projects
        </Link>
        <Link to="/stack">Stack</Link>
        <Link to="/games">Games</Link>
      </div>
    </nav>
  );
}
