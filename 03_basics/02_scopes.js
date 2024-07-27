let a = 300 //global scope

if(true){
    let a = 10
    console.log("inner:" , a);
}

addOne(6) // this can be accessed
function addOne(num){
    return num + 1
}

addTwo(5) // this cannot be accessed before initalisation of variable
const addTwo = function(num){
    return num + 1

}