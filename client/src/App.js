import './App.css';
//import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mb-auto">
        <Slider/>
      </div>
    </div>
  );
}

export default App;



