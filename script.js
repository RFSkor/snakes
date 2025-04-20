// Змея
var convas = document.getElementsById('game')
var context = canvas.getContext("2d")
var grid = 16
// скорость змеи
var count = 0
var skane{
    x: 160
    y: 160
    dx: grid
    dy: 0
    cells: []
    maxCells: 4
}

// apple
var apple = {
    x: getRandomInt(0, 25) * grid
    y: getRandomInt(0, 25) * grid
}

