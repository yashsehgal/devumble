import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({HEADER_STATE}) {
    const solidButton = "leading-snug text-white px-4 py-2 font-semibold gradient rounded-md flex flex-row items-center justify-center";
    const secondaryButton = "leading-snug text-white px-4 py-2 font-semibold bg-white bg-opacity-50 hover:bg-opacity-60 rounded-md flex flex-row items-center justify-center";
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
        {
            type: 'button',
            content: 'Login',
            redirect: {
                typeOf: 'route',
                location: '/login'
            },
            buttonType: 'secondary'
        },
        {
            type: 'button',
            content: 'Join Today',
            redirect: {
                typeOf: 'route',
                location: '/create-account'
            },
            buttonType: 'solid'
        }
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
                            <ul className='header-options-list flex flex-row items-center gap-4'>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>    
        )
    }
}