import React from 'react';

function Box(props){
    return (
        <div className='p-box'>
            <img src={props.image} alt='product-image'/>
            <p>{props.name}</p>
            <a className='price' href='/'>{props.price}</a>
            <a className='buy-btn' href='/'>Add To Cart</a>

        </div>
    )
}

export default Box;