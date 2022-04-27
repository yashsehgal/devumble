interface UserProfile {
    firstName: String | null,
    lastName: String | null,
    username: String | null,
    twitterAuth_response: Object | ArrayBuffer,
    location: String | Object | null,
    description: String | {
        descriptionContent: {
            textContent: String,
            tags: ArrayBuffer | Object | null
        } | null,
    } | null,
    isLoggedIn: Boolean | false,
};

export { UserProfile };