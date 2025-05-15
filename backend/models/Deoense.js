const depenseSchema = new mongoose.Schema({
    montant: Number,
    description: String,
    mode_paiement: String,
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' },
    type: String,
    date: Date
  });
  
  module.exports = mongoose.model('Depense', depenseSchema);
  