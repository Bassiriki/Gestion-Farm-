const venteSchema = new mongoose.Schema({
    utilisateur_id: String,
    client_nom: String,
    date_vente: Date
  });
  
  module.exports = mongoose.model('Vente', venteSchema);
  