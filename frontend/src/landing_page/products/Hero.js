import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row text-center border-bottom mt-5 p-3">
                <div className="col">
                    <h1 className="fs-3 fs-md-2">Technology</h1>
                    <h3 className="text-muted fs-5 fs-md-4 mt-3">
                        Sleek, modern and intuitive trading platforms
                    </h3>
                    <p className="mt-3 mb-5">
                        Check out our{" "}
                        <a href="" className="text-decoration-none">
                            investment offerings{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
