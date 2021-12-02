import './style.css';

const Display = ({ timeFormat, reset, control, timerLabel }) => {

    return(
        <div className='display'>
            <div className='display_screen'>
                <p id='timer-label'>{timerLabel}</p>
                <p id="time-left">{timeFormat}</p>
            </div>
            <div className='display_controls'>
                <button
                    id='start_stop'
                    className='play_btn'
                    onClick={control}>play/pause
                </button>                
                <button
                    id='reset'
                    className='reset_btn'
                    onClick={reset}>reset
                </button>
            </div>            
        </div>
    )
}

export default Display;