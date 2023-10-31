// X . X
// O . O
// O X O
// CHESS or CHECKERS 8x8
// 19x19

// *****
// ****
// **
// *

// . . . . . . . . 
// . . . . . . . . 
// . . . . . . . . 
// . . . . . . . . 
// . . . . . . . . 
// . . . . . . . . 
// . . . . . . . . 
// . . . . . . . . 

const WIDTH = 12
const HEIGHT = 8

for (let r = 0; r < HEIGHT; r++) {
    let row = "";
    for (let c = 0; c < WIDTH; c++) {
        row += " .";
    }
    console.log("R" + r + row)
}

function getGrid(grid){
    let output = ""
    for (let r = 0; r < grid.length; r++) {
        let row = "";
        for (let c = 0; c < grid[r].length; c++) {
            if(c > 0){
            // if(c != 0){
                row += ' ';
            }
            row += grid[r][c];
        }
        output += row + "\n";
    }
    return output;
}


//TESTS

const grid = [
    ['X', 'O', '.'],
    ['.', '.', '.'],
    ['.', 'O', 'X'],
];

grid[1][1] = "X"

const result = getGrid(grid);
const expected = 'X O .\n. X .\n. O X\n';

console.log( result );
console.log( expected === result);
