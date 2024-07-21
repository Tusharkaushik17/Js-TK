// const tinderUser = new object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "shanu"
tinderUser.isLoggedIn  = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));  //gives array of keys
console.log(Object.entries(tinderUser)); // array of values
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userName : {
            firstname : "tushar",
            lastname : "kaushik"
        }
    }
}

console.log(regularUser.fullName.userName.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

const obj3 = {obj1 , obj2}
console.log(obj3);

const obj4 = Object.assign({} , obj1 , obj2)    //syntax
console.log(obj4);

const obj5 = {...obj1 , ...obj2}