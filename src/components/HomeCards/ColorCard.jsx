import { Link } from "react-router-dom";

function ColorCard({ type }) {
  if (type == 1) return <Link to="/about" className="color-card"></Link>;
  return <Link to="/about" className="color-card2"></Link>;
}

export default ColorCard;
