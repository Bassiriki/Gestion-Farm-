const inventaireSchema = new mongoose.Schema({
    produit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
    quantiteDisponible: Number,
    statut: String,
    date_entree: Date,
    date_sortie: Date
  });

    module.exports = mongoose.model('Inventaire', inventaireSchema);