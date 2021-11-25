import React, { useState } from 'react';
import './style.css';
import Display from './display';
import Break from './break';
import Session from './setSession';

function App() {

  const [minsDisplayed, setMinsDisplayed] = useState(25*60);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

    //Set the correct time format for the clock display
    const timeFormat = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return(
            (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
        );
    };
    
    //decrement break length
    const decBreakLength = (type) => {
      if(type === 'break' && breakLength <= 0){
        return;
      }else{
        setBreakLength(breakLength - 1);
      }
    }
    //increment break length
    const incBreakLength = (type) => {
      if(type === 'break'){
        setBreakLength(breakLength + 1);
      }
    }

    //set session length
    const decSessionLength = (type) => {
      if(type === 'session' && sessionLength <= 0){
        return;
      }else{
        setSessionLength(sessionLength - 1);
      }
    }
    //increment session length
    const incSessionLength = (type) => {
      if(type === 'session'){
        setSessionLength(sessionLength + 1);
      }
    }

  return (
    <div className="App">
      <p className='title'>Pomodoro Clock</p>      
      <Break
        title={'Break length'}        
        decLength={decBreakLength}
        incLength={incBreakLength}
        type={'break'}
        time={breakLength}
        />
      <Session 
        title={'Session length'}
        decLength={decSessionLength}
        incLength={incSessionLength}
        type={'session'}
        time={sessionLength}
        />
      <Display
        timeFormat={timeFormat(minsDisplayed)}
        />
    </div>
  );
}

export default App;
