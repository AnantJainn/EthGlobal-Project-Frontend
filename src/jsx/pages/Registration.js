// import React,{useState} from "react";
// import { Link } from "react-router-dom";
// import { connect, useDispatch } from 'react-redux';
// import {
//     loadingToggleAction,
//     signupAction,
// } from '../../store/actions/AuthActions';
// // image
// import logo from "../../images/logo-full.png";

// function Register(props) {
//     const [email, setEmail] = useState('');
//     let errorsObj = { email: '', password: '' };
//     const [errors, setErrors] = useState(errorsObj);
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch();

//     function onSignUp(e) {
//         e.preventDefault();
//         let error = false;
//         const errorObj = { ...errorsObj };
//         if (email === '') {
//             errorObj.email = 'Email is Required';
//             error = true;
//         }
//         if (password === '') {
//             errorObj.password = 'Password is Required';
//             error = true;
//         }
//         setErrors(errorObj);
//         if (error) return;
//         dispatch(loadingToggleAction(true));
//         dispatch(signupAction(email, password, props.history));
//     }
//   return (
//     <div className="authincation h-100 p-meddle" style={{ backgroundColor: "#8DDA03" }}>
//       <div className="container h-100">
//         <div className="row justify-content-center h-100 align-items-center">
//           <div className="col-md-6">
//             <div className="authincation-content">
//               <div className="row no-gutters">
//                 <div className="col-xl-12">
//                   <div className="auth-form">
//                     <div className="text-center mb-3">
//                       <Link to="/login">
//                         <img src={logo} width={300} alt="" />
//                       </Link>
//                     </div>
//                     <h4 className="text-center mb-4 ">Sign up your account</h4>
// 					{props.errorMessage && (
// 						<div className=''>
// 							{props.errorMessage}
// 						</div>
// 					)}
// 					{props.successMessage && (
// 						<div className=''>
// 							{props.successMessage}
// 						</div>
// 					)}
//                     <form onSubmit={onSignUp}>
//                       <div className="form-group mb-3">
//                         <label className="mb-1 ">
//                           <strong>Username</strong>
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="username"
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label className="mb-1 ">
//                           <strong>Email</strong>
//                         </label>
//                         <input
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							className="form-control"
//                           placeholder="hello@example.com"
//                         />
//                       </div>
// 					  {errors.email && <div>{errors.email}</div>}
//                       <div className="form-group mb-3">
//                         <label className="mb-1 ">
//                           <strong>Password</strong>
//                         </label>
//                         <input
// 							value={password}
// 							onChange={(e) =>
// 								setPassword(e.target.value)
// 							}
//                           className="form-control"
//                           defaultValue="Password"
//                         />
//                       </div>
// 					  {errors.password && <div>{errors.password}</div>}
//                       <div className="text-center mt-4">
//                         <button
//                           type="submit"
//                           className="btn btn-primary btn-block"
//                           style={{ backgroundColor: '#FFE500', color: '#000' }}
//                         >
//                           Sign me up
//                         </button>
//                       </div>
//                     </form>
//                     <div className="new-account mt-3">
//                       <p className="">
//                         Already have an account?{" "}
//                         <Link className="text-primary" to="/login">
//                           Sign in
//                         </Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//     return {
//         errorMessage: state.auth.errorMessage,
//         successMessage: state.auth.successMessage,
//         showLoading: state.auth.showLoading,
//     };
// };

// export default connect(mapStateToProps)(Register);





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { sendOtp, verifyOtp, signUp } from "../../services/AuthService";
import { signupAction } from "../../store/actions/AuthActions";
import { useDispatch } from "react-redux";

// image
import logo from "../../images/logo_ww.png";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [step, setStep] = useState(1); // 1 for signup, 2 for OTP
    const [errors, setErrors] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();  
    const navigate = useNavigate();

    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return; // Allow only digits
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        // Auto-focus to next input
        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const validateInputs = () => {
        const errors = {};
        if (!username) errors.username = "Username is required";
        if (!email) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

     // Handle registration form submission
     const handleSignUp = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;

        try {
            setLoading(true);
            const response = await sendOtp(email); // Send OTP
            console.log("OTP sent:", response.message);
            setStep(2); // Move to OTP step
        } catch (error) {
            console.error("Error sending OTP:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle OTP verification and user registration
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const otpCode = otp.join(""); // Combine OTP array into a string
        if (otpCode.length !== 4) {
            alert("Please enter a valid 4-digit OTP");
            return;
        }

        try {
            setLoading(true);
            await verifyOtp(email, otpCode); // Verify OTP
            // console.log("OTP verified successfully!");

            // Register the user after OTP verification
            dispatch(signupAction(username, email, password, navigate));
            // console.log("User registered successfully!");
        } catch (error) {
            console.error("Error verifying OTP or registering user:", error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="authincation h-100 p-meddle" style={{ backgroundColor: "#8DDA03" }}>
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <div className="text-center mb-3">
                                            <Link to="/login">
                                                <img src={logo} width={300} alt="" />
                                            </Link>
                                        </div>
                                        <h4 className="text-center mb-4">
                                            {step === 1 ? "Sign up your account" : "Verify OTP"}
                                        </h4>
                                        {step === 1 ? (
                                            <form onSubmit={handleSignUp}>
                                                <div className="form-group mb-3">
                                                    <label className="mb-1 ">
                                                        <strong>Username</strong>
                                                    </label>
                                                    <input
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className="form-control"
                                                        placeholder="Username"
                                                    />
                                                    {errors.username && (
                                                        <div className="text-danger">{errors.username}</div>
                                                    )}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className="mb-1 ">
                                                        <strong>Email</strong>
                                                    </label>
                                                    <input
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="form-control"
                                                        placeholder="hello@example.com"
                                                    />
                                                    {errors.email && (
                                                        <div className="text-danger">{errors.email}</div>
                                                    )}
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label className="mb-1 ">
                                                        <strong>Password</strong>
                                                    </label>
                                                    <input
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Password"
                                                    />
                                                    {errors.password && (
                                                        <div className="text-danger">{errors.password}</div>
                                                    )}
                                                </div>
                                                <div className="text-center mt-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-block"
                                                        style={{ backgroundColor: "#FFE500", color: "#000" }}
                                                        disabled={loading}
                                                    >
                                                        {loading ? "Loading..." : "Sign me up"}
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <form onSubmit={handleVerifyOtp}>
                                                <div className="form-group mb-3">
                                                    <label className="mb-1 ">
                                                        <strong>Enter OTP</strong>
                                                    </label>
                                                    <div className="d-flex justify-content-between">
                                                        {otp.map((value, index) => (
                                                            <input
                                                                key={index}
                                                                id={`otp-${index}`}
                                                                type="text"
                                                                maxLength="1"
                                                                className="form-control otp-input text-center"
                                                                value={value}
                                                                onChange={(e) =>
                                                                    handleOtpChange(e.target.value, index)
                                                                }
                                                                onKeyDown={(e) => handleBackspace(e, index)}
                                                                style={{ width: "50px", margin: "0 5px" }}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-block"
                                                        style={{ backgroundColor: "#FFE500", color: "#000" }}
                                                        disabled={loading}
                                                    >
                                                        {loading ? "Verifying..." : "Verify OTP"}
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                        {step === 1 && (
                                            <div className="new-account mt-3">
                                                <p className="">
                                                    Already have an account?{" "}
                                                    <Link className="text-primary" to="/login">
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

