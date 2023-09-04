const express = require('express');
const userRoutes = require('./routes/user');

const app = express();



app.get('/', (req, res) =>{

    res.send("hi from server");
});

app.post('/user', (req, res) =>{

    res.send("User Registration");
});

app.listen(3000);