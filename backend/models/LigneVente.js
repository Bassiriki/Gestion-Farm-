const ligneVenteSchema = new mongoose.Schema({
    vente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vente' },
    produit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
    quantite: Number,
    prix_unitaire: Number
  });
  
  module.exports = mongoose.model('LigneVente', ligneVenteSchema);
  