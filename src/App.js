import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function App() {

  const [timeDisplayed, setTimeDisplayed] = useState(1500);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerOn, setTimerOn] = useState(false);
  const [timerId, setTimerId] = useState('Session');  
  const audio = useRef(null);
    
  let loop = undefined;
  
    //Set the correct time format for the clock display
    const timeFormat = (time) => {   
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        return(
            (mins < 10 ? '0' + mins : mins) + ':' + (secs < 10 ? '0' + secs : secs)
        );

    }
   
    //Change break length, session length, and set the display time equal to the session length
    const changeTime = (amount, type) => {
        let newCount;
        if(type === 'session'){
            newCount = sessionLength + amount;
        }else{
            newCount =  breakLength + amount;
        }

        if(newCount > 0 && newCount <= 60 && !timerOn){
            type === 'session' ? setSessionLength(newCount) : setBreakLength(newCount);
            if(type === 'session'){
                setTimeDisplayed(newCount * 60);
            }
        }
    }

    const setActive = () => {
        setTimerOn(!timerOn);
    };

    useEffect(() => {
        if(timerOn && timeDisplayed > 0){
            const interval = setInterval(() => {
                setTimeDisplayed(timeDisplayed - 1);
            }, 50);
            return () => clearInterval(interval);
        }else if(timeDisplayed === 0){
            
            audio.current.play();
            audio.current.currentTime = 0;

            if(timerId === 'Session'){
                setTimeDisplayed(breakLength * 60);
                setTimerId('Break');
            }
            if(timerId === 'Break'){
                setTimeDisplayed(sessionLength * 60);
                setTimerId('Session');
            }
        }
    }, [breakLength, sessionLength, timeDisplayed, timerId, timerOn])
    
    //Reset
    const reset = () => {
        setBreakLength(5);
        setSessionLength(25);
        setTimeDisplayed(1500);
        setTimerId('Session');
        setTimerOn(false);
        clearInterval(loop);
        audio.current.load();
     }    
    
  return (
    <div className="App">
      <p className='title'>Pomodoro Clock</p>      
      {/* Display */}
      <div className='display'>
            <div className='display_screen'>
                {/* Label changer */}
                <p id='timer-label'>{timerId}</p>
                <p id="time-left">{timeFormat(timeDisplayed)}</p>
            </div>
            <div className='display_controls'>
                <button
                    id='start_stop'
                    className='play_btn'
                    onClick={setActive}>play/pause
                </button>                
                <button
                    id='reset'
                    className='reset_btn'
                    onClick={reset}>reset
                </button>
                <audio 
                    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                    id='beep'
                    preload='auto'
                    type='audio/mpeg'
                    ref={audio}>
                </audio>
            </div>            
        </div>
        <Break 
            title={'Break Length'}
            changeTime={changeTime}
            type={'break'}
            time={breakLength} />
        <Session
            title={'Session Length'}
            changeTime={changeTime}
            type={'session'}
            time={sessionLength} />
    </div>
  );
}

const Break = ({title, changeTime, type, time}) => {
    return(
        <div className='break'>
            <h1 id='break-label' className='break_title'>{title}</h1>
            <h1 id='break-length' className='break_length'>{time}</h1>
            <div className='break_length_controls'>
                <button
                    id='break-decrement'
                    className='break_add_btn'
                    onClick={() => changeTime(-1, type)}>-
                </button>
                <button
                    id='break-increment'
                    className='break_sub_btn'
                    onClick={() => changeTime(1, type)}>+
                </button>
            </div>
        </div>
    )
}

const Session = ({title, changeTime, type, time}) => {
    return(
        <div className="timer">
        <h1 id='session-label' className='timer_title'>{title}</h1>
        <h1 id='session-length' className='timer_length'>{time}</h1>
        <div className='timer_length_controls'>
            <button
                id='session-decrement'
                className='timer_add_btn'
                onClick={() => changeTime(-1, type)}>-
            </button>
            <button
                id='session-increment'
                className='timer_sub_btn'
                onClick={() => changeTime(1, type)}>+
            </button>
        </div>
    </div>
    )
}


export default App;
