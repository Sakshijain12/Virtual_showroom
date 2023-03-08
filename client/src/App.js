import './App.css';
//import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container my-1'>
        <div className='row row-cols-3'>
          <div className='col my-3'>
            <Slider id = "1"/>
          </div>
          <div className='col my-3'>
            <Slider id = "2"/>
          </div>
          <div className='col my-3'>
            <Slider id = "3"/>
          </div>
          <div className='col my-3'>
            <Slider id = "4"/>
          </div>
          <div className='col my-3'>
            <Slider id = "5"/>
          </div>
          <div className='col my-3'>
            <Slider id = "6"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



