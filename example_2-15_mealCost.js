
function getMealCost(order){
    let total = 0;
    //start;stop;how
    for(let i=0; i < order.length; i++){
        total += order[i].price;
    }
    return total;
}

console.log(getMealCost([
    {
        item: "Chicken Tacos", 
        price: 8.95
    },
    {
        item: "soda pop", 
        price: 2.50
    }
]));


console.log(getMealCost([
    {
        item: "Burger", 
        price: 9.95
    },
    {
        item: "shake", 
        price: 4.50
    }
]));