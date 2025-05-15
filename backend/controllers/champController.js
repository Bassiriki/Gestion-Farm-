 const Champ = require('../models/Champ');

// Créer un champ
exports.create = async (req, res) => {
  try {
    const champ = await Champ.create(req.body);
    res.status(201).json(champ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Lire tous les champs
exports.getAll = async (req, res) => {
  try {
    const champs = await Champ.find();
    res.json(champs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lire un champ par ID
exports.getById = async (req, res) => {
  try {
    const champ = await Champ.findById(req.params.id);
    if (!champ) return res.status(404).json({ message: 'Champ non trouvé' });
    res.json(champ);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un champ
exports.update = async (req, res) => {
  try {
    const champ = await Champ.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(champ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer un champ
exports.remove = async (req, res) => {
  try {
    await Champ.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
