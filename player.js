class Player {
    constructor() {
        this.xPos;
        this.yPos;
        this.facing;
        this.parsedXPos;
    }
    setup(initialXPos, initialYPos) {
        this.xPos = initialXPos || 0;
        this.yPos = initialYPos || 0;
        this.facing = 'down';
    }

    draw() {

        //THIS IS WHERE THE PROBLEM IS!
        //image(game.playerImage, this.xPos * 50, this.yPos * 50, 50, 50);
        //now wanted...
        image(game.playerDown, this.xPos * 50, this.yPos * 50, 50, 50);

    }

    moveDown(inputDirection) {
        if (this.facing === inputDirection) {
            if (this.yPos < 9) {
                this.yPos += 1;
            }
        } else {
            this.facing = inputDirection;
            game.changePlayerImage(inputDirection);
        }
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be down]')
    }

    moveUp(inputDirection) {
        if (this.facing === inputDirection) {
            if (this.yPos >= 1) {
                this.yPos -= 1;
            }
        } else {
            this.facing = inputDirection;
            game.changePlayerImage(inputDirection);
        }

        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be up]')
    }

    moveRight(inputDirection) {
        if (this.facing === inputDirection) {
            if (this.xPos < 9) {
                this.xPos += 1;
            }
        } else {
            this.facing = inputDirection;
            game.changePlayerImage(inputDirection);
        }

        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be right]')
    }

    moveLeft(inputDirection) {
        if (this.facing === inputDirection) {
            if (this.xPos >= 1) {
                this.xPos -= 1;
            }
        } else {
            this.facing = inputDirection;
            game.changePlayerImage(inputDirection);
        }
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be left]')
    }
}