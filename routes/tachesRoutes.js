const express = require('express');
const router = express.Router();
const controller = require('../controllers/tachesController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/', auth, role('admin'), controller.create);
router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getById);
router.put('/:id', auth, role('admin'), controller.update);
router.delete('/:id', auth, role('admin'), controller.remove);

module.exports = router;
