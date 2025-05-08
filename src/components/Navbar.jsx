import { Link } from "react-router-dom";

export default function Navbar({ onContinue }) {
  return (
    <nav>
      <p onClick={onContinue}>
        <h3 className="logo">
          Joshua <span>Liddell</span>
        </h3>
      </p>
      <div className="navigator">
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/">Projects</Link>
        <Link to="/stack">Stack</Link>
        <Link to="/games">Games</Link>
      </div>
    </nav>
  );
}
