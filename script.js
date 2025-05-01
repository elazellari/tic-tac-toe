//Gameboard function
function Gameboard() {
  let board = [];
  let rows = [];
  for (let i = 0; i < 3; i++) {
    rows[i] = null;
    board.push(rows);
  }
  return board;
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

// logic to switch turns
let currentPlayer = players[0];

let changeTurn = () => {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
};

//testing turns switch
function display() {
  console.log(currentPlayer.name);
  changeTurn();
}
