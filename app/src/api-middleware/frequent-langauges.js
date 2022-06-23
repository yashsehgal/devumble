
const BASE_URL_FOR_REPOS = 'https://api.github.com/users/';

async function fetchAllRepositories(username=null) {
    if (!username) return;

    // fetching all the repositories of the 
    // particular username, for computing languages used
    let repositoriesArray = [];
    const res = await fetch(BASE_URL_FOR_REPOS + username + '/repos');
    const userRepositoriesResponse = await res.json();

    if (userRepositoriesResponse.message && userRepositoriesResponse.message.toLowerCase() === "not found") {
        return false;
    } else {
        userRepositoriesResponse.map((repos) => repositoriesArray.push(repos));
    }
    return userRepositoriesResponse;
}

function frequentLanguages(username=null) {
    if (!username) return;
}

export {
    frequentLanguages,
    fetchAllRepositories
}