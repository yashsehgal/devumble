import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight, FaTimes } from 'react-icons/fa';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export default function Header({HEADER_STATE}) {
    const solidButton = "leading-snug text-white px-4 py-2 font-semibold gradient rounded-md flex flex-row items-center justify-center";
    const secondaryButton = "leading-snug text-white px-4 py-2 font-semibold bg-white bg-opacity-50 hover:bg-opacity-60 rounded-md flex flex-row items-center justify-center";
    
    const [getStartedButtonModalRef, setGetStartedButtonModal] = useState(false);

    const [headerOptionsRef] = useState([
        { 
            type: 'link', 
            content: 'Stories', 
            redirect: {
                typeOf: 'route',
                location: '/stories'
            } 
        },
        { 
            type: 'link', 
            content: 'Contribute', 
            redirect: {
                typeOf: 'url',
                location: 'https://github.com/yashsehgal/devumble'
            }
        },
        // {
        //     type: 'button',
        //     content: 'Login',
        //     redirect: {
        //         typeOf: 'route',
        //         location: '/login'
        //     },
        //     buttonType: 'secondary'
        // },
        // {
        //     type: 'button',
        //     content: 'Get Started',
        //     redirect: {
        //         typeOf: 'route',
        //         location: '/create-account'
        //     },
        //     buttonType: 'solid'
        // }
    ]);
    if (HEADER_STATE === 'logged-in') {
        return (
            <React.Fragment>
                <div className="header-component-wrapper w-full h-auto px-3 py-4 bg-black">
                    <div className="header-content-wrapper screen-container">
                        <div className="header-logo-wrapper w-fit h-fit flex flex-row items-center justfiy-center">
                            <h1 className="header-logo-text-wrapper font-semibold text-white font-product text-lg leading-snug">
                                devumble<span className='text-2xl font-product gradient-text font-bold'>.</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>    
        )
    } else {
        return (
            <React.Fragment>
                <div className="header-component-wrapper w-full h-auto px-3 py-4 bg-black">
                    <div className="header-content-wrapper screen-container flex flex-row items-center justify-between h-auto">
                        <Link to="/">
                            <div className="header-logo-wrapper w-fit h-fit flex flex-row items-center justfiy-center">
                                <h1 className="header-logo-text-wrapper font-semibold text-white font-product text-lg leading-snug">
                                    devumble<span className='text-2xl font-product gradient-text font-bold'>.</span>
                                </h1>
                            </div>
                        </Link>
                        <div className='header-options-list-wrapper'>
                            <ul className='header-options-list flex flex-row items-center gap-6'>
                                {headerOptionsRef.map((option, index) => {
                                    if (option.type === 'link') {
                                        return (
                                            <React.Fragment key={index}>
                                                <li className='header-option-item text-white font-product text-sm font-normal hover:text-opacity-60'>
                                                    {
                                                        option.redirect.typeOf === 'route' 
                                                            ? <Link to={option.redirect.location}>{option.content}</Link>
                                                            : <a href={option.redirect.location} target="_blank">{option.content}</a>
                                                    }
                                                </li>
                                            </React.Fragment>
                                        )
                                    } else if (option.type === 'button') {
                                        return (
                                            <React.Fragment key={index}>
                                                <li className='header-option-item font-product text-sm'>
                                                    {
                                                        option.redirect.typeOf === 'route'
                                                            ? <Link to={option.redirect.location}>
                                                                <button className={option.buttonType === 'solid' ? solidButton : secondaryButton}>
                                                                    {option.content}
                                                                </button>
                                                            </Link>
                                                            : <button className={option.buttonType === 'solid' ? solidButton : secondaryButton}>
                                                                {option.content}
                                                            </button>
                                                    }
                                                </li>
                                            </React.Fragment>
                                        )
                                    } else {
                                        return (
                                            <React.Fragment key={index}>
                                                <li className='header-option-item leading-snug font-product text-white text-sm font-normal'>{option.content}</li>
                                            </React.Fragment>
                                        )
                                    }
                                })}
                                <li className='header-option-item font-product text-sm'>
                                    <button className={solidButton}
                                        onClick={() => setGetStartedButtonModal(true)}
                                    >
                                        Get Started
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* React Modals Dump */}
                <ReactModal
                    isOpen={getStartedButtonModalRef}
                    onRequestClose={() => setGetStartedButtonModal(false)}
                    style={{
                        overlay: {
                            background: 'rgba(0, 0, 0, 0.500)',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        content: {
                            backgroundColor: '#121212',
                            color: 'white',
                            boxShadow: '0px 0px 6px 12px rgba(0, 0, 0, 0.225)',
                            border: 'transparent',
                            height: 'fit-content',
                            width: '640px',
                            borderRadius: '8px',
                            padding: '28px',
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }
                    }}
                >
                    <div className="close-button-layer w-full h-auto flex flex-row items-center justify-between">
                        <h3 className="leading-snug font-product text-white text-lg">Getting Started with devumble</h3>
                        <button className="p-2 flex flex-row items-center justify-center text-white rounded-md bg-transparent hover:bg-gray-600 hover:bg-opacity-60"
                            onClick={() => setGetStartedButtonModal(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className='get-started-popup-content-wrapper mt-4 flex flex-col gap-3 w-auto h-auto items-stretch'>
                        <button className='w-fit px-4 mx-auto h-auto py-1.5 bg-white bg-opacity-20 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3'>
                            Login to Devumble using GitHub <FaArrowRight />
                        </button>
                        <button className='w-fit px-4 mx-auto h-auto py-1.5 gradient rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3'>
                            Create account using GitHub <FaArrowRight />
                        </button>
                    </div>
                </ReactModal>
            </React.Fragment>    
        )
    }
}