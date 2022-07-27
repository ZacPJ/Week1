let balance = 1000
let attempts = 0
let loop = 0
const cashMachine = (pin,amount,deposit) =>{
    if (attempts <= 3){
        
            if (pin === 2022){
                console.log(`Pin is correct\nYour balance is ${balance}`)
                if (deposit ==false){
                    if( amount>0 && amount <= balance){
                        balance = balance-amount 
                        console.log(`Your balance is now ${balance}`)
                        loop = 1
                    }else{
                        console.log("You cannot withdraw that amount please reenter pin and try again")
                        attempts++
                    }
                }else if (deposit == true){
                    balance = balance+amount
                    console.log(`Depositing ${amount}\nYour new balance is ${balance}`)
                    loop = 1
                }else{
                    ("That is not an option try again")
                    attempts ++
                }
            }else{
                console.log("Incorrect Pin please try again")
                attempts ++
            }
        
    }else{
        console.log("You entered the incorrect pin or an invalid withdraw amount too many times. This account is now locked")
        loop = 1
    }
    
}

while (loop !=1){
cashMachine(2022,10000, false)
}