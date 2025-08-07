import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="row p-5 mb-5" id="supportWrapper">
                <div className="col d-flex justify-content-between align-items-center" style={{marginInline: "1.8rem"}}>
                    <h3 className="m-0">Support Portal</h3>
                    <a href="#" className="m-0">Track Tickets</a>
                </div>
                <div className="row py-5 m-3">
                    <div className="col-5">
                        <h1 className="fs-3">
                            Search for an answer or browse help topics to create a ticket
                        </h1>
                        <input placeholder="Eg. how do I activate F&O" />
                        <br />
                        <a href="">Track account opening</a>
                        <a href="">Track segment activation</a>
                        <a href="">Intraday margins</a>
                        <a href="">Kite user manual</a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <h1 className="fs-3">Featured</h1>
                        <ol>
                            <li>
                                <a href="">Current Takeovers and Delisting - January 2024</a>
                            </li>
                            <li>
                                <a href="">Latest Intraday leverages - MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;