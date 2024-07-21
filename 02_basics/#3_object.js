//object literals 
 const mySym = Symbol("key1")
const JsUser = {
    name : "Tushar",
    "full name" : "Tushar Kaushik",
    [mySym] : "key1",
    age : 20,
    location : "Delhi",
    isLoggedIn : false,
    lastLoginDays : ["monday" , "saturday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]); // 2nd method of printing
console.log(JsUser["full name"]); // this full name cannot be print by using Jsuser.fullname


console.log(JsUser[mySym]);

Object.freeze(JsUser);

//FUNCTION

JsUser.greeting = function(){
    console.log(`hello Js user`);
}

JsUser.greeting2 = function(){
    console.log(`hello Js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());