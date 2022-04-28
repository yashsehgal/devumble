// api-middleware for all the frontend related API calls

const axios = require('axios');

const BASE_URL = 'https://api.github.com/';

async function getUserData(username=null) {
    if (!username) return;
    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();
    return githubResponse;
}

async function getUserRepositories(username=null) {
    if (!username) return;
    const res = await fetch(BASE_URL + `users/${username}/repos`);
    const githubResponse = await res.json();
    return githubResponse;
}

async function getUserProfilePhotoURL(username=null) {
    if (!username) return;
    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();
    return (githubResponse.avatar_url ? githubResponse.avatar_url : null);
}

async function getUserData_fromGitHub_forDevumbleProfile(username=null) {
    if (!username) return;
    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();

    const USER_DATA__FROM_GITHUB__FOR_DEVUMBLE_PROFILE = {
        username: githubResponse.username,
        displayName: githubResponse.name,
        avatar_url: githubResponse.avatar_url,
        connectionStatus: {
            followersCount: githubResponse.followers,
            followingCount: githubResponse.following
        },
        website: (githubResponse.blog !== "" || githubResponse.blog !== null) ? githubResponse.blog : null,
        location: (githubResponse.location !== "" || githubResponse.location !== null) ? githubResponse.location : null,
        githubProfileURL: (githubResponse.html_url !== "" || githubResponse.html_url !== null) ? githubResponse.html_url : null
    };

    return USER_DATA__FROM_GITHUB__FOR_DEVUMBLE_PROFILE;
}

export { getUserData, getUserRepositories, getUserProfilePhotoURL, getUserData_fromGitHub_forDevumbleProfile };