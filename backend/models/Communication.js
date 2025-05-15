const communicationSchema = new mongoose.Schema({
    sujet: String,
    contenu: String,
    canal: String,
    date: Date
  });
  
  module.exports = mongoose.model('Communication', communicationSchema);
  