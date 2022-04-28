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
                    <div className='github-auth-cta-section-wrapper mt-12 flex flex-row items-center justify-between w-fit mx-auto'>
                        <div className="github-username-input-component-wrapper px-3 py-2 rounded-full bg-white bg-opacity-30 w-fit flex flex-row items-center gap-3 mx-auto">
                            <span className="github-placeholder-wrapper leading-snug font-semibold text-lg text-slate-400 px-1">
                                @
                            </span>
                            <input type="text" placeholder='GitHub Username'
                                className='bg-transparent focus:border-0 focus:outline-none focus:border-transparent text-white w-[260px]'
                            />
                            <button className='px-4 py-2 gradient text-white flex flex-row items-center justify-center font-normal rounded-full'>
                                Continue
                            </button>
                        </div>
                        <hr className='translate -rotate-45 w-24' />
                        <button className='px-5 py-3 gradient text-white flex flex-row items-center justify-center font-semibold rounded-md'>
                            Authenticate with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}