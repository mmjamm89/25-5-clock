import React, { useState } from 'react';
import './style.css';

function App() {

  const [minsDisplayed, setMinsDisplayed] = useState(1*60);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  
    //Set the correct time format for the clock display
    const timeFormat = (time) => {        
    }
    
    //Change break length, session length, and set the display time equal to the session length
    const changeTime = (amount, type) => {
    }

    //play-pause
    const control = () => {
    }

    //Reset
    const reset = () => {
     }
    //Label changer
    // const timerLabel = () => onBreak ? "Break" : "Session"
    
  return (
    <div className="App">
      <p className='title'>Pomodoro Clock</p>
      
      {/* Display */}
      <div className='display'>
            <div className='display_screen'>
                <p id='timer-label'>Session</p>
                <p id="time-left">25:00</p>
            </div>
            <div className='display_controls'>
                <button
                    id='start_stop'
                    className='play_btn'>play/pause
                </button>                
                <button
                    id='reset'
                    className='reset_btn'>reset
                </button>
            </div>            
        </div>

        {/* Break length controls */}
        <div className='break'>
            <h1 id='break-label' className='break_title'>Break Length</h1>
            <h1 id='break-length' className='break_length'>5</h1>
            <div className='break_length_controls'>
                <button
                    id='break-decrement'
                    className='break_add_btn'>-
                </button>
                <button
                    id='break-increment'
                    className='break_sub_btn'>+
                </button>
            </div>
        </div>

        {/* Session length controls */}
        <div className="timer">
            <h1 id='session-label' className='timer_title'>Session Length</h1>
            <h1 id='session-length' className='timer_length'>25</h1>
            <div className='timer_length_controls'>
                <button
                    id='session-decrement'
                    className='timer_add_btn'>-
                </button>
                <button
                    id='session-increment'
                    className='timer_sub_btn'>+
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
