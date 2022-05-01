
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

export { saveUserData_inLocalStorage_fromGitHub_forDevumbleProfile, getUserData_fromLocalStorage_forDevumbleProfile };