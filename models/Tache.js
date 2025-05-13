const tacheSchema = new mongoose.Schema({
    employe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employe' },
    description: String,
    date_debut: Date,
    date_fin: Date,
    statut: String,
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
    module.exports = mongoose.model('Tache', tacheSchema);