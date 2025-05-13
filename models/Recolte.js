const recolteSchema = new mongoose.Schema({
    nom: String,
    date: Date,
    champ_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
  
  module.exports = mongoose.model('Recolte', recolteSchema);
  