// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// const gameWidth = canvas.width;
// const gameHeight = canvas.height;

// let jim = {
//     x: 50,
//     y: gameHeight / 2 - 25,
//     width: 50,
//     height: 50,
//     speed: 5,
//     fuel: 100,
//     health: 100,
//     image: new Image()
// };

// let psyCrow = {
//     x: 50,
//     y: gameHeight / 2 + 75,
//     width: 50,
//     height: 50,
//     speed: 2,
//     image: new Image()
// };

// let asteroids = [];
// let fuelCells = [];

// jim.image.src = 'img/ridingrocket.png';
// psyCrow.image.src = 'img/pngwing.com.png';

// jim.image.onload = function() {
//     psyCrow.image.onload = function() {
//         startGame();
//     };
// };

// function generateAsteroids() {
//     for (let i = 0; i < 20; i++) {
//         asteroids.push({
//             x: Math.random() * gameWidth,
//             y: Math.random() * gameHeight,
//             width: 30,
//             height: 30
//         });
//     }
// }

// function generateFuelCells() {
//     for (let i = 0; i < 5; i++) {
//         fuelCells.push({
//             x: Math.random() * gameWidth,
//             y: Math.random() * gameHeight,
//             width: 20,
//             height: 20
//         });
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, gameWidth, gameHeight);

//     // Draw Jim
//     ctx.drawImage(jim.image, jim.x, jim.y, jim.width, jim.height);

//     // Draw Psy-Crow
//     ctx.drawImage(psyCrow.image, psyCrow.x, psyCrow.y, psyCrow.width, psyCrow.height);

//     // Draw Asteroids
//     ctx.fillStyle = 'gray';
//     asteroids.forEach(asteroid => {
//         ctx.fillRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);
//     });

//     // Draw Fuel Cells
//     ctx.fillStyle = 'yellow';
//     fuelCells.forEach(fuelCell => {
//         ctx.fillRect(fuelCell.x, fuelCell.y, fuelCell.width, fuelCell.height);
//     });

//     update();
// }

// function update() {
//     psyCrow.x += psyCrow.speed;

//     // Collision Detection
//     asteroids.forEach(asteroid => {
//         if (checkCollision(jim, asteroid)) {
//             jim.health -= 10;
//             if (jim.health <= 0) {
//                 alert('Game Over! Jim lost all health.');
//                 resetGame();
//             }
//         }
//     });

//     fuelCells.forEach((fuelCell, index) => {
//         if (checkCollision(jim, fuelCell)) {
//             jim.fuel += 20;
//             fuelCells.splice(index, 1); // Remove the fuel cell after collecting
//         }
//     });

//     // Win Condition
//     if (jim.x >= gameWidth - jim.width) {
//         alert('Jim wins!');
//         resetGame();
//     }

//     if (psyCrow.x >= gameWidth - psyCrow.width) {
//         alert('Psy-Crow wins!');
//         resetGame();
//     }
// }

// function checkCollision(obj1, obj2) {
//     return (
//         obj1.x < obj2.x + obj2.width &&
//         obj1.x + obj1.width > obj2.x &&
//         obj1.y < obj2.y + obj2.height &&
//         obj1.y + obj1.height > obj2.y
//     );
// }

// function resetGame() {
//     jim.x = 50;
//     jim.health = 100;
//     jim.fuel = 100;
//     psyCrow.x = 50;
//     asteroids = [];
//     fuelCells = [];
//     generateAsteroids();
//     generateFuelCells();
// }

// function startGame() {
//     generateAsteroids();
//     generateFuelCells();
//     setInterval(draw, 1000 / 60);  // 60 frames per second
// }

// // Add event listeners for keyboard controls
// document.addEventListener('keydown', function(event) {
//     switch(event.key) {
//         case 'ArrowUp':
//             jim.y -= jim.speed;
//             break;
//         case 'ArrowDown':
//             jim.y += jim.speed;
//             break;
//         case 'ArrowLeft':
//             jim.x -= jim.speed;
//             break;
//         case 'ArrowRight':
//             jim.x += jim.speed;
//             break;
//     }
// });


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

