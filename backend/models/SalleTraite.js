const salleTraiteSchema = new mongoose.Schema({
    nom: String,
    capacite: Number
  });
  
  module.exports = mongoose.model('SalleTraite', salleTraiteSchema);
  