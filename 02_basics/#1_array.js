const arr = [0,1,2,3,4]

const myHero = ["shaktimaan" , "Naagraj"]

const arr2 = new Array(1,2,3,4)

console.log(arr[0]);

//Array Methods

arr.push(6)
console.log(arr)
arr.pop()
arr.unshift(9)
console.log(arr);
arr.shift()
console.log(arr);

console.log(arr.includes(100));
console.log(arr.indexOf(9));

const newarr = arr.join() //it converts array into string
console.log(newarr);  

// splice and slice
console.log("a" , arr);
const myn1 = arr.slice(1 , 3) // does not manipulate the original array
console.log(myn1);
console.log("b" , arr);

const myn2 = arr.splice(1 , 3) // manipulate the original array
console.log(myn2);
console.log("c" , arr);
