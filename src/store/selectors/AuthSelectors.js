export const isAuthenticated = (state) => {
    // console.log("Checking isAuthenticated:", !!state.auth.auth.token);
    // console.log("Auth state:", state.auth.auth);
    if (state.auth.auth.token) return true; // Check for `token` instead of `idToken`
    return false;
};
