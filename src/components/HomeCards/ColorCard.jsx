import { Link } from 'react-router-dom';
import '../../scss/HomeComponents.scss'


function ColorCard({ type }) {
  if (type == 1) {
    return (
      <Link to='/about' className='color-card'>
      </Link>
    );

  } else if (type == 2) {
    return (
      <Link to='/about' className='color-card2'>
      </Link>
    );
  }
}

export default ColorCard;