// Obtener referencias a los elementos del DOM
const mazeElement = document.getElementById("maze");
const scoreElement = document.getElementById("score");

// Definir el laberinto
const maze = [
  "##########",
  "#........#",
  "#.######.#",
  "#.#....#.#",
  "#.#....#.#",
  "#.#....#.#",
  "#.######.#",
  "#........#",
  "##########"
];

// Variables de juego
let pacmanPosition = { x: 1, y: 1 };
let score = 0;

// Renderizar el laberinto
function renderMaze() {
  let output = "";
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (x === pacmanPosition.x && y === pacmanPosition.y) {
        output += "P"; // Renderizar a PacMan en su posición actual
      } else {
        output += maze[y][x];
      }
    }
    output += "\n";
  }
  mazeElement.textContent = output;
}

// Actualizar la puntuación en el DOM
function updateScore() {
  scoreElement.textContent = "Score: " + score;
}

// Manejar las pulsaciones de teclas para mover a PacMan
function handleKeyPress(event) {
  const keyPressed = event.key;
  let newPosition = { x: pacmanPosition.x, y: pacmanPosition.y };

  if (keyPressed === "ArrowUp") {
    newPosition.y--;
  } else if (keyPressed === "ArrowDown") {
    newPosition.y++;
  } else if (keyPressed === "ArrowLeft") {
    newPosition.x--;
  } else if (keyPressed === "ArrowRight") {
    newPosition.x++;
  }

  if (maze[newPosition.y][newPosition.x] !== "#") {
    pacmanPosition = newPosition;
    eatCherry(newPosition);
  }

  renderMaze();
}

// Verificar si PacMan ha comido una cereza
function eatCherry(position) {
  if (maze[position.y][position.x] === ".") {
    maze[position.y] = maze[position.y].substr(0, position.x) + "