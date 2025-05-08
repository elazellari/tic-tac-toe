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

//function to reset game
function resetGame() {
  board = [];
  for (let i = 0; i < columns; i++) {
    board.push[(null, null, null)];
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerHTML = ""; // remove X or O
    cell.style.pointerEvents = "auto"; // re-enable click
  });

  // Reset to first player
  currentPlayer = players[0];
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
      console.log(`${currentPlayer.name} wins`);
      resetGame();
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
      console.log(`${currentPlayer.name} wins`);
      resetGame();
      return;
    }
  }

  // Check diagonals
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    console.log(`${currentPlayer.name} wins`);
    resetGame();
    return;
  }
  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    console.log(`${currentPlayer.name} wins`);
    resetGame();
    return;
  }

  let isTie = board.flat().every((cell) => cell !== null);
  if (isTie) {
    console.log("It's a tie");
    resetGame();
  }
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

//interacting with the board
/*function playGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.addEventListener("click", () => {
      const h2 = document.createElement("h2");
      h2.innerText = currentPlayer.token;
      cell.appendChild(h2);
      changeTurn();
      console.log(currentPlayer.name);
    });
  });
}*/

function playGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.addEventListener("click", () => {
      const row = parseInt(cell.getAttribute("data-row"));
      const col = parseInt(cell.getAttribute("data-col"));

      // Prevent overwriting cell
      if (board[row][col] !== null) return;

      // Update visual
      const h2 = document.createElement("h2");
      h2.innerText = currentPlayer.token;
      cell.appendChild(h2);
      cell.style.pointerEvents = "none";

      // Update board data
      board[row][col] = currentPlayer.token;

      // Check game state
      gameState(board);

      // Switch turn
      changeTurn();
    });
  });
}

playGame();
