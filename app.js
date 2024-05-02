let game = ["head", "tail"];

let gen = Math.random() * game.length;

let convertToFloor = Math.floor(gen);

let gettingGame = game[convertToFloor];

console.log(gettingGame);

let userInput = prompt("Head Or Tail").toLowerCase();

if (userInput == gettingGame) {
  Swal.fire({
    icon: "success",
    title: "You Won",
  });
} else {
  Swal.fire({
    icon: "error",
    title: "You Lose",
  });
}
