const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const mongoose = require('mongoose');

// Add to Cart
const addToCart = asyncHandler(async (req, res) => {
  let { productId } = req.body;
  const user = req.user._id;

  console.log("Received productId:", productId);

  if (!productId) {
    res.status(400);
    throw new Error('Product ID is required');
  }

  let objectIdProductId;
  try {
    objectIdProductId = mongoose.Types.ObjectId.isValid(productId)
      ? new mongoose.Types.ObjectId(productId)
      : productId;
  } catch (error) {
    res.status(400);
    throw new Error('Invalid Product ID');
  }

  const productDoc = await Product.findById(objectIdProductId);
  if (!productDoc) {
    res.status(404);
    throw new Error('Product not found');
  }

  let cart = await Cart.findOne({ user });

  if (!cart) {
    cart = await Cart.create({
      user,
      cartItems: [{ product: objectIdProductId }],
    });
    return res.status(201).json(cart);
  }

  const existingItemIndex = cart.cartItems.findIndex(
    (item) => item.product.toString() === objectIdProductId.toString()
  );

  if (existingItemIndex === -1) {
    cart.cartItems.push({ product: objectIdProductId });
  }

  await cart.save();
  res.status(200).json(cart);
});

// Get Cart
const getCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const cart = await Cart.findOne({ user: userId }).populate({
    path: 'cartItems.product',
    select: 'name price image',
  });

  if (!cart) {
    return res.status(200).json({ user: userId, cartItems: [] });
  }

  res.status(200).json(cart);
});

// ✅ Remove from Cart
const removeFromCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const productId = req.params.productId;

  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  cart.cartItems = cart.cartItems.filter(
    (item) => item.product.toString() !== productId
  );

  await cart.save();

  res.status(200).json({ message: 'Item removed from cart' });
});

module.exports = {
  addToCart,
  getCart,
  removeFromCart, // ✅ Add this export
};
