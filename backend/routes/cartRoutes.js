const express = require('express');
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addToCart);
router.get('/', protect, getCart);

// ✅ Add this route to remove a product from the cart
router.delete('/:productId', protect, removeFromCart);

module.exports = router;
