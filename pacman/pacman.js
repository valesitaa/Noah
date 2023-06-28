document.addEventListener('DOMContentLoaded'), () => {
    const pacman = document.getElementById('pacman');
    const ghost = document.getElementById('ghost');
    const cherry = document.querySelector('.cherry');
    const scoreDisplay = document.createElement('div');
    scoreDisplay.classList.add('score');
    scoreDisplay.textContent = 'Score: 0';
    document.body.appendChild(scoreDisplay);
}
    let score = 0;
    let lives = 3;
    let pacmanPosition = { x: 0, y: 0 };
    let ghostPosition = { x: 360, y: 360 };
    const directions = ['up', 'down', 'left', 'right'];
    let currentDirection = directions[Math.floor(Math.random() * directions.length)];
  
    const updatePacmanPosition = () => {
      pacman.style.top = pacmanPosition.y + 'px';
      pacman.style.left = pacmanPosition.x + 'px';
    };
  
    const updateGhostPosition = () => {
      ghost.style.top = ghostPosition.y + 'px';
      ghost.style.left = ghostPosition.x + 'px';
    };
  
    const checkCollision = () => {
      if (
        pacmanPosition.x === ghostPosition.x &&
        pacmanPosition.y === ghostPosition.y
      )}
       {
        pacman.classList.add('dead');
        setTimeout(() => {
          pacman.classList.remove('dead');
          lives--;
          if (lives === 0) {
            alert('Game Over');
            location.reload();
          }
        }, 500);
      }
  
      if (
        pacmanPosition.x === cherry.offsetLeft &&
        pacmanPosition.y === cherry.offsetTop
      ) {
        cherry.style.display = 'none';
        score += 50;
        scoreDisplay.textContent = 'Score: ' + score;
      };
  
    const handleKeyPress = (event) => {
    const key = event.key;
      let newPosition = { ...pacmanPosition };}
  
      if (key === 'ArrowUp') {
        newPosition.y -= 40;
        pacman.style.transform = 'rotate(-90deg)';
      } else if (key === 'ArrowDown') {
        newPosition}