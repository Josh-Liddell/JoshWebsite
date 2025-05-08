import { Link } from "react-router-dom";

export default function ComingSoon({ onContinue }) {
  return (
    <div className="coming-soon">
      <div className="titles">
        <h1 class="text">Website coming August 1</h1>
        <h2 class="gradient-text">Come back soon</h2>
      </div>
      <div className="foot">
        {/* <Link to="/">joshliddell.com</Link> */}
        <p onClick={onContinue}>joshliddell.com</p>
      </div>
    </div>
  );
}
