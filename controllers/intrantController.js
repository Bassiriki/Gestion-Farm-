const Model = require('../models/Intrant');

// CREATE
exports.create = async (req, res) => {
  try {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL
exports.getAll = async (req, res) => {
  try {
    const items = await Model.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ONE
exports.getById = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
