const user = {
    username : "Tushar",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);  // this tells about current context
    }
}

username.welcomeMessage()
user.userName = "Golu"
user.welcomeMessage()

//////ARROW FUNCTION

// const  addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2 
// const addTwo = (num1 , num2) => (num1 + num2) 

const addTwo = (num1 , num2) => ({username : "Tushar"})

