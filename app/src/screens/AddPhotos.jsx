
import React, { useState } from "react";

import { getUserData_fromLocalStorage_forDevumbleProfile } from "../utils/local-storage";

export default function AddPhotos() {
    const [tempUserDataFromLocalStorageRef, setTempUserDataFromLocalStorage] = useState(getUserData_fromLocalStorage_forDevumbleProfile());
    return (
        <div className="add-photos-wrapper screen-container">
            <div className="hero-section-content-wrapper">
                <h1 className="text-center font-semibold text-white text-4xl leading-snug">
                    Great, now we want to see you <span className="gradient-text">{tempUserDataFromLocalStorageRef.data.displayName}</span>
                </h1>
                <p className="text-center text-sm text-gray-400 text-opacity-60 leading-snug">Adding a photo will make sure that people will see the actual YOU. Not your github profile. Get some attention and add a photo</p>
            </div>
        </div>
    )
}