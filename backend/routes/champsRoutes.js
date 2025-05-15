const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

 
router.post('/', auth, role('admin', 'superviseur_ferme'), champController.create);

// 🔵 Récupérer tous les champs
router.get('/', auth, champController.getAll);

// 🔍 Récupérer un champ par ID
router.get('/:id', auth, champController.getById);

// ✏️ Modifier un champ (admin uniquement)
router.put('/:id', auth, role('admin'), champController.update);

// ❌ Supprimer un champ (admin uniquement)
router.delete('/:id', auth, role('admin'), champController.remove);

module.exports = router;
