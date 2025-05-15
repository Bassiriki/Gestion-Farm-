const intrantSchema = new mongoose.Schema({
    nom: String,
    type: String,
    date_utilisation: Date,
    quantite: Number,
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
  
  module.exports = mongoose.model('Intrant', intrantSchema);
  