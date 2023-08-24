const xyz = () => {
    console.log("xyz", this);
}
console.log("here", this);
xyz();