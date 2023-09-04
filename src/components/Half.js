import '../App.css';
import Intro from './Intro';
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';

function Half() {
  return (
    <div className='half'>
      <Intro />
      <Buttons />
      <About />
      <Interests />
    </div>
  );
}

export default Half;
