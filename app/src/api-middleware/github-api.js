// api-middleware for all the frontend related API calls

const axios = require('axios');

const BASE_URL = 'https://api.github.com/';

async function getUserData(username=null) {
    if (!username) return;
    let response = {
        data: null,
        message: null
    }
    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();

    if (githubResponse.message && githubResponse.message.toLowerCase() === "not found") {
        response = {
            data: null,
            message: false
        }
    } else {
        response = {
            data: githubResponse,
            message: true
        }
    }
    return response;
}

async function getUserRepositories(username=null) {
    if (!username) return;
    let response = {
        data: null,
        message: false
    };
    
    const res = await fetch(BASE_URL + `users/${username}/repos`);
    const githubResponse = await res.json();

    if (githubResponse.message && githubResponse.message.toLowerCase() === "not found") {
        response = {
            data: null,
            message: false
        }
    } else {
        response = {
            data: githubResponse,
            message: true
        }
    }

    return response;
}

async function getUserProfilePhotoURL(username=null) {
    if (!username) return;
    let response = {
        data: null,
        message: false
    };

    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();
    
    if (githubResponse.message && githubResponse.message.toLowerCase() === "not found") {
        response = {
            data: null,
            message: false
        }
    } else {
        response = {
            data: (githubResponse.avatar_url ? githubResponse.avatar_url : null),
            message: true
        }
    }

    return response;
}

async function getUserData_fromGitHub_forDevumbleProfile(username=null) {
    if (!username) return;
    let response = {
        data: null,
        message: false
    };

    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();

    if (githubResponse.message && githubResponse.message === "not found") {
        response = {
            data: null,
            message: false
        }
    } else {
        response = {
            data: {
                username: githubResponse.login,
                displayName: githubResponse.name,
                avatar_url: githubResponse.avatar_url,
                connectionStatus: {
                    followersCount: githubResponse.followers,
                    followingCount: githubResponse.following
                },
                website: (githubResponse.blog !== "" || githubResponse.blog !== null) ? githubResponse.blog : null,
                location: (githubResponse.location !== "" || githubResponse.location !== null) ? githubResponse.location : null,
                githubProfileURL: (githubResponse.html_url !== "" || githubResponse.html_url !== null) ? githubResponse.html_url : null
            },
            message: true
        }
    }
    
    return response;
}

export { getUserData, getUserRepositories, getUserProfilePhotoURL, getUserData_fromGitHub_forDevumbleProfile };