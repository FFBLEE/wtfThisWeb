import React, { useState, useEffect } from 'react';
import './slideStyle.css';

import banner1 from '../../assets/imgs/banner1.jpg';
import banner2 from '../../assets/imgs/banner2.jpg';
import banner3 from '../../assets/imgs/banner3.jpg';
import banner4 from '../../assets/imgs/banner4.jpg';
import banner5 from '../../assets/imgs/banner5.jpg';

const IMAGES = [banner1, banner2, banner3, banner4, banner5];

function SlidePicture() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="slidepicture">
            <div className="image-container">
                <img src={IMAGES[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} />
            </div>
        </section>
    );
}

export default SlidePicture;
