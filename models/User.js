 const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superviseur_ferme', 'superviseur_departement', 'employe'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
