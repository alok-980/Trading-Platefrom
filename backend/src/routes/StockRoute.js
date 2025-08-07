const { allHolding, allPosition, newOrder, allOrder, sellShears } = require("../controllers/StockController.js");
const router = require("express").Router();

router.get("/allHoldings/:userId", allHolding);
router.get("/allPosition", allPosition);
router.get("/allOrders/:userId", allOrder);
// router.get("/order/:orderId", orderId);
router.post("/newOrder", newOrder);
router.post("/sellOrder", sellShears);

module.exports = router;