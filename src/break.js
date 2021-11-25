import './style.css';

const Break = ({ title, decLength, incLength, type, time}) => {
    return(
        <div className='break'>
            <h1 id='break-label' className='break_title'>{title}</h1>
            <h1 id='break-length' className='break_length'>{time}</h1>
            <div className='break_length_controls'>
                <button
                    id='break-decrement'
                    className='break_add_btn'
                    onClick={() => decLength(type)}>
                    -
                </button>
                <button
                    id='break-increment'
                    className='break_sub_btn'
                    onClick={() => incLength(type)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Break;