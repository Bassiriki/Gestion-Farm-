const maladieSchema = new mongoose.Schema({
    nom: String,
    type: String,
    date_detection: Date,
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
  
  module.exports = mongoose.model('Maladie', maladieSchema);
  