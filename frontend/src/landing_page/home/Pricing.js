import React from "react";

function Pricing() {
    return (
        <div className="container p-4 p-md-5">
            <div className="row gy-5 align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="mb-3">Unbeatable pricing</h1>
                    <p>
                        We poineered the concept of discount and price trancprancy in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        See pricing{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 p-3 border">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-12 col-sm-6 p-3 border">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
