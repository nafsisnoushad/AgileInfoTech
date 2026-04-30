import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your logo images
import isoLogo from '../assets/iso-certified-company-stamp-seeklogo.webp';
import startupIndiaLogo from '../assets/startup-india-home-partner.webp';
// Add more imports as needed for other logos

const logos = [
    { src: startupIndiaLogo, alt: 'Startup India' },
    { src: isoLogo, alt: 'ISO Certified' },
    // Add more logo objects here
];

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div style={{ background: '#f8f9fa', padding: '20px 0' }}>
            <Slider {...settings}>
                {logos.map((logo, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={logo.src} alt={logo.alt} style={{ maxHeight: 80, maxWidth: 180, objectFit: 'contain' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;
