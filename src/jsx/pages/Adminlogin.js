import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../services/AuthService";
import { loginAction } from "../../store/actions/AuthActions";
import { useDispatch } from "react-redux";
import {
  saveTokenInLocalStorage,
  formatError,
} from "../../services/AuthService";
// image
import logo from "../../images/logo_ww.png";
import loginbg from "../../images/pic1.png";

function adminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin login

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ethglobal-project-backend.onrender.com/api/v1/users")
      .then(() => console.log("Backend warmed up"))
      .catch((err) => console.error("Ping failed", err));
  }, []);

  const validateInputs = () => {
    let error = false;
    const errorObj = { email: "", password: "" };

    if (email === "") {
      errorObj.email = "Email is required";
      error = true;
    }

    if (password === "") {
      errorObj.password = "Password is required";
      error = true;
    } else if (password.length < 6) {
      errorObj.password = "Password must be at least 6 characters long";
      error = true;
    }

    setErrors(errorObj);
    return !error;
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    setLoading(true);

    // Dispatch loginAction
    // console.log("Dispatching loginAction...");
    dispatch(loginAction(email, password, navigate)).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="login-aside text-center  d-flex flex-column flex-row-auto">
        <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <div className="text-center mb-5 pt-5">
            <img src={logo} width={300} alt="" />
          </div>
          <h3 className="mb-2">Welcome back!</h3>
          <p>
            User Experience & Interface Design <br />
            Strategy SaaS Solutions
          </p>
        </div>
        <div
          className="aside-image"
          style={{ backgroundImage: "url(" + loginbg + ")" }}
        ></div>
      </div>
      <div
        className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
        style={{ backgroundColor: "#8DDA03" }}
      >
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div className="authincation-content style-2">
            <div className="row no-gutters">
              <div className="col-xl-12 tab-content">
                <div id="sign-in" className="auth-form   form-validation">
                  {errorMessage && (
                    <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                      {errorMessage}
                    </div>
                  )}
                  {successMessage && (
                    <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                      {successMessage}
                    </div>
                  )}
                  <form onSubmit={onLogin} className="form-validate">
                    <h3 className="text-center mb-4 text-black">
                      Sign in your account
                    </h3>
                    <div className="form-group mb-3">
                      <label
                        className="mb-1"
                        htmlFor="val-email"
                        style={{ color: "black" }}
                      >
                        <strong>Email</strong>
                      </label>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Type Your Email Address"
                        />
                      </div>
                      {errors.email && (
                        <div className="text-danger fs-12">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <label className="mb-1" style={{ color: "black" }}>
                        <strong>Password</strong>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        placeholder="Type Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && (
                        <div className="text-danger fs-12">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="text-center form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        style={{ backgroundColor: "#FFE500", color: "#000" }}
                        disabled={loading}
                      >
                        {loading ? "Signing In..." : "Sign In"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminLogin;
