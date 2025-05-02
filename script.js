//draw board
let board = [];
let rows = [];
let columns = 3;

for (let i = 0; i < columns; i++) {
  rows = [null, null, null];
  board.push(rows);
}

//players object

let players = [
  {
    name: "Player One",
    token: "X",
  },
  {
    name: "Player Two",
    token: "O",
  },
];

let currentPlayer = players[0];
//function to switch turns between players
function changeTurn() {
  return (currentPlayer =
    currentPlayer === players[0] ? players[1] : players[0]);
}

//test function to fill board
function addToken(mark) {
  if (mark === 1) {
    board[0][0] = 1;
    console.log(board);
  } else if (mark === 2) {
    console.log(board);
    board[0][1] = 2;
  } else if (mark === 3) {
    console.log(board);
    board[0][2] = 3;
  } else {
    console.log("Invalid");
  }
}
