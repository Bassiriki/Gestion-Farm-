const animalSchema = new mongoose.Schema({
    nom: String,
    type: String,
    date_naissance: Date,
    salle_traite_id: { type: mongoose.Schema.Types.ObjectId, ref: 'SalleTraite' },
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
  
  module.exports = mongoose.model('Animal', animalSchema);
  