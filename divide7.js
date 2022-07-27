for(let i = 0; i<6; i++){
    let number = Math.ceil(Math.random()*30)
    if(number % 7 == 0){
        console.log(`${number} is divisible by 7`)
    }else{
        console.log(`${number} is not divisible by 7`)
    }
}