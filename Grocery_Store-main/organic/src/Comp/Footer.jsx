import React from 'react';

function Footer(){
    return(
        <div className='subscribe-container'>
        <h3>
            Subscribe to get updated
        </h3>
        <div className='subscribe-input'>
            <input placeholder='example@gmail.com' type='email'/>
            <a className='subscribe-btn' href='#'>Send</a>
        </div>

    </div>
    )
}

export default Footer;