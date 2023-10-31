//PAGE 30 EXERCISE 2 - SECTION 2-16
function getAverage(list){
    let total = 0;

    for(let i=0; i < list.length; i++){
        total += list[i];
    }

    //total / length
    const average = total / list.length;
    return average;
}

//TEST DATA - TWO ARRAYS OF INTEGERS
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//TESTS OUTPUT FINAL COMPUTATION
console.log(getAverage(myScores));
console.log(getAverage(yourScores));
console.log(getAverage([0, 100]));//50
console.log(getAverage([0, 100, 200,0,0,0,0,0,0]));//33.33_
