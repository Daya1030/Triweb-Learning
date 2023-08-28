const express = require('express');
const userRoute = require('./routers/user');

const index = express();
index.use(express.json());

// localhost:400/user/..
index.get('/', (req, res)=>{
    res.send("I am busy");
});

// localhost:400/user/..
index.use('/user', userRoute);
index.listen(4000);