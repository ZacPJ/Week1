total = 0
orderlist=[]
const coffeeShop = {
    name: "Starbucks",
    drink:[
        ["coffee", 2.59],
        ["tea", 2.25],
        ["hot chocolate", 1.89],
    ],
    food:[
        ["Cheese Sandwich", 3.55],
        ["Chocolate Cake",2.55],
        ["Mystery Melt",4.55]
    ],
    
    drinksTotal(item,price){
        return this.drink[item][price]
    },
    foodTotal(item,price){
        return this.food[item][price]
    },
    order(){
       return this.drinksTotal(0,1)+this.drinksTotal(0,1)+this.drinksTotal(2,1)+this.foodTotal(2,1)
}
}
console.log(`Welcome to ${coffeeShop.name}\n\nYour total order is:\n
2 x ${coffeeShop.drinksTotal(0,0)} for £${coffeeShop.drinksTotal(0,1)*2}\n
1 x ${coffeeShop.drinksTotal(2,0)} for £${coffeeShop.drinksTotal(2,1)}\n
1 x ${coffeeShop.foodTotal(2,0)} for £${coffeeShop.foodTotal(2,1)}\n\n
Total: £${coffeeShop.order()}
`)