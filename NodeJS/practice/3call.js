function product(productName, price){
   this.productName = productName;
   this.price = price;
}



//const p1 = new product("Mobile", 10000);
//const p2 = new product("cover", 100);

//console.log(p1);
//console.log(p2);
//console.log(p1.productName);
//console.log(p2.productName);

function student(sname, productName, price){
    //this.productName = productName;
    //this.price = price;
    product.call(this,productName,price);
    this.sname = sname;
}

const student1 = new student("Daya", "Laptop", 2000)
console.log(student1.sname, "purchased a", student1.productName,' for Rs', student1.price);