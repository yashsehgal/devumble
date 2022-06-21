import React, { useEffect, useState } from "react";
import { createDemoUserData } from "../utils/user-db";

import { frequentLanguages } from '../api-middleware/frequent-langauges';

import TinderCard from 'react-tinder-card';

// let userDataRef = [];
// userDataRef = createDemoUserData().then(res=> {
//     userDataRef = res;
//     console.log('res', userDataRef)
// }).catch(err => {
//     console.log('api error-log', err);
// });

export default function Explore() {
    const [userDataRef, setUserData] = useState([]);
    useEffect(() => {
        createDemoUserData().then(res=> {
            console.log('res', res);
            setUserData(res);
        }).catch(err => {
            console.log('api error-log', err);
        });
    }, []);

    const onCardSwipe = function(direction) {
        console.log('swiped in direction: ', direction);
    }

    return (
        <React.Fragment>
            <div className="explore-page-wrapper screen-container">
                <div className="explore-page-hero__top-layer-wrapper">
                    <h1 className="leading-snug font-semibold text-ld text-white text-center">Here are some recommendations</h1>
                    <p className="leading-snug font-normal text-sm text-gray-400 text-opacity-50 text-center">
                        These recommendations are generated according to your profile
                    </p>
                </div>
                <div className="recommendations-section-container mt-12 w-fit mx-auto">
                    <div className="relative ">
                        {userDataRef.length!==0 ? userDataRef.map((recommenedUser, userIndex) => {
                            let recommendingUser = recommenedUser.data;
                            return (
                                <TinderCard onSwipe={onCardSwipe} preventSwipe={['up', 'down']} key={userIndex}>
                                    <div className="recommended-user-card absolute top-0 left-0 w-[380px] h-[240px] overflow-y-scroll overflow-x-hidden px-5 pr-24 pt-6 pb-6 flex flex-row items-start transition-all rounded-md bg-white text-black" >
                                        <div className="recommended-user-content-wrapper">
                                            {
                                                recommendingUser.login.toString().toLowerCase() === 'yashsehgal'
                                                    ? <p className="leading-snug text-sm px-4 py-1 font-semibold text-white bg-purple-900 w-fit h-fit rounded-full mb-4">The God</p>
                                                    : <React.Fragment></React.Fragment>
                                            }
                                            <img src={recommendingUser.avatar_url} 
                                                alt={`${recommendingUser.login}-avatar`} 
                                                className="w-24 h-24 rounded-full"
                                            />
                                            <h1 className="leading-snug text-lg text-black font-semibold mt-2">{recommendingUser.login}</h1>
                                            {
                                                recommendingUser.location 
                                                    ? <p className="leading-snug text-sm text-black">from {recommendingUser.location}</p>
                                                    : <React.Fragment></React.Fragment>
                                            }
                                            {
                                                recommendingUser.login.toString().toLowerCase() === 'yashsehgal'
                                                    ? <p className="leading-snug text-sm font-normal text-gray-500 mt-2">You don't have to swipe anywhere. The god has already been matched to your profile</p>
                                                    : <React.Fragment></React.Fragment>
                                            }
                                        </div>
                                    </div>
                                </TinderCard>
                                )
                            }) : <React.Fragment>
                                    <h1 className="leading-snug text-center text-white text-opacity-60 font-semibold mt-8 text-lg">
                                        No Recommendations Found
                                    </h1>
                                </React.Fragment>  
                            }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}