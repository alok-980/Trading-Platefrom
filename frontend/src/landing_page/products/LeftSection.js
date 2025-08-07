import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="img-fluid"
                        style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                </div>
                <div className="col-12 col-md-7">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                        <a
                            href={tryDemo}
                            style={{ marginRight: "50px", textDecoration: "none" }}
                        >
                            Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} style={{ textDecoration: "none" }}>
                            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <a href={googlePlay} style={{ marginRight: "50px" }}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="googlePlay logo"
                                style={{ maxHeight: "50px" }}
                            />
                        </a>
                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="appStore logo"
                                style={{ maxHeight: "50px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
