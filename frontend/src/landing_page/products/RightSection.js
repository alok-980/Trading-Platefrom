import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-7 order-2 order-md-1 text-center text-md-start mb-4 mb-md-0">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} className="text-decoration-none">
                        Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-12 col-md-5 order-1 order-md-2 text-center">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="img-fluid"
                        style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
