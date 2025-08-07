import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row border-top p-4'>
                {/* Left section */}
                <div className='col-12 col-md-8 text-md-center text-start mb-4 mb-md-0 p-3'>
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5 mb-4">Brokerage calculator</h3>
                    </a>
                    <ul
                        style={{ lineHeight: "2", fontSize: "14px" }}
                        className="text-muted"
                    >
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, will be charged ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>

                {/* Right section */}
                <div className='col-12 col-md-4 p-3'>
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5 mb-4">List of charges</h3>
                    </a>
                    {/* Additional content can go here */}
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
