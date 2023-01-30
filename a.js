var cells = document.querySelectorAll("td");
var resetButton = document.querySelector("#reset");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
resetButton.addEventListener("click", resetGame);

var currentPlayer = "X";
var isGameOver = false;

function cellClicked() {
  if (this.innerHTML === "" && !isGameOver) {
    this.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    checkForWinner();
  }
}

function checkForWinner() {
    var winner = "";
  
    if (
      cells[0].innerHTML === cells[1].innerHTML &&
      cells[1].innerHTML === cells[2].innerHTML &&
      cells[0].innerHTML !== ""
    ) {
      winner = cells[0].innerHTML;
    } else if (
      cells[3].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[5].innerHTML &&
      cells[3].innerHTML !== ""
    ) {
      winner = cells[3].innerHTML;
    } else if (
      cells[6].innerHTML === cells[7].innerHTML &&
      cells[7].innerHTML === cells[8].innerHTML &&
      cells[6].innerHTML !== ""
    ) {
      winner = cells[6].innerHTML;
    } else if (
      cells[0].innerHTML === cells[3].innerHTML &&
      cells[3].innerHTML === cells[6].innerHTML &&
      cells[0].innerHTML !== ""
    ) {
      winner = cells[0].innerHTML;
    } else if (
      cells[1].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[7].innerHTML &&
      cells[1].innerHTML !== ""
    ) {
      winner = cells[1].innerHTML;
    } else if (
      cells[2].innerHTML === cells[5].innerHTML &&
      cells[5].innerHTML === cells[8].innerHTML &&
      cells[2].innerHTML !== ""
    ) {
      winner = cells[2].innerHTML;
    } else if (
      cells[0].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[8].innerHTML &&
      cells[0].innerHTML !== ""
    ) {
      winner = cells[0].innerHTML;
    } else if (
      cells[2].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[6].innerHTML &&
      cells[2].innerHTML !== ""
    ) {
      winner = cells[2].innerHTML;
    }
  
    if (winner !== "") {
      isGameOver = true;
      alert("Player " + winner + " wins!");
    } else if (checkForDraw()) {
      alert("It's a draw");
    }
  }
  
function resetGame() {
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }
    isGameOver = false;
    currentPlayer = "X";
  }
  

  function checkForDraw() {
    var isDraw = true;
    for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
    isDraw = false;
    break;
    }
    }
    
    if (isDraw) {
    isGameOver = true;
    alert("It's a draw!");
    }
    }
  