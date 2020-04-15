const express = require('express');

const app = express(); // definiál http szervert

// app.get('/', (req, res) => {
//   res.sendStatus(200);
// });

// app.post('/', (req, res) => {
//   res.sendStatus(201).send('TADAAAM');
// });

const getRootHandler = (req, res) => {
  console.log(req.path, req.method, req.query);
  res.sendStatus(200);
};

const loggerMiddleware = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

const getUserHandler = (req, res) => {
  console.log('params:', req.params);
  res.status(400).json({ error: 'It was a bad request' }); // .send(`Dear ${res.locals.user.username}! It was a bad request`);
};

const authenticationMiddleware = (req, res, next) => {
  console.log('Authentication');
  res.locals.user = { username: 'Woody' };
  next();
};

const createIssue = (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
};

app.use(express.json());
app.use(loggerMiddleware);
app.use(authenticationMiddleware);
app.get('/', getRootHandler);
app.get('/user/:id', getUserHandler); // : után paraméterek
app.post('/issue', createIssue);

app.listen(3000);
