import React from 'react';
import { getUserData } from '../api-middleware/github-api';

export default function Landing() {
    return (
        <React.Fragment>
            <div className='landing-page screen-container'>
                <div className='hero-section-container mt-12'>
                    <h1 className='font-product text-white leading-snug font-bold text-5xl text-center w-[24ch] mx-auto'>
                        start your <span className="gradient-text">journey</span> to find your pair programming <span className="gradient-text">partner</span>
                    </h1>
                </div>
            </div>
        </React.Fragment>
    )
}