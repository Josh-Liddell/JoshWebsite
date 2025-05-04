import { Link } from "react-router-dom";

function IntroCard() {
  return (
    <div className="intro-card">
      <h1>➥ Hi, I'm Joshua</h1>
      <p>I am a software developer and tech enthusiast</p>
      <p>Here you can learn about me, check out my projects, and explore!</p>
      <div className="buttons">
        <Link to="/about" class="button1">
          About
        </Link>
        <a
          href="https://github.com/josh-liddell"
          target="_blank"
          rel="noopener noreferrer"
          class="button1"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default IntroCard;

// <div class="card1">
//       <h1>➥ Hi, I'm Joshua</h1>
//       <p style="margin-bottom: 0.5rem;">I am a software developer and tech enthusiast</p>
//       <p style="margin-top: 0; margin-bottom: 0;">Here you can learn about me, check out my projects, and explore!</p>

//       <div class="buttons">
//         <a href="https://linkedin.com/in/joshliddell" target="_blank" rel="noopener noreferrer" class="button1">
//           About
//         </a>
//         <a href="https://github.com/josh-liddell" target="_blank" rel="noopener noreferrer" class="button1">
//           Contact
//         </a>
//       </div>

//     </div>
