const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// GET /api/products (Public - no admin needed)
router.route('/').get(getProducts).post(protect, admin, createProduct); // Chain them
// GET /api/products/:id (Public - no admin needed)
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

module.exports = router;
