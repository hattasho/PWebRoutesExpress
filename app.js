const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use((req, res, next) => {
  console.log(`Acesso à página: ${req.path}`);
  next();
});

app.use('/users', usersRouter);

app.get('/signin', (req, res) => {
  res.send('Página de Sign In');
});

app.get('/signup', (req, res) => {
  res.send('Página de Sign Up');
});

app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.use((req, res) => {
  res.status(404).send('Página não encontrada. Volte para o <a href="/">index</a>');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});