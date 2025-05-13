const livraisonSchema = new mongoose.Schema({
    date: Date,
    vehicule: String,
    chauffeur: String,
    contenu: String,
    destination: String
  });
  
  module.exports = mongoose.model('Livraison', livraisonSchema);
  