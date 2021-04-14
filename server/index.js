const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');
const { Mongoose } = require('mongoose');
const app = express();

// Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev')); 
app.use(express.json());
// app.use(cors({}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

//Routes

app.use('/api/usuarios',require('./routes/usuario.routes'));
app.use('/api/choferCarros',require('./routes/choferCarros.routes'));
app.use('/api/viajeChofer',require('./routes/viajeChofer.routes'));
app.use('/api/login',require('./routes/login'));
app.use('/api/reportes',require('./routes/reportes.routes'));
app.use('/api/pagos',require('./routes/pagos.routes'));



//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port "+app.get('port'));
});