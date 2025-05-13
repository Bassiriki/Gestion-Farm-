const composteSchema = new mongoose.Schema({
    produit_source: String,
    quantite: Number,
    date_creation: Date,
    champ_utilisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
  
  module.exports = mongoose.model('Composte', composteSchema);
  
  