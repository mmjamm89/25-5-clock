import './style.css';

const Session = ({ title, incLength, decLength, type, time}) => {   

    return(
        <div className="timer">
            <h1 id='session-label' className='timer_title'>{title}</h1>
            <h1 id='session-length' className='timer_length'>{time}</h1>
            <div className='timer_length_controls'>
                <button
                    id='session-decrement'
                    className='timer_add_btn'
                    onClick={() => decLength(type)}
                    >
                    -
                </button>
                <button
                    id='session-increment'
                    className='timer_sub_btn'
                    onClick={() => incLength(type)}
                    >
                    +
                </button>
            </div>
        </div>
    )
}

export default Session;