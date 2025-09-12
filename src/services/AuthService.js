import axios from "axios";
import swal from "sweetalert";
import { loginConfirmedAction, Logout } from "../store/actions/AuthActions";

// Node.js backend endpoints
const BASE_URL = "https://enfros-solutions-backend-1.onrender.com/api/v1";

/**
 * Format and display error messages.
 * @param {object} error - The error object from Axios.
 */
export function formatError(error) {
    if (!error.response) {
        swal("Oops", "Network error or server is unreachable", "error");
        return;
    }

    const errorMessage = error.response.data.message || "An unknown error occurred";

    switch (errorMessage) {
        case "EMAIL_EXISTS":
            swal("Oops", "Email already exists", "error");
            break;
        case "EMAIL_NOT_FOUND":
            swal("Oops", "Email not found", "error", { button: "Try Again!" });
            break;
        case "INVALID_PASSWORD":
            swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
            break;
        case "USER_DISABLED":
            swal("Oops", "This user has been disabled", "error");
            break;
        default:
            swal("Oops", errorMessage, "error");
    }
}

/**
 * Login API call.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 */
export async function login(email, password) {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, { email, password });
        return response.data;
    } catch (error) {
        formatError(error);
        throw error; // Rethrow for further handling if needed
    }
}

/**
 * Send OTP to the user's email.
 * @param {string} email - The user's email.
 */
export async function sendOtp(email) {
    try {
        const response = await axios.post(`${BASE_URL}/otp/send-otp`, { email });
        return response.data;
    } catch (error) {
        formatError(error);
        throw error;
    }
}

/**
 * Verify OTP sent to the user's email.
 * @param {string} email - The user's email.
 * @param {string} otp - The OTP entered by the user.
 */
export async function verifyOtp(email, otp) {
    try {
        const response = await axios.post(`${BASE_URL}/otp/verify-otp`, { email, otp });
        return response.data;
    } catch (error) {
        formatError(error);
        throw error;
    }
}

/**
 * Register a new user.
 * @param {string} username - The user's name.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 */
export async function signUp(username, email, password) {
    try {
        const response = await axios.post(`${BASE_URL}/users/signup`, { name: username, email, password });
        return response.data;
    } catch (error) {
        formatError(error);
        throw error;
    }
}

/**
 * Save token in localStorage.
 * @param {object} tokenDetails - The token details returned from the server.
 */
export function saveTokenInLocalStorage(tokenDetails) {
    if (!tokenDetails || !tokenDetails.token) {
        console.error("Invalid token details:", tokenDetails);
        return;
    }

    const expiresIn = tokenDetails.expiresIn || 3600; // Default to 1 hour
    const expireDate = new Date(Date.now() + expiresIn * 1000);

    localStorage.setItem("userDetails", JSON.stringify({
        ...tokenDetails,
        expireDate,
    }));
    localStorage.setItem("token", tokenDetails.token);

    // console.log("Saving token in localStorage:", tokenDetails);
}


/**
 * Auto-login user if token exists and is valid.
 * @param {function} dispatch - Redux dispatch function.
 * @param {function} navigate - React Router navigation function.
 */
export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem("userDetails");
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
        return;
    }

    const tokenDetails = JSON.parse(tokenDetailsString);
    const expireDate = new Date(tokenDetails.expireDate);
    if (Date.now() > expireDate.getTime()) {
        dispatch(Logout(navigate));
        return;
    }

    dispatch(loginConfirmedAction(tokenDetails));
    const timer = expireDate.getTime() - Date.now();
    runLogoutTimer(dispatch, timer, navigate);
}

/**
 * Automatically log out the user after the token expires.
 * @param {function} dispatch - Redux dispatch function.
 * @param {number} timer - Time in milliseconds until the token expires.
 * @param {function} navigate - React Router navigation function.
 */
export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        dispatch(Logout(navigate));
    }, timer);
}