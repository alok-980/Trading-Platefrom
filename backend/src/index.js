require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute.js");
const stockRoute = require("./routes/StockRoute.js");

const app = express();

const port = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));


app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

app.use("/auth", authRoute);
app.use("/", stockRoute);

const start = async () => {
    try {
        const connectionDb = await mongoose.connect(`${process.env.ATLASDB_URL}/zerodha`);
        console.log(`Mongo Connected DB HOST: ${connectionDb.connection.host}`);

        app.listen(port, () => {
            console.log(`Listening on PORT ${port}`);
        })
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

start();