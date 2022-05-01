import React, { useState } from "react";
import { getUserData_fromLocalStorage_forDevumbleProfile } from "../utils/local-storage";

export default function CreateProfile() {
    const [tempUserDataFromLocalStorageRef, setTempUserDataFromLocalStorage] = useState(getUserData_fromLocalStorage_forDevumbleProfile());
    return (
        <React.Fragment>
            <div className="create-profile-wrapper screen-container">
                <div className="hero-section-wrapper">
                    <h1 className="text-center font-semibold text-white text-4xl leading-snug">
                        Welcome, <span className="gradient-text">{tempUserDataFromLocalStorageRef.data.username}</span>
                    </h1>
                    <p className="text-center text-sm text-gray-400 text-opacity-60 leading-snug">Create your developer dating profile. You can edit your details later, anytime.</p>
                </div>
                <div className="create-profile-form-section-wrapper flex flex-col items-center gap-3 mt-4">
                    <div className="image-content-wrapper flex flex-row items-center justify-center w-fit gap-4 mx-auto mt-3">
                        <div className="image-wrapper p-1 gradient rounded-full w-fit h-fit">
                            <img src={tempUserDataFromLocalStorageRef.data.avatar_url} alt={`profile-${tempUserDataFromLocalStorageRef.data.username}`}
                                className="rounded-full w-24 h-24 border-4 border-black"
                            />
                        </div>
                        <button className="text-white bg-white bg-opacity-0 text-sm hover:bg-opacity-30 px-2 py-1.5 rounded-md border border-white">
                            Edit Photo
                        </button>
                        <button className="text-white gradient text-sm font-semibold hover:bg-opacity-30 px-2 py-1.5 rounded-md">
                            Upload New Photo
                        </button>
                    </div>
                    <div className="display-name-input-wrapper flex flex-col items-start gap-1">
                        <label id="display-name" className="text-sm text-white font-semibold leading-snug">Display Name / Full Name</label>
                        <input className="px-2 py-1.5 rounded-md bg-transparent border border-gray-600 hover:border-gray-500 text-white w-auto" 
                            name="display-name" defaultValue={tempUserDataFromLocalStorageRef.data.displayName}
                        />
                    </div>
                    <div className="flex flex-row items-center gap-5 justify-between">
                        <div className="gender-input-wrapper flex flex-col items-start gap-1">
                            <label id="gender" className="text-sm text-white font-semibold leading-snug">Select your Gender Title</label>
                            <select className="px-2 py-1.5 rounded-md border bg-black border-gray-600 hover:border-gray-500 text-white w-auto">
                                <option value="none" selected disabled>Select</option>
                                <option value="he">He/Him</option>
                                <option value="she">She/Her</option>
                                <option value="they">They/Them</option>
                            </select>
                        </div>
                        <div className="location-input-wrapper flex flex-col items-start gap-1">
                            <label id="location" className="text-sm text-white font-semibold leading-snug">Location</label>
                            <input className="px-2 py-1.5 rounded-md bg-transparent border border-gray-600 hover:border-gray-500 text-white w-auto" 
                                name="location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}