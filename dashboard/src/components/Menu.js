import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Menu = ({ username }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [cookies, removeCookie] = useCookies([]);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        removeCookie("token");
        window.location.href = "http://localhost:3001/login"; // or /login
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <img src="/logo.png" alt="logo" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/apps" onClick={() => handleMenuClick(5)} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                                Apps
                            </p>
                        </Link>
                    </li>
                </ul>

                <hr />

                <div className="profile" style={{ position: "relative" }}>
                    <div className="avatar" onClick={handleProfileClick} style={{ cursor: "pointer", padding: "6px" }}>
                        ZU &nbsp;
                        {
                            isProfileDropdownOpen ? 
                                <i className="fa-solid fa-caret-down" style={{ fontSize: "15px"}}></i> :
                                <i className="fa-solid fa-caret-down fa-rotate-270" style={{ fontSize: "15px"}}></i>
                        }
                    </div>
                    <p className="username">{username ? username : "Guest" }</p>

                    {isProfileDropdownOpen && (
                        <div className="dropdown" style={{
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            background: "white",
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "4px",
                            zIndex: 1000,
                            width: "8rem"
                        }}>
                            <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                                {username ? "Logout" : "Login"}
                            </div>
                            <p>Get Help</p>
                            <p>About</p>
                            <p>Term & Conditions</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
