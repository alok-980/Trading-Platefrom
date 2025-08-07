import React, { useState, useEffect } from "react";

import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = ({ userId }) => {

    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
        if (!userId) return;

        axios.get(`http://localhost:8000/allHoldings/${userId}`)
            .then((res) => {
                setAllHoldings(res.data);
            }).catch(e => console.log(e));
    });

    const labels = allHoldings.map((subArray) => subArray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: allHoldings.map((stock) => stock.price),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    const fStyle = {fontSize: "15px", fontWeight: "bold"};

    return (
        <>
            <h3 className="title" style={{ fontWeight: "bold" }}>Holdings ({allHoldings.length})</h3>
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th style={fStyle}>Instrument</th>
                            <th style={fStyle}>Qty.</th>
                            <th style={fStyle}>Avg. cost</th>
                            <th style={fStyle}>LTP</th>
                            <th style={fStyle}>Cur. val</th>
                            <th style={fStyle}>P&L</th>
                            <th style={fStyle}>Net chg.</th>
                            <th style={fStyle}>Day chg.</th>
                        </tr>
                    </thead>

                    {allHoldings.map((stock, index) => {
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                        const profitClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{curValue.toFixed(2)}</td>
                                <td className={profitClass}>
                                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={profitClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p style={fStyle}>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p style={fStyle}>Current value</p>
                </div>
                <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p style={fStyle}>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data} />
        </>
    );
};

export default Holdings;