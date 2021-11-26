import React, { useState } from 'react';
import './style.css';
import Display from './display';
import Break from './break';
import Session from './setSession';

function App() {

  const [minsDisplayed, setMinsDisplayed] = useState(25*60);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = useState(new Audio('./alarm-sound.mp3'))

    //play alarm sound at the end of session
    const playBreakSound = () => {
      breakAudio.currentTime = 0;
      breakAudio.play();
    }

    //Set the correct time format for the clock display
    const timeFormat = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return(
            (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
        );
    };
    
    //Change break length, session length, and set the display time equal to the session length
    const changeTime = (amount, type) => {
      if(type === 'break'){
        if(breakLength <= 1 && amount < 0){
          return;
        }
        setBreakLength(prev => prev + amount)
      }else{
        if(sessionLength <= 1 && amount < 0){
          return;
        }
        setSessionLength(prev => prev + amount)
        if(!timerOn){
          setMinsDisplayed((sessionLength + amount)*60);
        }
      }
    }

    //Control buttons
    //play-pause
    const control = () => {
      let second = 1000;
      let date = new Date().getTime();
      let nextDate = new Date().getTime() + second;
      let onBreakVariable = onBreak;
      if(!timerOn){
        let interval = setInterval(() => {
          date = new Date().getTime();
          if(date > nextDate){
            setMinsDisplayed((prev) => {
              if(prev >= 0 && !onBreakVariable){
                playBreakSound();
                onBreakVariable = true;
                setOnBreak(true);
                return breakLength;
              }else if(prev <= 0 && onBreakVariable){
                playBreakSound();
                onBreakVariable = false;
                setOnBreak(false);
                return sessionLength;
              }
              return prev - 1;
            })
            nextDate += second;
          }          
        }, 30)
        localStorage.clear();
        localStorage.setItem('interval-id', interval);
      }
      if(timerOn){
        clearInterval(localStorage.getItem('interval-id'))
      }
      setTimerOn(!timerOn);
    }

    //Reset
    const reset = () => {
      setMinsDisplayed(25*60);
      setSessionLength(25);
      setBreakLength(5);
    }



  return (
    <div className="App">
      <p className='title'>Pomodoro Clock</p>      
      <Break
        title={'Break length'}        
        changeTime={changeTime}
        type={'break'}
        time={breakLength}
        />
      <Session 
        title={'Session length'}
        changeTime={changeTime}
        type={'session'}
        time={sessionLength}
        />
      <Display
        timeFormat={timeFormat(minsDisplayed)}
        reset={reset}
        control={control}
        />
    </div>
  );
}

export default App;
