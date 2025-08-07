import React from "react";

function CreateTicket() {
    const topics = [
        [
            "Online Account Opening",
            "Offline Account Opening",
            "Company, Partnership and HUF Account",
            "Opening",
            "NRI Account Opening",
            "Charges at Zerodha",
            "Zerodha IDFC FIRST Bank 3-in-1 Account",
            "Getting Started"
        ],
        [
            "Login Credentials",
            "Account Modification and Segment Addition",
            "DP ID and bank details",
            "Your profile",
            "Transfer and conversion of shears"
        ],
        [
            "Margin/Leverage, product and order types",
            "Kite web and mobile",
            "Trading FAQs",
            "Corporate Actions",
            "Sentinal",
            "Kite API",
            "Pi and other platform",
            "Stockreports+",
            "GIT"
        ],
        [
            "Adding funds",
            "Fund Withdrawal",
            "eMandates",
            "Adding Bank Accounts"
        ],
        [
            "Reports",
            "Ledger",
            "Portfolio",
            "60 Day Challange",
            "IPO",
            "Referral Program"
        ],
        [
            "Understanding Mutual Funds",
            "About Coin",
            "Buying and Selling through coin",
            "Starting an SIP",
            "Managing your portfolio",
            "Coin App",
            "Moving to coin",
            "Goverment Securities"
        ]
    ];

    const sections = [
        { icon: "fa fa-plus-circle", title: "Account Opening" },
        { icon: "fa-solid fa-user", title: "Your Zerodha Account" },
        { icon: "fa-solid fa-chart-column", title: "Your Zerodha Account" },
        { icon: "fa-solid fa-credit-card", title: "Funds" },
        { icon: "fa-solid fa-circle-notch", title: "Console" },
        { icon: "fa-brands fa-bitcoin fa-flip", title: "Coin" }
    ];

    return (
        <div className="container">
            <div className="row p-5 mt-4 mb-5">
                <h2 className="fs-3 fw-semibold mb-5 px-5">
                    To create a ticket, select a relevant topic
                </h2>

                {sections.map((section, index) => (
                    <div className="col-md-4 col-sm-6 mb-5 px-5" key={index}>
                        <h4 className="fs-5 mb-3">
                            <i className={`${section.icon} me-2`} aria-hidden="true"></i>
                            {section.title}
                        </h4>
                        {topics[index]?.map((topic, idx) => (
                            <a
                                href="#"
                                key={idx}
                                className="d-block mb-2 text-decoration-none"
                                style={{ lineHeight: "1.8" }}
                            >
                                {topic}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateTicket;
