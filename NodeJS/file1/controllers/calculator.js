


module.exports.add = (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1 + n2;
    res.send(`Sum = ${sum}`);
};
module.exports.product = (req, res) =>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let product = n1 * n2;
    //res.send("Product =" + Product);
    res.send(`Product = ${product}`);
};
module.exports.Division = (req, res) =>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let Division = n1  / n2;
    //res.send("Division =" + Division);
    res.send(`Division = ${Division}`);
};
module.exports.sub = (req, res) =>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sub = n1 - n2;
    //res.send("sub =" + sub);
    res.send(`Sub = ${sub}`);
};