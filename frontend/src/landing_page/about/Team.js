import React from "react";
import { Link } from "react-router-dom";

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <div className="col">
                    <h1 className="text-center">People</h1>
                </div>
            </div>

            <div
                className="row p-3 text-muted align-items-center gy-4"
                style={{ lineHeight: "1.8", fontSize: "1.1em" }}
            >
                <div className="col-12 col-md-6 p-3 text-center">
                    <img
                        src="media/images/myImg.png"
                        alt="Alok Chauhan"
                        className="img-fluid"
                        style={{ borderRadius: "100%", width: "60%", maxWidth: "200px" }}
                    />
                    <h4 className="mt-4">Alok Chauhan</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on&nbsp;
                        <Link style={{ textDecoration: "none" }} to="/">
                            Homepage
                        </Link>{" "}
                        /&nbsp;
                        <Link style={{ textDecoration: "none" }} to="">
                            TradingQnA
                        </Link>{" "}
                        /&nbsp;
                        <Link style={{ textDecoration: "none" }} to="">
                            Twitter
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
