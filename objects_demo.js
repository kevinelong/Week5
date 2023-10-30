//
let x = 123 //initial
x = 999 //replace
x = 777 //replace again
console.log(x)

let animal = {
    strength: 18,
    intelligence: 12,
    wisdom: 8,
    name: "Bianca",
    speak: () => console.log("Meow")
}
// //ERROR if const
// animal = { //replace whole object
//     strength: 18,
//     intelligence: 12,
//     wisdom: 8,
//     name: "Bianca",
//     speak: () => console.log("Meow")
// }

animal.name = "Dandy";
animal.kind = "Dog"
animal.speak = () => console.log("Woof")

animal.name = "Finneley";
animal.kind = "Cat"
animal.speak = () => console.log("Purr")

console.log(animal.name)
console.log(animal.intelligence)
console.log(animal.kind)

animal.speak()

// console.log( animal["name"] )
// console.log( animal["intelligence"] )
