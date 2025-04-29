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
