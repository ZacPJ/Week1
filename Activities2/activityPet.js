const pet = {
    name: "Fluffy",
    typeOfPet: "Dog",
    age: 4,
    colour: "Blonde",

eat() {
    console.log(`${this.name} is eating`)
},
drink() {
    console.log (`${this.name} is drinking`)
}


}
pet.eat()
pet.drink()