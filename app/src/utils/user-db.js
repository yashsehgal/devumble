import { getUserData } from '../api-middleware/github-api';

// Test user data base
const demoUserNames = ["yashsehgal", "ayushsoni1010", "shristigupta12", "atharvagadkari05"];

async function createDemoUserData() {
    let demoUserDB = [];
    for (let count = 0; count < demoUserNames.length; count++) {
        demoUserDB.push(await getUserData(demoUserNames[count]));
    }
    return await demoUserDB;
}

export { createDemoUserData };