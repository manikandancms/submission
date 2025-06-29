import React from "react"
import car from "../../components/assets/1.png"
import { beauty } from "../assets/images";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageCoponents = () => {
    return (
        <div>
            <p>Hello World</p>
            {/* <img src={car} alt="car-image" />

            <img src={beauty} alt="car-cdn-image" /> */}

            <LazyLoadImage
    alt={beauty}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "0.3s"},
    }}
    src={beauty} />

        </div>

        
    );
};

export default ImageCoponents