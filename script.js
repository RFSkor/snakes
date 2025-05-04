// рандом
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

// Змея
var canvas = document.getElementById('game')
var context = canvas.getContext('2d');
var grid = 16
// скорость змеи
var count = 0

var snake = {
    x: 160,
    y: 160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
};

// apple
var apple = {
    x: 320,
    y: 320
};

function loop(){
    requestAnimationFrame(loop);
    if (++count < 4){
        return;
    }

    // обнуляем скорость и поле
    count = 0;
    context.clearRect(0, 0 , canvas.width, canvas.height);

    // заставляем змейку двигаться
    snake.y = snake.dy
    snake.x = snake.dx

    snake.cells.unshift({X: snake.x, y: snake.y})
    if (snake.cells.length > snake.maxCells){
        snake.cells.pop()
    }

    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1)

    snake.cells.forEach(function (cell, index) {
        context.fillStyle = 'green';
        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    });
}

snake.x = 160;
snake.x = 160;
snake.cell =[];
snake.maxCells = 4;
snake.dx = grid;
snake.dy = 0

apple.x = getRandomInt(0, 25) * grid;
apple.y = getRandomInt(0, 25) * grid;

requestAnimationFrame(loop);