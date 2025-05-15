module.exports = (...rolesAutorisés) => {
  return (req, res, next) => {
    if (!req.user || !rolesAutorisés.includes(req.user.role)) {
      return res.status(403).json({ msg: 'Accès interdit : rôle insuffisant' });
    }
    next();
  };
};
