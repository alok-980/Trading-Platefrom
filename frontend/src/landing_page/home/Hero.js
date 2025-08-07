import React from "react";

function Hero() {
    return (
        <div className="container py-5 mb-5">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero"
                        className="img-fluid mb-4"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                    <h1 className="mb-3 fs-2 fs-md-1">Invest in everything</h1>
                    <p className="mb-4 fs-6 fs-md-5">
                        Online platform to invest in stocks, derivatives, mutual funds, and more.
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary px-4 py-2 fs-6"
                        style={{ maxWidth: "200px", width: "100%" }}
                    >
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
