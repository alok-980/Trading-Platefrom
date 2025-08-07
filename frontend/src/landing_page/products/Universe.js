import React from "react";

function Universe() {
    const logos = [
        { src: "media/images/smallcaseLogo.png", alt: "Smallcase" },
        { src: "media/images/streakLogo.png", alt: "Streak" },
        { src: "media/images/sensibullLogo.svg", alt: "Sensibull" },
        { src: "media/images/zerodhaFundhouse.png", alt: "Zerodha Fundhouse" },
        { src: "media/images/goldenpiLogo.png", alt: "GoldenPi" },
        { src: "media/images/dittoLogo.png", alt: "Ditto" },
    ];

    return (
        <div className="container">
            <div className="text-center mb-5">
                <h1>The Zerodha Universe</h1>
                <p className="text-muted">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
            </div>
            <div className="row justify-content-center">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-4 col-lg-3 mb-4 text-center"
                    >
                        <div
                            className="logo-card p-3 border rounded"
                            style={{ backgroundColor: "#f9f9f9" }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="partner-logo img-fluid"
                                style={{ maxHeight: "100px", objectFit: "contain" }}
                            />
                            <p className="text-small text-muted mt-3">
                                Thematic investment platform
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button
                    type="button"
                    className="btn btn-primary px-4 py-2 fs-6 mb-5"
                    style={{ maxWidth: "200px", width: "100%" }}
                >
                    Sign up Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
