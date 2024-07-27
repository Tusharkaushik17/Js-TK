// IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)


(function chai(){
    console.log(`DB Connected`);
})();

// this (;) is must here to write two iffe together

( (name) => {
    console.log(`DB Connected Two ${name}`);
})("Tushar")