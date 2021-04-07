class Player {
    constructor(initialXPos, initialYPos) {
        this.xPos = initialXPos || 0;
        this.yPos = initialYPos || 0;
        this.facing = 'down';
        this.animation = new Animation();
        this.hasCollected = false;
    }

    draw() {
        this.haveIReachedTheDoor(this.xPos, this.yPos);
        if (this.hasCollected === false) {
            this.haveIcollected(this.xPos, this.yPos);
        }
        if (this.willIDie(this.xPos, this.yPos)) {
            game.setup();
        }
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
            if (this.canIMove(futureX, futureY)) {
                if (this.yPos < 9) {
                    this.yPos += 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }
        this.facing = inputDirection;
    }

    moveUp(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos;
            let futureY = this.yPos - 1;
            if (this.canIMove(futureX, futureY)) {
                if (this.yPos >= 1) {
                    this.yPos -= 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }

        this.facing = inputDirection;
    }

    moveRight(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos + 1;
            let futureY = this.yPos;
            if (this.canIMove(futureX, futureY)) {
                if (this.xPos < 9) {
                    this.xPos += 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }

        this.facing = inputDirection;
    }

    moveLeft(inputDirection) {
        if (this.facing === inputDirection) {
            let futureX = this.xPos - 1;
            let futureY = this.yPos;
            if (this.canIMove(futureX, futureY)) {
                if (this.xPos >= 1) {
                    this.xPos -= 1;
                }
            }
        } else {
            this.facing = inputDirection;
        }
        this.facing = inputDirection;
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
        for (let i = 0; i < game.plant.indexes.length; i++) {
            if (game.plant.indexes[i].toString() === myIStr) {
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
                //console.log(ghost.dangerArea[i].toString());
                console.log(ghost.dangerArea[i].toString());
                if (ghost.dangerArea[i].toString() === myIStr) {
                    ifHeWillDie = true;
                }
            }
        }
        return ifHeWillDie;
    }

    haveIcollected(currentX, currentY) {
        let myI = [currentX, currentY];
        let myIStr = myI.toString();
        // console.log(myIStr);
        for (let vase of game.vase.indexes) {
            for (let i = 0; i < game.vase.indexes.length; i++) {
                if (game.vase.indexes[i].toString() === myIStr) {
                    this.hasCollected = true;
                    game.vase.collect();
                    return;
                }
            }
        }
    }

    haveIReachedTheDoor(currentX, currentY) {
        let myI = [currentX, currentY];
        let myIStr = myI.toString();

        for (let door of game.door.indexes) {
            for (let i = 0; i < game.door.indexes.length; i++) {
                if (game.door.indexes[i].toString() === myIStr) {
                    if (this.hasCollected === true) {
                        game.loadNextLevel();
                    }
                    return;
                }
            }
        }

    }
}