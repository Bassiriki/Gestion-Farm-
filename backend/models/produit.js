const produitSchema = new mongoose.Schema({
    nom: String,
    type: String,
    quantite: Number,
    date_recolte: Date,
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' },
    id_recolte: { type: mongoose.Schema.Types.ObjectId, ref: 'Recolte' }
  });
  
  module.exports = mongoose.model('Produit', produitSchema);
  