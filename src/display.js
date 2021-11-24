import './style.css';

const Display = () => {
    return(
        <div className='display'>
            <div className='display_screen'>
                <p id='timer-label'>Session</p>
                <p id='time-left'>25:00</p>
            </div>
            <div className='display_controls'>
                <button id='start_stop' className='play_btn'>play</button>
                <button className='pause_btn'>pause</button>
                <button id='reset' className='reset_btn'>reset</button>
            </div>
            
        </div>
    )
}

export default Display;