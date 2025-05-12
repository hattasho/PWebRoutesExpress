const express = require('express');
const router = express.Router();

// Middleware específico da rota
router.use((req, res, next) => {
  console.log('Middleware da rota /users');
  next();
});

// Rota com userid
router.get('/:userid', (req, res) => {
  const { userid } = req.params;
  if (!userid) {
    return res.redirect('/signup');
  }
  res.send(`Bem-vindo, usuário ${userid}!`);
});

module.exports = router;