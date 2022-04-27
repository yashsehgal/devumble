// api-middleware for all the frontend related API calls

const axios = require('axios');

const BASE_URL = 'https://api.github.com/';

async function getUserData(username=null) {
    if (!username) return;
    const res = await fetch(BASE_URL + `users/${username}`);
    const githubResponse = await res.json();
    return githubResponse;
}

export { getUserData };