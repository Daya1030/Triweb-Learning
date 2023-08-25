const express = require('express');

const app = express();

app.get('/',(req, res) => {
 res.send("I am don");
});
app.get('/add', (req, res) =>{
    let n1 = 3;
    let n2 = 4;
    let sum = n1+n2
    //res.send("Sum =" + sum);
    res.send(`Sum = ${sum}`);
});

app.post('/add', (req, res)=>{
    let n1 = 3;
    let n2 = 4;
    let sum = n1+n2
    res.send(`Sum = ${sum}`);
});
app.post('/product', (req, res) =>{
    let n1 = 3;
    let n2 = 4;
    let product = n1*n2
    //res.send("Product =" + Product);
    res.send(`Product = ${product}`);
});
app.post('/Division', (req, res) =>{
    let n1 = 3;
    let n2 = 4;
    let Division = n1/n2
    //res.send("Division =" + Division);
    res.send(`Division = ${Division}`);
});
app.post('/sub', (req, res) =>{
    let n1 = 3;
    let n2 = 4;
    let sub = n1-n2
    //res.send("sub =" + sub);
    res.send(`Sub = ${sub}`);
});
app.listen(3000);