
function checkIfStringNull(data=null) {
    if (!data) return false;
    if (data === "" || data === undefined || data === null || data === '\0') return false;
    return true;
}

export { checkIfStringNull };