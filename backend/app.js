const express = require('express');
const userController = require('./controllers/userController');
const authenticateToken = require('./middlewares/authenticaToken');
require('dotenv').config();
const cors = require('cors');




const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.get('/users/:id', authenticateToken ,userController.getUser);
app.post('/create/user', authenticateToken, userController.createUser);
app.post('/login', userController.login);

module.exports = app;
