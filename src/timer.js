import './style.css';

const Timer = () => {
    return(
        <div className="timer">
            <h1 id='session-label' className='timer_title'>Session length</h1>
            <h1 id='session-length' className='timer_length'>25</h1>
            <div className='timer_length_controls'>
                <button id='session-increment' className='timer_add_btn'>+</button>
                <button id='session-decrement' className='timer_sub_btn'>-</button>
            </div>
        </div>
    )
}

export default Timer;