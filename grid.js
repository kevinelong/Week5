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

const grid = [
    ['X', 'O', '.'],
    ['.', '.', '.'],
    ['.', 'O', 'X'],
];
grid[1][1] = "X"
for (let r = 0; r < 3; r++) {
    let row = "";
    for (let c = 0; c < 3; c++) {
        row += ' ' + grid[r][c];
    }
    console.log("R" + r + row)
}


