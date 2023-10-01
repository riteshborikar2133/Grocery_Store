import React from 'react';
import Nav from './Nav';
import image from '../image/organic-pattern-1.png';

function Header() {
    return (
        <div className='main'>
            <Nav/>
            <div className='m-text'>
                <img src={image} className='header-image' alt='image'/>
                <h2>Eat <font>Clean</font> and <font>Green</font>.Eat Organic</h2>
                <a className='m-btn' href='#'>Product</a>
            </div>

        </div>
    )
}

export default Header;