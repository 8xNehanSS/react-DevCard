import './App.css';
import Half from './components/Half';
import photo1 from './images/Picture1.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <center><img id='profpic' src={photo1} alt='photo1' width='317'/></center>
      <Half />
      <Footer />
    </div>
  );
}

export default App;
