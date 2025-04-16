const express = require('express');
const router = express.Router();
const { authUser, registerUser, getUserProfile } = require('../controllers/userController');//make sure registerUser is imported
const { protect } = require('../middleware/authMiddleware');


router.post('/login', authUser);
router.post('/register', registerUser); 
router.get('/profile', protect, getUserProfile);
module.exports = router;