import './style.css';
import Display from './display';
import Break from './break';
import Timer from './timer';

function App() {
  return (
    <div className="App">
      <p className='title'>Pomodoro Clock</p>      
      <Break />
      <Timer />
      <Display />
    </div>
  );
}

export default App;
