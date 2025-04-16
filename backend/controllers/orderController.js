  const asyncHandler = require('express-async-handler');
  const Order = require('../models/orderModel');
  const nodemailer = require('nodemailer');

  // @desc    Create new order
  // @route   POST /api/orders
  // @access  Private
  const addOrderItems = asyncHandler(async (req, res) => {
    const {
      orderItems,
      itemsPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items');
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        itemsPrice,
        totalPrice,
      });

      const createdOrder = await order.save();

      res.status(201).json(createdOrder);
    }
  });

  // @desc    Get order by ID
  // @route   GET /api/orders/:id
  // @access  Private
  const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  });

  const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  });

  const sendPaymentEmail = async (order, user) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Order Payment Confirmation',
      text: `Your order ($order._id) has been paid. Order Details: ${JSON.stringify(order.orderItems)}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Payment confirmation email sent.');
    } catch (error) {
      console.error('Error sending payment confirmation email:', error);
    }
  };

  const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();

      const updatedOrder = await order.save();

      sendPaymentEmail(updatedOrder, order.user); // Send email

      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  });

  const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  });

  module.exports = {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    updateOrderToDelivered,
  };
