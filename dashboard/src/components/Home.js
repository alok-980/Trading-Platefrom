import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                window.location.href = "http://localhost:3001/login?message=not-logged-in";
                return;
            }
            try {
                const { data } = await axios.post(
                    "http://localhost:8000/auth",
                    {},
                    { withCredentials: true }
                );
                const { status, user } = data;
                if (!status) {
                    removeCookie("token");
                    window.location.href = "http://localhost:3001/login?message=not-logged-in";
                } else {
                    setUsername(user.username);
                    setUserId(user._id);
                    toast(`Welcome ${user.username}`, {
                        position: "top-right",
                    });
                }
            } catch (error) {
                console.error(error);
                removeCookie("token");
                window.location.href = "http://localhost:3001/login?message=not-logged-in";
            }
        };
        verifyCookie();
    }, []);
    // cookies, navigate, removeCookie this is inside dependency array

    return (
        <>
            <ToastContainer />
            <TopBar username={username} />
            <Dashboard username={username} userId={userId} />
        </>
    );
};

export default Home;