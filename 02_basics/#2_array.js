const marvel_hero = ["thor" , "ironman" , "spiderman"]

const dc_hero = ["superman" , "flash" , "batman"]

marvel_hero.push(dc_hero)  // this is bad practice it treats dc array as element of marvel array 
console.log(marvel_hero);

const allHero = marvel_hero.concat(dc_hero)  // concat: it combines two array and return single new array and its limitation is it combine onl two array
console.log(marvel_hero);

const allhero2 = [...marvel_hero , ...dc_hero] //it is spread method it does not have any limitation likh concat
console.log(allhero2);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("tushar"));
console.log(Array.from("tushar")); // it convert into array
console.log(Array.from({name : "tushar"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 ,score3)); // use to make array from different element