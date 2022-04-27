
const UserProfile = require('../interfaces/UserProfile');

export default class UserAuthentication {
    createUser = async function (req_data, res, user_id=null, toValidate=false) {
        let _NEW_USER_ENTRY = new UserProfile;
        _NEW_USER_ENTRY = { ...req_data };
    };
};