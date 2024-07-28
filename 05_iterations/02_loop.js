/// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    if(greet == " "){
        continue
    }
    console.log(`Eah char is ${greet}`);    
}

/// MAPS  => they maintain unique entry and follow order/sequence
const map = new Map()
map.set('IN' , "INDIA")
map.set('US' , "America")
map.set('FR' , "france")
map.set('IN' , "INDIA")

// console.log(map);

for (const [key , value] of map) {
   console.log(key , ':-' , value)
}

// for of loop is not for object

/// for in loop is used for object

const  myobject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby"
}

for (const key in myobject) {
   console.log(key);
}
// to find value =>
for (const key in myobject) {
   console.log(`key is ${key} and value is ${myobject[key]}`);
}

//for in loop can be used for array but not for maps