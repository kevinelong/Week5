// ARRAY AKA List/Vector Ordered series of Values
let pets = ["Bianca", "Finneley", "Dandy"];
console.log( pets[2]); //DANDY 2 from the beginning

//TWO INITIAL
let people = [
    {
        name: "Kevin",
        age: 56
    },
    {
        name: "Nina",
        age: 47
    }
];
//ADD ONE MORE
people.push({name: "Kay", age: 59});

// for(START, STOP, HOW)
for(let index = 0; index < people.length; index++){
    console.log(people[index].name, people[index].age);
}
