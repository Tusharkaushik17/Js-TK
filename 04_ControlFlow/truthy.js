///////  FALSY VALUES
// false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN

// TRUTHY VALUES
// "0" , 'false' , " " , [] , {} , function(){}

// to check whether array is empty or not
const userEmail = []

if(userEmail.lenght === 0){
    console.log("array is empty");
}

// to check whetehr object is empty or not
const empObj = {}
if(Object.keys(empObj).lenght === 0){   /// this line will make obj in to array
    console.log("Object is empty");
}