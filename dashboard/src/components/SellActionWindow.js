import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, userId }) => {
    const [stockQuantity, setStockQuantity] = useState(0);
    const [stockPrice, setStockPrice] = useState(0.0);
    // const [orderID, setOrderId] = useState("");

    const { closeSellWindow } = useContext(GeneralContext);

    const handleSellClick = async () => {
        try {
            await axios.post(`http://localhost:8000/sellOrder`, {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL",
                owner: userId
            })

            closeSellWindow();
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    const handleCancelClick = () => {
        closeSellWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(Number(e.target.value))}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(Number(e.target.value))}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleSellClick} style={{backgroundColor: "red"}}>
                        Sell
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;