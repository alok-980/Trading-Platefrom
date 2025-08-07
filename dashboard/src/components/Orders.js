import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = ({ userId }) => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/allOrders/${userId}`)
            .then((res) => {
                setAllOrder(res.data);
            }).catch(e => console.log(e));
    });

    const fStyle = {fontSize: "15px", fontWeight: "bold"};

    return (
        <div className="orders">
            <div className="no-orders">
                <p>You haven't placed any orders today</p>

                <Link to={"/"} className="btn" style={{marginBottom: "10px"}}>
                    Get started
                </Link>

                <h3 className="title" style={{textAlign: "left", width: "100%", fontWeight: "bold"}}>Orders ({allOrder.length})</h3>

                <div className="order-table" style={{width: "100%"}}>
                    <table>
                        <tr>
                            <th style={fStyle}>Product</th>
                            <th style={fStyle}>Qty.</th>
                            <th style={fStyle}>Price</th>
                            <th style={fStyle}>Mode</th>
                        </tr>

                        {allOrder.map((stock, index) => {

                            return (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.mode}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;