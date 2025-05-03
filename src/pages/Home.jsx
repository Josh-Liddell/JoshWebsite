import '../scss/Home.scss'
import IntroCard from '../components/HomeCards/IntroCard';
import InfoCard from '../components/HomeCards/InfoCard';
import ColorCard from '../components/HomeCards/ColorCard';

import Rocket from '../assets/icons/rocket-lunch.svg';
import Book from '../assets/icons/book-bookmark.svg';
import Chart from '../assets/icons/chart-network.svg';
import Hat from '../assets/icons/graduation-cap.svg';


function Home() {
  const desc1 = 'A summary of my work history, roles, and skils developed'
  const desc2 = 'Showcasing my coding, design, and problem solving skills'
  const desc3 = 'The technologies and tools I specialize in'
  const desc4 = 'Quick insights and lessons from my daily learning journey'

  return (
    <main>
      <IntroCard />
      <div className='info-cards'>
        <InfoCard icon={Rocket} title='Experience' description={desc1} />
        <InfoCard icon={Book} title='Projects' description={desc2} />
        <InfoCard icon={Chart} title='Stack' description={desc3} />
        <InfoCard icon={Hat} title='Today I Learned' description={desc4} />
      </div>
      <div className='color-cards'>
        <ColorCard type={1}/>
        <ColorCard type={2}/>
      </div>
      <p>Hello world?</p>
      <p>Hello world?</p>
      <p>Hello world?</p>
      <p>Hello world?</p>
    </main>
  )
}

export default Home