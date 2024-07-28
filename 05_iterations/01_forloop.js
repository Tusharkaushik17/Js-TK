for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        console.log(`value of i is ${i}`);
        break
    }
    
    console.log(`value of i is ${i}`);    
}
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }

    console.log(`value of i is ${i}`);    
}