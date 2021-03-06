
function saveDataToLocalStorage(data=null, location=null) { 
    if (!data || !location) return false;
    localStorage.setItem(location, data);
    return true;
}

function saveUserData_inLocalStorage_fromGitHub_forDevumbleProfile(data=null) {
    if (!data) return false;

    let profileData;
    if (localStorage.getItem('user-profile-data') === null) {
        profileData = [];
    } else {
        profileData = JSON.parse(localStorage.getItem('user-profile-data'));
    }

    profileData.push(data);
    localStorage.setItem('user-profile-data', JSON.stringify(profileData));
    return true;
}

function getUserData_fromLocalStorage_forDevumbleProfile() {
    return JSON.parse(localStorage.getItem('user-profile-data'))[
        JSON.parse(localStorage.getItem('user-profile-data')).length - 1
    ]
}

function setLoggedInStatus_toLocalStorage(status=false) {
    localStorage.setItem('isLoggedIn', status);
}

function getLoggedInStatus_fromLocalStorage() {
    return localStorage.getItem('isLoggedIn');
}

export { 
    saveUserData_inLocalStorage_fromGitHub_forDevumbleProfile, 
    getUserData_fromLocalStorage_forDevumbleProfile, 
    setLoggedInStatus_toLocalStorage,
    getLoggedInStatus_fromLocalStorage,
    saveDataToLocalStorage,
};