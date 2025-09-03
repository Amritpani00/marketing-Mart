import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Festival Season Savings!',
    },
    {
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Today Only: 10% Off Everything!',
    },
    {
        image: 'https://images.unsplash.com/photo-1588964895597-cf291512a6ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Fresh Groceries Delivered to Your Door!',
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div className="banner-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="banner-text">{slide.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
