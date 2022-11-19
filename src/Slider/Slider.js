
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slider.css';
import 'react-slideshow-image/dist/styles.css';

import one from '../img/1.png';
import two from '../img/2.png';
import three from '../img/3.png';
import four from '../img/4.png';
import five from '../img/5.png';

const Example = () => {
    const images = [
        one, two, three, four, five
    ];

    return (
        <div className="slider-wrapper">
            <Slide>
                {images.map((slideImage, index) => (
                    <div className="each-slide-effect" key={index}>
                        <div
                            style={{
                                backgroundImage: `url(${slideImage})`
                            }}
                        >
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Example;