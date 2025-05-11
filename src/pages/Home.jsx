import IntroCard from "../components/HomeCards/IntroCard";
import InfoCard from "../components/HomeCards/InfoCard";
import ColorCard from "../components/HomeCards/ColorCard";
import ProjectCard from "../components/HomeCards/ProjectCard";
import { infoCards, projectCards } from "../data/homeCards";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="home-elements">
      <IntroCard />
      <div className="info-cards">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
      <div className="color-cards">
        <ColorCard type={1} />
        <ColorCard type={2} />
      </div>
      <div className="project-section" id="projects">
        <p className="title">Browse my Projects</p>
        <div className="project-cards">
          {projectCards.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
