import React from "react";
import { createDemoUserData } from "../utils/user-db";

export default function Explore() {
    let userDataRef = createDemoUserData().then(res=> {
        console.log(res);
        userDataRef = res;
        console.log('res', userDataRef)
    })
    return (
        <React.Fragment>
            <div className="explore-page-wrapper screen-container">
                <div className="explore-page-hero__top-layer-wrapper">
                    <h1 className="leading-snug font-semibold text-ld text-white text-center">Here are some recommendations</h1>
                    <p className="leading-snug font-normal text-sm text-gray-400 text-opacity-50 text-center">
                        These recommendations are generated according to your profile
                    </p>
                </div>
                { typeof(userDataRef) }
            </div>
        </React.Fragment>
    )
}