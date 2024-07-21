const name = "Tushar"
const repoCount = 50

console.log(name + repoCount + "value");  // outdated

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('TK-DYNO')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // use to find char at a particular position
console.log(gameName.indexOf('T')); // use to find index of char

const newString = gameName.substring(0 , 4) //it start from front -ve value cannot be given
console.log(newString);

const anotherstring = gameName.slice(-8 , 4) //it start from reverse 
console.log(anotherstring);

const stringOne = "  Tushar  "
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://tushar.com/tushar%20kaushik"
console.log(url.replace('%20' , '_'));

console.log(url.includes('tushar'));
console.log(url.includes('Tushar'));

console.log(gameName.split('D'));
