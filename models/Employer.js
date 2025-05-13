const employeSchema = new mongoose.Schema({
    nom: String,
    poste: String,
    statut: String,
    taux_horaire: Number,
    type: String,
    date_embauche: Date
  });
  
  module.exports = mongoose.model('Employe', employeSchema);
  