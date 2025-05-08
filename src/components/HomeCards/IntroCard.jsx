import { Link } from "react-router-dom";

export default function IntroCard() {
  return (
    <div className="intro-card">
      <h1>➥ Hi, I'm Joshua</h1>
      <p>I am a software developer and tech enthusiast</p>
      <p>Here you can learn about me, check out my projects, and explore!</p>
      <div className="buttons">
        <Link to="/about" className="button1">
          About
        </Link>
        <Link to="/contact" className="button1">
          Contact
        </Link>
      </div>
    </div>
  );
}