let jim = {
    x: 50,
    y: gameHeight / 2 - 25,
    width: 50,
    height: 50,
    speed: 5,
    fuel: 100,
    health: 100,
    image: new Image()
};

let psyCrow = {
    x: 50,
    y: gameHeight / 2 + 75,
    width: 50,
    height: 50,
    speed: 4,
    image: new Image()
};


let asteroidImage = new Image();
let fuelCellImage = new Image();

let asteroids = [];
let fuelCells = [];

jim.image.src = 'img/ridingrocket.png';
psyCrow.image.src = 'img/pngwing.com.png';
asteroidImage.src = 'img/Asteroide.png';
fuelCellImage.src = 'images/fuelcell.png';


jim.image.onload = function() {
    psyCrow.image.onload = function() {
        startGame();
    };
};

function generateAsteroids() {
    for (let i = 0; i < 20; i++) {
        asteroids.push({
            x: Math.random() * gameWidth,
            y: Math.random() * gameHeight,
            width: 30,
            height: 30
            
        });
    }
}

function generateFuelCells() {
    for (let i = 0; i < 5; i++) {
        fuelCells.push({
            x: Math.random() * gameWidth,
            y: Math.random() * gameHeight,
            width: 20,
            height: 20
            
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    // Draw Jim
    ctx.drawImage(jim.image, jim.x, jim.y, jim.width, jim.height);

    // Draw Psy-Crow
    ctx.drawImage(psyCrow.image, psyCrow.x, psyCrow.y, psyCrow.width, psyCrow.height);

    // Draw Asteroids
    ctx.fillStyle = 'gray';
    asteroids.forEach(asteroid => {
        ctx.fillRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);
    });

    // Draw Fuel Cells
    ctx.fillStyle = 'yellow';
    fuelCells.forEach(fuelCell => {
        ctx.fillRect(fuelCell.x, fuelCell.y, fuelCell.width, fuelCell.height);
    });

    update();
}

function update() {
    if (keys.ArrowUp) jim.y -= jim.speed;
    if (keys.ArrowDown) jim.y += jim.speed;
    if (keys.ArrowLeft) jim.x -= jim.speed;
    if (keys.ArrowRight) jim.x += jim.speed;

    psyCrow.x += psyCrow.speed;

    // Collision Detection
    asteroids.forEach(asteroid => {
        if (checkCollision(jim, asteroid)) {
            jim.health -= 10;
            if (jim.health <= 0) {
                alert('Game Over! Jim lost all health.');
                resetGame();
            }
        }
    });

    fuelCells.forEach((fuelCell, index) => {
        if (checkCollision(jim, fuelCell)) {
            jim.fuel += 20;
            fuelCells.splice(index, 1); // Remove the fuel cell after collecting
        }
    });

    // Win Condition
    if (jim.x >= gameWidth - jim.width) {
        alert('Jim wins!');
        resetGame();
    }

    if (psyCrow.x >= gameWidth - psyCrow.width) {
        alert('Psy-Crow wins!');
        resetGame();
    }
}

function checkCollision(obj1, obj2) {
    return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
    );
}

function resetGame() {
    jim.x = 50;
    jim.health = 100;
    jim.fuel = 100;
    psyCrow.x = 50;
    asteroids = [];
    fuelCells = [];
    generateAsteroids();
    generateFuelCells();
}

function startGame() {
    generateAsteroids();
    generateFuelCells();
    setInterval(draw, 1000 / 60);  // 60 frames per second
}

// Keyboard control variables
let keys = {};

// Add event listeners for keyboard controls
document.addEventListener('keydown', function(event) {
    keys[event.key] = true;
});

document.addEventListener('keyup', function(event) {
    keys[event.key] = false;
});
