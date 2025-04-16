const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const multer = require('multer');
const path = require('path');
const { body, validationResult } = require('express-validator'); // Import express-validator

// Configuration for multer to handle file uploads
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload only images.'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
});

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = [
    // Validation using express-validator
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('description').notEmpty().withMessage('Description is required'),
    body('countInStock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
    body('category').notEmpty().withMessage('Category is required'),
    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation error', errors: errors.array() });
        }

        upload.single('image')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'Image upload failed', error: err.message });
            }

            try {
                const { name, price, description, category, countInStock } = req.body;

                const product = new Product({
                    name,
                    price,
                    user: req.user._id,
                    image: req.file ? `/uploads/${req.file.filename}` : '/images/sample.jpg',
                    category,
                    countInStock,
                    numReviews: 0,
                    description,
                });

                const createdProduct = await product.save();
                res.status(201).json(createdProduct);
            } catch (error) {
                console.error('Error creating product:', error);
                res.status(500).json({ message: 'Server error', error: error.message });
            }
        });
    }),
];

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = [
    // Validation using express-validator
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('description').optional().notEmpty().withMessage('Description is required'),
    body('countInStock').optional().isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
     body('category').optional().notEmpty().withMessage('Category is required'),
    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation error', errors: errors.array() });
        }
        upload.single('image')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'Image upload failed', error: err.message });
            }

            try {
                const { name, price, description, category, countInStock } = req.body;
                const product = await Product.findById(req.params.id);

                if (product) {
                    product.name = name || product.name;
                    product.price = price || product.price;
                    product.description = description || product.description;
                    product.image = req.file ? `/uploads/${req.file.filename}` : product.image;
                    product.category = category || product.category;
                    product.countInStock = countInStock || product.countInStock;

                    const updatedProduct = await product.save();
                    res.json(updatedProduct);
                } else {
                    res.status(404).json({ message: 'Product not found' });
                }
            } catch (error) {
                console.error('Error updating product:', error);
                res.status(500).json({ message: 'Server error', error: error.message });
            }
        });
    }),
];

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await product.deleteOne();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
