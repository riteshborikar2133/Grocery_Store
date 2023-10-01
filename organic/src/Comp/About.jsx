import React from 'react';
import Aboutimage from '../image/organic-about-1.png';
// organic-about-1.png

function About() {
    return(
        <div className='about'>
        <div className='about-img'>
            <img src={Aboutimage} alt='img'/>
        </div>

        <div className='about-text'>
            <h3>Fresh Food,Simply <font>Delicious</font></h3>
            <p>Fresh and organic 
Sprouting goodness straight from the earth, our produce is so fresh and organic, even the veggies are doing the 'organic shuffle' in their beds.</p>
            <a href= '#' className='about-btn'>Read more</a>
        </div>
    </div>
    )
}

export default About;