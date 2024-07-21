let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());  // give info about date
console.log(myDate.toLocaleString()); // give info about time also

console.log(typeof myDate);

let createDate = new Date(2023 , 0 , 23)
console.log(createDate.toDateString());
console.log(createDate.getTime());  // use to give in mili second

let myTimestamp = Date.now()
console.log(myTimestamp); // to get in mili seconds
console.log(Date.now()/1000); // use to get in seconds 

