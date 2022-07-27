let space1 = " "
let space2 = " "
let space3 = " "
let space4 = " "
let space5 = " "
let space6 = " "
let space7 = " "
let space8 = " "
let space9 = " "
let counter = 0


function game(){
// import readline module
const { Console } = require("console");
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";
// question user to enter name
rl.question("enter the number you want to your X in \n", function (string) {
userInput = string;
if (userInput == 1){
    space1 = "X"
}else if (userInput == 2){
    space2 = "X"
}else if (userInput == 3){
    space3 = "X"
}else if (userInput == 4){
    space4 = "X"
}else if (userInput == 5){
    space5 = "X"
}else if (userInput == 6){
    space6 = "X"
}else if (userInput == 7){
    space7 = "X"
}else if (userInput == 8){
    space8 = "X"
}else if (userInput == 9){
    space9 = "X"
}
  // close input stream
rl.close();

    if (userInput != ""){
        console.log (
            `
            |   |   
          ${space1} | ${space2} | ${space3} 
            |   |   
        -----------
            |   |   
          ${space4} | ${space5} | ${space6} 
            |   |   
        -----------
            |   |   
          ${space7} | ${space8} | ${space9} 
            |   |   
            `
        )
    
    counter += 1
    if (counter ==9) {
        game=false
    };
}
});
};

game()
game()