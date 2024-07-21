//++++++++++++++++++++++++++++++++++NUMS+++++++++++++++++++++++++++++++++++++++++++++++++++
const score = 400
console.log(score);

const balance = new Number(100) // explicitly define it as number
console.log(balance);

console.log(balance.toString);  // this will convert it in string
console.log(balance.toFixed(2));  // this is helpgul in e-commerce site to fix precision of  value to a point

const otherNum = 1234.8965
console.log(otherNum.toPrecision(3)); // use to make num more precise

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));
//++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // convert to nearest value
console.log(Math.ceil(4.2));  // convert to higher value
console.log(Math.floor(4.9)); // convert to lower value
console.log(Math.min(4,6,8,2));
console.log(Math.max(4,9,10,45));

console.log(Math.random()); // values lies between 0 and 1
console.log((Math.random()*10) + 1); 

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min); // use to find between range of min and max