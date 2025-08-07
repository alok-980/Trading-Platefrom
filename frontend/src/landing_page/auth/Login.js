import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:8000/auth/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = "http://localhost:3000";
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const msg = params.get("message");
        if (msg === "not-logged-in") {
            toast.warning("You must be logged in to access dashboard", {
                position: "bottom-right",
            });
        }
    }, [location]);

   return (
  <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
    <div className="form_container col-12 col-sm-8 col-md-6 col-lg-4">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        <span className="d-block mt-2 text-center">
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer style={{ marginBottom: "3rem" }} />
    </div>
  </div>
);

};

export default Login;