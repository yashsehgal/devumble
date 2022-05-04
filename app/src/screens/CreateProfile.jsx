import React, { useState } from "react";
import { getUserData_fromLocalStorage_forDevumbleProfile, saveDataToLocalStorage } from "../utils/local-storage";

import { checkIfStringNull } from "../utils/NullCheck";

import { ToastContainer, toast } from 'react-toastify';

export default function CreateProfile() {
    const [tempUserDataFromLocalStorageRef, setTempUserDataFromLocalStorage] = useState(getUserData_fromLocalStorage_forDevumbleProfile());
    const notifier = (message, type) => {
        switch(type) {
            case "success": 
                toast.success(message, {
                    position: toast.POSITION.TOP_CENTER
                });
            break;
            case "warning":
                toast.warn(message, {
                    position: toast.POSITION.TOP_LEFT
                });
            break;
            case "error":
                toast.error(message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            break;
            case "info":
                toast.info(message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            break;
            default:
                toast(message, {
                    className: 'react-toastify__dark'
                });
            break;
        }
    }
    return (
        <React.Fragment>
            <div className="create-profile-wrapper screen-container -mt-6">
                <div className="hero-section-wrapper">
                    <h1 className="text-center font-semibold text-white text-4xl leading-snug">
                        Welcome, <span className="gradient-text">{tempUserDataFromLocalStorageRef.data.username}</span>
                    </h1>
                    <p className="text-center text-sm text-gray-400 text-opacity-60 leading-snug">Create your developer dating profile. You can edit your details later, anytime.</p>
                </div>
                <div className="create-profile-form-section-wrapper flex flex-col w-fit mx-auto items-start gap-3 mt-4">
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
                    <div className="display-name-input-wrapper flex flex-col items-start gap-1 w-full">
                        <label id="display-name" className="text-sm text-white leading-snug">Display Name / Full Name</label>
                        <input className="px-2 py-1.5 rounded-md bg-transparent border border-gray-600 w-full hover:border-gray-500 text-white" 
                            name="display-name" defaultValue={tempUserDataFromLocalStorageRef.data.displayName} 
                            id="create-profile__display-name-input"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center justify-between w-full">
                        <div className="gender-input-wrapper flex flex-col items-start gap-1">
                            <label id="gender" className="text-sm text-white leading-snug">Select your Gender</label>
                            <select className="px-2 py-1.5 rounded-md border bg-black border-gray-600 hover:border-gray-500 text-white w-auto" required
                                id="create-profile__gender-title-input"
                            >
                                <option value="none" selected disabled>Select</option>
                                <option value="he">He/Him</option>
                                <option value="she">She/Her</option>
                                <option value="they">They/Them</option>
                                <option value="not-specified">Rather not mention</option>
                            </select>
                        </div>
                        <div className="location-input-wrapper flex flex-col items-start gap-1">
                            <label id="location" className="text-sm text-white leading-snug">Location</label>
                            <input className="px-2 py-1.5 rounded-md bg-transparent border border-gray-600 hover:border-gray-500 text-white w-auto" 
                                name="location" 
                                id="create-profile__location-input"
                                required
                            />
                        </div>
                    </div>
                    <button role="submit" className="py-2 w-full rounded-md gradient text-white font-normal text-sm"
                        onClick={() => {
                            if (!checkIfStringNull(document.getElementById("create-profile__location-input").value)) {
                                notifier("Please provide your location", "error");
                            }
                            if (!checkIfStringNull(document.getElementById("create-profile__display-name-input").value)) {
                                notifier("Please create a display name for your profile. HINT: Keep it short and cool", "error");
                            }
                            if (checkIfStringNull(document.getElementById('create-profile__location-input').value)
                                && checkIfStringNull(document.getElementById("create-profile__display-name-input").value)) {
                                    // WRITE METHOD TO UPDATE AND STORE THE USER PROFILE DATA
                                    let profileDisplayName_Updated = document.getElementById('create-profile__display-name-input').value;
                                    let profileLocation_Updated = document.getElementById("create-profile__location-input").value;
                                    let profileGenderTitle_Updated;

                                    switch (document.getElementById('create-profile__gender-title-input').value) {
                                        case "he":
                                            profileGenderTitle_Updated = "he";
                                        break;
                                        case "she":
                                            profileGenderTitle_Updated = "she";
                                        break;
                                        case "they":
                                            profileGenderTitle_Updated = "they";
                                        break;
                                        case "not-specified":
                                            profileGenderTitle_Updated = "not-specified";
                                        break;
                                        default:
                                            profileGenderTitle_Updated = null;
                                            notifier("Please select your gender", "warning");
                                        break;
                                    }

                                    let updatedProfileData = {
                                        displayName: profileDisplayName_Updated,
                                        location: profileLocation_Updated,
                                        gender: profileGenderTitle_Updated ? profileGenderTitle_Updated : null
                                    };

                                    if (updatedProfileData.gender) {
                                        if (saveDataToLocalStorage(updatedProfileData, "devumble-profile-data")) {
                                            notifier("Profile Data Saved", "success");
                                            setTimeout(() => {
                                                window.location.href = "/upload-photos";
                                            }, 1000);
                                        } else {
                                            notifier("Something went wrong", "error");
                                        }
                                    }
                            }
                        }}
                    >
                        Save and Continue
                    </button>
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>
    )
}