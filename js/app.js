var column = 101;
var row = 83;


// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.speed = 1 + Math.random();
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
 
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x  = (this.x + (101 * dt * this.speed)) % 1010;
    // this.x += this.speed * dt * 100;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * column, row/2 + this.y  * row);
};

Player.prototype.handleInput = function(keyCode) {
    if (keyCode === 'left' && this.x > 0) {
        this.x -= 1;
    } else if (keyCode === 'right' && this.x < 4) {
        this.x += 1;
    } else if (keyCode === 'down' && this.y < 5) {
        this.y = 4;
    } else if (this.y >= 0) {
         this.y -= 1;
    }
    console.log("x: " + this.x, "y: " + this.y);
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0,45);
var enemy2 = new Enemy(0,135);
var enemy3 = new Enemy(0,225);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player(2,4);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
