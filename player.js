class Player {
    constructor() {
        this.xPos;
        this.yPos;
        this.facing;
    }
    setup(initialXPos, initialYPos) {
        this.xPos = initialXPos || 0;
        this.yPos = initialYPos || 0;
        this.facing = 'down';
    }

    draw() {
        image(game.playerImage, this.xPos, this.yPos, 50, 50)
        //console.log('player draw called')
    }

    moveDown(inputDirection) {
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be down]')
    }

    moveUp(inputDirection) {
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be up]')
    }

    moveRight(inputDirection) {
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be right]')
    }

    moveLeft(inputDirection) {
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be left]')
    }
}