const enviroment = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const verifyToken = require('./middlewares/verifyToken.middleware');

// Configuración de las variables de entorno de un servidor remoto
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_ENDPOINT, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB conectado correctamente');
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const AuthController = require('./controllers/auth.controller');

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log('Connected');
    });
});

// Configuración de ruta padre
app.get('/', verifyToken.verifyToken, (req, resp) => {
    let params = req.body;
    let user = params.user;
    resp.status(200).json({
        message: `Bienvenido ${user.name}`,
        user: user,
        error: false
    });
});

app.post('/new/user', AuthController.register);

app.post('/login', AuthController.login);