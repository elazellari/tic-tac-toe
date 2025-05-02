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

//game logic

function gameState(board) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      console.log("You Win");
      return;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      console.log("You Win");
      return;
    }
  }

  // Check diagonals
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    console.log("You Win");
    return;
  }
  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    console.log("You Win");
    return;
  }

  console.log("It is a tie");
}

//check empty cells function
function checkEmpty(arr) {
  arr.forEach((element) => {
    element.forEach((cell) => {
      if (cell == null) {
        console.log("Empty Cell");
      } else {
        gameState(arr);
      }
    });
  });
}
