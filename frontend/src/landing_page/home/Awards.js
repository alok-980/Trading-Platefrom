import React from "react";

function Award() {
    return (
        <div className="container py-5 mt-5">
            <div className="row align-items-center gy-5">
                <div className="col-12 col-md-6 px-4 text-center text-md-start">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="Largest Broker"
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-6 px-4">
                    <h1 className="mb-3">Largest stock broker in India</h1>
                    <p className="mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row mb-4">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="media/images/pressLogos.png"
                        alt="Press Logos"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default Award;
