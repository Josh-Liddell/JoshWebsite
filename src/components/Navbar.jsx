import { Link } from 'react-router-dom';
import '../scss/Navbar.scss';

function Navbar() {
    return (
      <nav>
        <Link to="/"><h3 className='logo'>Joshua <span>Liddell</span></h3></Link>
        <div className='navigator'>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/stack">Stack</Link>
          <Link to="/games">Games</Link>
        </div>
      </nav>
    );
  }
  
export default Navbar;