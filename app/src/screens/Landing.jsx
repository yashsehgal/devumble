import React, { useState } from 'react';
import { getUserData, getUserData_fromGitHub_forDevumbleProfile } from '../api-middleware/github-api';

import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { getUserData_fromLocalStorage_forDevumbleProfile, saveUserData_inLocalStorage_fromGitHub_forDevumbleProfile } from '../utils/local-storage';

export default function Landing() {
    const [continueButtonActiveStateRef, setContinueButtonActiveState] = useState(false);
    return (
        <React.Fragment>
            <div className='landing-page screen-container'>
                <div className='hero-section-container mt-8'>
                    <h1 className='font-product text-white leading-snug font-bold text-5xl text-center w-[24ch] mx-auto'>
                        start your <span className="gradient-text">journey</span> to find your pair programming <span className="gradient-text">partner</span>
                    </h1>
                    <div className='github-auth-cta-section-wrapper mt-12 flex flex-col items-stretch justify-between gap-4 w-fit mx-auto'>
                        <div className="github-username-input-component-wrapper px-2 py-2 rounded-full bg-white bg-opacity-30 w-fit flex flex-row items-center gap-3 mx-auto">
                            <span className="github-placeholder-wrapper flex flex-row gap-1 items-center leading-snug font-semibold text-lg text-slate-400 px-2">
                                <FaGithub />
                            </span>
                            <input type="text" placeholder='GitHub Username'
                                className='bg-transparent focus:border-0 focus:outline-none focus:border-transparent text-white w-[260px]'
                                id="landing-page-section__github-username-input"
                                onKeyDown={async(keyPressEvent) => {
                                    if (keyPressEvent.code.toLowerCase() === 'enter') {
                                        let githubUsernameInputValue = document.getElementById('landing-page-section__github-username-input').value;
                                        if (githubUsernameInputValue !== null && githubUsernameInputValue !== undefined && githubUsernameInputValue !== "") {
                                            let githubAPIResponse_forUsername = await getUserData_fromGitHub_forDevumbleProfile(githubUsernameInputValue);
                                            if (saveUserData_inLocalStorage_fromGitHub_forDevumbleProfile(githubAPIResponse_forUsername)) {
                                                // data saved successfully
                                                window.location.href = "/create-profile";
                                            } else {
                                                console.log('something went wrong');
                                            }
                                        }
                                    }
                                }}
                                onChange={(usernameInput) => {
                                    if (usernameInput.target.value.length > 0) {
                                        setContinueButtonActiveState(true);
                                    } else {
                                        setContinueButtonActiveState(false);
                                    }
                                }}
                            />
                            <button 
                                className={continueButtonActiveStateRef 
                                    ? `px-4 py-2 gradient text-white font-product text-sm flex flex-row items-center justify-center gap-2 font-normal rounded-full hover:shadow-2xl`
                                    : `px-4 py-2 bg-white bg-opacity-30 text-gray-400 font-product text-sm flex flex-row items-center justify-center gap-2 font-normal rounded-full hover:shadow-2xl cursor-not-allowed`}
                                onClick={async () => {
                                    let githubUsernameInputValue = document.getElementById('landing-page-section__github-username-input').value;
                                    if (githubUsernameInputValue !== null && githubUsernameInputValue !== undefined && githubUsernameInputValue !== "") {
                                        let githubAPIResponse_forUsername = await getUserData_fromGitHub_forDevumbleProfile(githubUsernameInputValue);
                                        if (saveUserData_inLocalStorage_fromGitHub_forDevumbleProfile(githubAPIResponse_forUsername)) {
                                            // data saved successfully
                                            window.location.href = "/create-profile";
                                        } else {
                                            console.log('something went wrong');
                                        }
                                    }
                                }}
                            >
                                Continue <FaArrowRight />
                            </button>
                        </div>
                        <div className="section-divider-wrapper flex flex-row items-center gap-2 w-auto h-auto ">
                            <div className='w-full h-[1px] bg-white opacity-30' />
                            <span className='text-white opacity-30 font-normal text-sm'>OR</span>
                            <div className='w-full h-[1px] bg-white opacity-30' />
                        </div>
                        <button className='px-5 py-3 gradient text-white flex flex-row items-center justify-center gap-2 font-semibold rounded-full'>
                            <FaGithub />
                            Authenticate with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}