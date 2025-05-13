const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const product = new Product({ name, price, description });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Erreur serveur' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Erreur serveur' });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) return res.status(404).json({ msg: 'Produit non trouvé' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Erreur serveur' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ msg: 'Produit non trouvé' });
    res.json({ msg: 'Produit supprimé' });
  } catch (err) {
    res.status(500).json({ msg: 'Erreur serveur' });
  }
};
