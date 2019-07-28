import React from 'react'
import { Carousel } from 'antd';
import offer1 from './offer1.jpg'
import offer2 from './offer2.png'
import offer3 from './offer3.jpg'
import offer4 from './offer4.png'

const carousel=()=>{
    return(
        < Carousel autoplay >
            <div>
                <img src={offer1} style={{width:'100%', height: '100%'}}/>
            </div>
            <div>
                <img src={offer2} />
            </div>
            <div>
                <img src={offer3} />
            </div>
            <div>
                <img src={offer4} />
            </div>
        </Carousel >
    );
    
}
export default carousel;