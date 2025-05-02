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
