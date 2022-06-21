
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
            <div className="image-uploading-section-wrapper mt-12 w-fit h-fit mx-auto flex flex-roe items-center gap-6">
                <div className="w-32 h-40 rounded-md border border-dashed border-gray-500 text-gray-500 flex flex-row items-center justify-center hover:border-gray-300 hover:text-gray-300 cursor-pointer">
                    Add Photo
                </div>
                <div className="w-32 h-40 rounded-md border border-dashed border-gray-500 text-gray-500 flex flex-row items-center justify-center hover:border-gray-300 hover:text-gray-300 cursor-pointer">
                    Add Photo
                </div>
            </div>
            <div className="mt-8" />
            <button className="p-2 text-gray-500 font-normal text-sm block mx-auto hover:text-white"
                onClick={() => {
                    window.location.href = "/explore";                    
                }}
            >Skip the step</button>
        </div>
    )
}