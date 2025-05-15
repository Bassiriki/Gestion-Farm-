const router = require('express').Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createProduct);
router.get('/', auth, getProducts);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
