import { Link } from "react-router-dom";

export default function ComingSoon({ onContinue }) {
  return (
    <div className="coming-soon">
      <div className="titles">
        <h1 className="text">Website coming August 1</h1>
        <h2 className="gradient-text">Come back soon</h2>
      </div>
      <div className="foot">
        <p onClick={onContinue}>joshliddell.com</p>
      </div>
    </div>
  );
}
