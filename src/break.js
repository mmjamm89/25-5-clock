import './style.css';

const Break = () => {
    return(
        <div className='break'>
            <h1 id='break-label' className='break_title'>Break length</h1>
            <h1 id='break-length' className='break_length'>5</h1>
            <div className='break_length_controls'>
                <button id='break-increment' className='break_add_btn'>+</button>
                <button id='break-decrement' className='break_sub_btn'>-</button>
            </div>
        </div>
    )
}

export default Break;