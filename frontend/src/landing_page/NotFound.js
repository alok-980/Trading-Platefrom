import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container py-5 mb-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                    <h1 className="mb-3">404 Not Found</h1>
                    <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
                    <Link to={'/'}>Go back to Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;