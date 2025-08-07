import React, { useState } from "react";

function OpenAccount() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="container py-5 mb-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                    <h1 className="mb-3">Open a Zerodha account</h1>
                    <p className="mb-4">
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>

                    <button
                        type="button"
                        className="btn btn-primary px-4 py-2 fs-6 mb-3"
                        style={{ maxWidth: "200px", width: "100%" }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-expanded={isCollapsed}
                        aria-controls="extraInfo"
                    >
                        {isCollapsed ? "Hide Details" : "Show Details"}
                    </button>

                    <div
                        className={`collapse ${isCollapsed ? "show" : ""}`}
                        id="extraInfo"
                    >
                        <div className="card card-body text-start mt-3">
                            <p>
                                Enjoy zero brokerage on investments and access to powerful trading
                                platforms with a seamless experience on mobile and web.
                            </p>
                            <p>Sign up today and start investing smartly!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
