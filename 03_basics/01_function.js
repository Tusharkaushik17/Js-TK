// function addTwoNum(num1 , num2){
//     console.log(num1 + num2);
// }

function addTwoNum(num1 , num2){
    return num1 + num2
}
console.log(addTwoNum(4 , 3)); 

const result = addTwoNum(4 , 3)
console.log("result:" , result); //yaha function return hua hai par value print nahi hui kyuki usko bola nahi hai print karne ko



function userLoggedIn(username){
    return `${username} just Logged In`
}
console.log(userLoggedIn("tushar")); 


///// REST OPERATOR 
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(20 , 100 , 400 , 700 , 500 ));

const user = {
    userName : "Tushar",
    Income : 100000000000000000000000000
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and income is ${anyObject.Income}`);
}
handleObject(user)

const newArray = [200 , 400 , 500 , 700]

function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(newArray));