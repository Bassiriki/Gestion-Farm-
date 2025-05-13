 const mongoose = require('mongoose');

const champSchema = new mongoose.Schema({
  nom: String,
  type: String,
  typeChamp: Number,
  superficie: Number,
  localisation: String
});

module.exports = mongoose.model('Champ', champSchema);
