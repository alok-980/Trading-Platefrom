import React from "react";
import Home from "./Home";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return (
        <>
            <Home />
            <OpenAccount />
            <Brokerage />
        </>
    )
}

export default PricingPage;