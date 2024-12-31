const express = require('express');
const Order = require('../models/Order');
const { protect } = require('../middleWare/authMiddleware');
const router = express.Router();

// Create Order
router.post('/', protect, async (req, res) => {
    const { orderItems, totalPrice } = req.body;
    const order = new Order({
        user: req.user._id,
        orderItems,
        totalPrice,
    });

    await order.save();
    res.status(201).json(order);
});

// Get User Orders
router.get('/myorders', protect, async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
});

module.exports = router;
