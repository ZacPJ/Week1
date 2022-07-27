let array = []
for (let i = 0; i <= 4;i++){
    
    if(i == 1 || i ==3){
        array.push("-----------");
    } else{
        array.push("   |   |   \n   |   |   \n   |   |   ");
    }
}
console.log(array.join("\n"));