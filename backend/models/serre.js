const serreSchema = new mongoose.Schema({
    nom: String,
    superficie: Number,
    culture: String,
    champ: { type: mongoose.Schema.Types.ObjectId, ref: 'Champ' }
  });
    module.exports = mongoose.model('Serre', serreSchema);