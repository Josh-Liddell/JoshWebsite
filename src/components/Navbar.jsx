import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h3 className="logo">
          Joshua <span>Liddell</span>
        </h3>
      </Link>
      <div className="navigator">
        <Link to="/about">About</Link>
        <Link to="/home">Experience</Link>
        <Link to="/home">Projects</Link>
        <Link to="/home">Stack</Link>
        <Link to="/home">Games</Link>
      </div>
    </nav>
  );
}

export default Navbar;
