class Player {
    constructor(initialXPos, initialYPos) {
        this.xPos = initialXPos || 0;
        this.yPos = initialYPos || 0;
        this.facing = 'down';
        this.animation = new Animation();
    }

    draw() {
        if(this.willIDie(this.xPos, this.yPos)){console.log('DEAD!!!');}
        switch (this.facing) {
            case 'down':
                this.animation.animate(game.playerDownAnim, this.xPos * 50, this.yPos * 50)
                break;
            case 'up':
                this.animation.animate(game.playerUpAnim, this.xPos * 50, this.yPos * 50)
                break;
            case 'left':
                this.animation.animate(game.playerLeftAnim, this.xPos * 50, this.yPos * 50)
                break;
            case 'right':
                this.animation.animate(game.playerRightAnim, this.xPos * 50, this.yPos * 50)
                break;
        }
    }

    moveDown(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos;
            let futureY = this.yPos + 1;
            // if(this.willIDie(futureX,futureY)===true){console.log('you will die')}
            if (this.canIMove(futureX, futureY)) {
                if (this.yPos < 9) {
                    this.yPos += 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be down] ' + this.xPos + this.yPos)
    }

    moveUp(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos;
            let futureY = this.yPos - 1;
            // if(this.willIDie(futureX,futureY)===true){console.log('you will die')}
            if (this.canIMove(futureX, futureY)) {
                if (this.yPos >= 1) {
                    this.yPos -= 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }

        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be up]')
    }

    moveRight(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos + 1;
            let futureY = this.yPos;
            // if(this.willIDie(futureX,futureY)===true){console.log('you will die')}
            if (this.canIMove(futureX, futureY)) {
                if (this.xPos < 9) {
                    this.xPos += 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }

        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be right]')
    }

    moveLeft(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos - 1;
            let futureY = this.yPos;
            // if(this.willIDie(futureX,futureY)===true){console.log('you will die')}
            if (this.canIMove(futureX, futureY)) {
                if (this.xPos >= 1) {
                    this.xPos -= 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }
        this.facing = inputDirection;
        console.log('player facing: ' + this.facing + '[should be left]')
    }

    canIMove(futureX, futureY) {
        let myI = [futureX, futureY];
        let myIStr = myI.toString();
        let ifHeCanMove = true;

        for (let i = 0; i < game.boxes.indexes.length; i++) {
            if (game.boxes.indexes[i].toString() === myIStr) {
                console.log('you cant move');
                ifHeCanMove = false;
            }
        }
        return ifHeCanMove;
    }

    willIDie(currentX, currentY) {
        let myI = [currentX, currentY];
        let myIStr = myI.toString();
        let ifHeWillDie = false;

        for (let ghost of game.ghosts) {
            for (let i = 0; i < ghost.dangerArea.length; i++) {
                if(ghost.dangerArea[i].toString()===myIStr){
                    ifHeWillDie = true;
                }
            }
        }
        return ifHeWillDie;
    }
}