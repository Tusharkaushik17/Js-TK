let score = 33 //=> this behaves as number

let score2 = "33" //=> this behaves as string

let score3 = "33abc"

console.log(typeof score)
console.log(typeof(score2)) 

let valueInNumber = Number(score2)  //=>this will return score2 in number datatype only no matter whether it is string or other datatype
let valueInNumber2 = Number(score3)//=> this will give score3 as number but actually score3 is not a number(NAN)
console.log(typeof valueInNumber);
console.log(typeof valueInNumber2); 
console.log(valueInNumber2); //=> this will give what actually is score3

// Note : 33 => 33  "33abs" => NAN  true => 1  false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // this will convert number into bool
console.log(booleanIsLoggedIn);

// 1 => true   0 => false
// " " => false
// "Tushar" => true