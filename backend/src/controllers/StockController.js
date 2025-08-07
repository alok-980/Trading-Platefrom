const { PositionModel } = require("../model/PositionModel.js");
const { HoldingModel } = require("../model/HoldingModel.js");
const { OrderModel } = require("../model/OrderModel.js");
const { User } = require("../model/UserModel.js");

module.exports.allHolding = async (req, res) => {
    const userHoldings = await HoldingModel.find({ owner: req.params.userId });
    res.json(userHoldings);
}

module.exports.allPosition = async (req, res) => {
    let allPosition = await PositionModel.find({});
    res.json(allPosition);
}

module.exports.allOrder = async (req, res) => {
    let allOrder = await OrderModel.find({ owner: req.params.userId });
    res.json(allOrder);
}

module.exports.newOrder = async (req, res) => {
    try {
        const userId = req.body.owner;

        let user = await User.findById(userId);

        let newOrder = new OrderModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
            owner: userId,
        });

        await newOrder.save();

        let existingHolding = await HoldingModel.findOne({
            owner: userId,
            name: req.body.name,
        });

        if (existingHolding) {
            const totalQty = Number(existingHolding.qty) + Number(req.body.qty);
            const newAvg = ((Number(existingHolding.avg) * Number(existingHolding.qty)) + (Number(req.body.price) * Number(req.body.qty))) / totalQty;

            existingHolding.qty = totalQty;
            existingHolding.avg = newAvg;

            await existingHolding.save();
        } else {
            let newHolding = new HoldingModel({
                name: req.body.name,
                qty: req.body.qty,
                avg: req.body.price,
                price: req.body.price,
                owner: userId,
                net: "+0.58%",
                day: "+2.99%"
            });

            await newHolding.save();

            user.holdings.push(newHolding);
            await user.save();
        }

        res.send("Order saved");
    } catch (error) {
        console.error("Error saving order or holding:", error);
        res.status(500).send("Failed to save order");
    }
};

module.exports.sellShears = async (req, res) => {
    try {
        const userId = req.body.owner;
        const stockName = req.body.name;
        const sellQty = Number(req.body.qty);
        const sellPrice = Number(req.body.price);

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newOrder = new OrderModel({
            name: stockName,
            qty: sellQty,
            price: sellPrice,
            mode: req.body.mode,
            owner: userId,
        });
        await newOrder.save();

        const existingHolding = await HoldingModel.findOne({
            owner: userId,
            name: stockName,
        });

        if (!existingHolding) {
            return res.status(400).json({ message: "Holding not found for this stock" });
        }

        if (existingHolding.qty < sellQty) {
            return res.status(400).json({ message: "Not enough quantity to sell" });
        }

        existingHolding.qty -= sellQty;

        if (existingHolding.qty === 0) {
            await HoldingModel.deleteOne({ _id: existingHolding._id });

            // Also remove from user.holdings array
            user.holdings = user.holdings.filter(
                (holdingId) => holdingId.toString() !== existingHolding._id.toString()
            );
            await user.save();
        } else {
            await existingHolding.save();
        }

        return res.json({ message: "Shares sold successfully" });

    } catch (error) {
        console.error("Error in sellShears:", err);
        return res.status(500).json({ message: "Server error" });
    }
}