//new.target

function demoNewTarget(x){

    if(new.target == undefined){
        console.log("No");
    }else{
        this.x = x; 
    console.log("Creating an object");   
    }
    console.log("Inside the function");

}

demoNewTarget(5); //function call

let x = new demoNewTarget(4);//Creating an object of type demoNewTarget
console.log(x);