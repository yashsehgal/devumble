import React, { useEffect, useState } from "react";
import { createDemoUserData } from "../utils/user-db";

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
    return (
        <React.Fragment>
            <div className="explore-page-wrapper screen-container">
                <div className="explore-page-hero__top-layer-wrapper">
                    <h1 className="leading-snug font-semibold text-ld text-white text-center">Here are some recommendations</h1>
                    <p className="leading-snug font-normal text-sm text-gray-400 text-opacity-50 text-center">
                        These recommendations are generated according to your profile
                    </p>
                </div>
                <div className="recommendations-section-container mt-12">
                    <div className="w-fit h-auto mx-auto">
                        {userDataRef.length!==0 ? userDataRef.map((recommenedUser, userIndex) => {
                            let recommendingUser = recommenedUser.data;
                            return (
                                <div className="recommended-user-card px-5 pr-24 pt-6 pb-3 flex flex-row items-start transition-all rounded-md bg-white text-black" 
                                    key={userIndex}
                                >
                                    <div className="recommended-user-content-wrapper">
                                        <img src={recommendingUser.avatar_url} 
                                            alt={`${recommendingUser.login}-avatar`} 
                                            className="w-24 h-24 rounded-full mx-auto"
                                        />
                                        <h1 className="leading-snug text-lg text-black font-semibold mt-2">{recommendingUser.login}</h1>
                                        {
                                            recommendingUser.location 
                                                ? <p className="leading-snug text-sm text-black">from {recommendingUser.location}</p>
                                                : <React.Fragment></React.Fragment>
                                        }
                                    </div>
                                </div>
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