import React, { useState, useEffect } from "react";

import axios from "axios";

const Positions = () => {

    const [allPosition, setAllPosition] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/allPosition")
            .then((res) => {
                setAllPosition(res.data);
            }).catch(e => console.log(e));
    }, []);

    const fStyle = {fontSize: "15px", fontWeight: "bold"};

    return (
        <>
            <h3 className="title" style={{fontWeight: "bold"}}>Positions ({allPosition.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th style={fStyle}>Product</th>
                        <th style={fStyle}>Instrument</th>
                        <th style={fStyle}>Qty.</th>
                        <th style={fStyle}>Avg.</th>
                        <th style={fStyle}>LTP</th>
                        <th style={fStyle}>P&L</th>
                        <th style={fStyle}>Chg.</th>
                    </tr>

                    {allPosition.map((stock, index) => {
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                        const profitClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.product}</td>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td className={profitClass}>
                                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
};

export default Positions;