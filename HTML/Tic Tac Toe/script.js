const cells = document.querySelectorAll('[data-cell]');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton');
const scoreXElement = document.getElementById('scoreX');
const scoreOElement = document.getElementById('scoreO');

let isCircleTurn;
let scoreX = 0;
let scoreO = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    isCircleTurn = false; // Reset the turn to 'X'
    cells.forEach(cell => {
        cell.classList.remove('x', 'circle'); // Remove any existing classes
        cell.textContent = ''; // Clear the cell text
        cell.removeEventListener('click', handleClick); // Remove any previous click listeners
        cell.addEventListener('click', handleClick, { once: true }); // Add click listener for new game
    });
    setWinningMessage(false); // Clear any winning messages
    winningMessageElement.classList.remove('show'); // Hide the winning message
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = isCircleTurn ? 'circle' : 'x';
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        setWinningMessage(true);
        updateScore(currentClass);
        setTimeout(startGame, 300); // Restart the game after 2 seconds
    } else if (isDraw()) {
        setWinningMessage(false, true);
    } else {
        isCircleTurn = !isCircleTurn; // Switch turns
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
    cell.textContent = currentClass === 'circle' ? 'O' : 'X'; // Show 'X' or 'O'
}

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('circle');
    });
}

function setWinningMessage(isWin, isDraw = false) {
    if (isWin) {
        winningMessageTextElement.textContent = isCircleTurn ? "O's Wins!" : "X's Wins!";
    } else if (isDraw) {
        winningMessageTextElement.textContent = "Draw!";
    } else {
        winningMessageTextElement.textContent = '';
    }
    winningMessageElement.classList.toggle('show', isWin || isDraw); // Show the message if there's a win or a draw
}

function updateScore(currentClass) {
    if (currentClass === 'x') {
        scoreX++;
        scoreXElement.textContent = scoreX;
    } else {
        scoreO++;
        scoreOElement.textContent = scoreO;
    }
}