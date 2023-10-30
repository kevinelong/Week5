//COLLECTIONS HOLD MULTIPLE VALUES

// Array hold ordered lists of values, accessed by offset position (starts at 0)

let list = []; //CREATE AN EMPTY ARRAY

list.push("Kevin") // 0 index
list.push("Nina")  // 1 index
list.push("Dandy") // 2 index

let dog = list[2] //copy the value at index 2
console.log(dog) //Dandy

list[2] = "Bianca"

console.log( list[2] );

console.log(list) // [ 'Kevin', 'Nina', 'Bianca' ]


// Objects hold unordered sets(bag) of values, accessed by key like words looked up in a dictionary.

let dict = {} //EMPTY OBJECT
dict.aaa = "APPLE"
dict.bbb = "BANANA"
dict["ccc"] = "CHERRY"

console.log( dict["bbb"]) //BANANA
console.log( dict.ccc  ) //CHERRY
console.log( dict.aaa   ) //APPLE
