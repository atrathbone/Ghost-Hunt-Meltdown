class Ghost {
    constructor(x, y, facing, superOrNot) {
        this.xPos = x;
        this.yPos = y;
        this.moveFrameCounter = 0;
        this.superOrNot = superOrNot || false; 
        this.facing = facing || 'left';
        this.animation = new Animation();
        this.dangerArea = [];
    }
    draw() {
        if (this.superOrNot === false) {
            this.normalBehaviour();
        } else {
            console.log('super ghost added')
            this.superBehaviour();
        }
    }

    lineOfSight() {
        let tem = [];
        switch (this.facing) {
            case 'down':
                this.dangerArea = [];
                for (let i = this.yPos / 50; i <= 9; i++) {
                    this.dangerArea.push([
                        [this.xPos / 50],
                        [i]
                    ]);
                }
                for (let p of game.plant.indexes) {

                    if (p[0] === this.xPos / 50 && p[1] > this.yPos / 50) {

                        for (let i of this.dangerArea) {
                            if (p[1] < i[1][0]) {
                                i[1][0] = 'x';
                                i[0][0] = 'x';
                            }
                        }
                    }
                }
                break;
            case 'up':
                this.dangerArea = [];
                for (let i = 0; i <= this.yPos / 50; i++) {
                    this.dangerArea.push([
                        [this.xPos / 50],
                        [i]
                    ]);
                }
                for (let p of game.plant.indexes) {

                    if (p[0] === this.xPos / 50 && p[1] < this.yPos / 50) {

                        for (let i of this.dangerArea) {
                            if (p[1] > i[1][0]) {
                                i[1][0] = 'x';
                                i[0][0] = 'x';
                            }
                        }
                    }
                }
                break;
            case 'left':
                this.dangerArea = [];
                for (let i = 0; i <= this.xPos / 50; i++) {
                    this.dangerArea.push([
                        [i],
                        [this.yPos / 50]
                    ]);
                }

                for (let p of game.plant.indexes) {

                    if (p[1] === this.yPos / 50 && p[0] < this.xPos / 50) {

                        for (let i of this.dangerArea) {
                            if (p[0] > i[0][0]) {
                                i[1][0] = 'x';
                                i[0][0] = 'x';
                            }
                        }
                    }
                }


                break;
            case 'right':
                this.dangerArea = [];
                for (let i = this.xPos / 50; i <= 9; i++) {
                    this.dangerArea.push([
                        [i],
                        [this.yPos / 50]
                    ]);
                }
                for (let p of game.plant.indexes) {

                    if (p[1] === this.yPos / 50 && p[0] > this.xPos / 50) {

                        for (let i of this.dangerArea) {
                            if (p[0] < i[0][0]) {
                                i[1][0] = 'x';
                                i[0][0] = 'x';
                            }
                        }
                    }
                }
                break;
        }
    }
    normalBehaviour() {
        switch (this.facing) {
            case 'left':
                this.lineOfSight();
                this.animation.animate(game.ghostLeftAnim, this.xPos, this.yPos,5);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'right';
                }
                break;
            case 'right':
                this.lineOfSight();
                this.animation.animate(game.ghostRightAnim, this.xPos, this.yPos,5);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'left';
                }
                break;
            case 'down':
                this.lineOfSight();
                this.animation.animate(game.ghostDownAnim, this.xPos, this.yPos,5);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'up';
                }
                break;
            case 'up':
                this.lineOfSight();
                this.animation.animate(game.ghostUpAnim, this.xPos, this.yPos,5);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'down';
                }
                break;
        }
    }
    superBehaviour() {
        switch (this.facing) {
            case 'left':
                this.lineOfSight();
                this.animation.animate(game.superGhostLeftAnim, this.xPos, this.yPos,11);
                if (this.moveFrameCounter < 11) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    let futureX = this.xPos - 1 * 50;
                    let futureY = this.yPos;
                    if (this.canIMove(futureX, futureY)) {
                        if (this.xPos / 50 >= 1) {
                            this.xPos = futureX;
                        } else {
                            this.facing = 'right';
                        }
                    } else {
                        this.facing = 'right';
                    }
                }
                break;
            case 'right':
                this.lineOfSight();
                this.animation.animate(game.superGhostRightAnim, this.xPos, this.yPos,11);
                if (this.moveFrameCounter < 11) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    let futureX = this.xPos + 1 * 50;
                    let futureY = this.yPos;
                    if (this.canIMove(futureX, futureY)) {
                        if (this.xPos / 50 < 9) {
                            this.xPos = futureX;
                        } else {
                            this.facing = 'left';
                        }
                    } else {
                        this.facing = 'left';
                    }
                }
                break;
            case 'down':
                this.lineOfSight();
                this.animation.animate(game.superGhostDownAnim, this.xPos, this.yPos,11);
                if (this.moveFrameCounter < 11) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    let futureX = this.xPos;
                    let futureY = this.yPos + 1 * 50;
                    if (this.canIMove(futureX, futureY)) {
                        if (this.yPos / 50 < 9) {
                            this.yPos = futureY;
                        } else {
                            this.facing = 'up';
                        }
                    } else {
                        this.facing = 'up';
                    }
                }
                break;
            case 'up':
                this.lineOfSight();
                this.animation.animate(game.superGhostUpAnim, this.xPos, this.yPos,11);
                if (this.moveFrameCounter < 11) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    let futureX = this.xPos;
                    let futureY = this.yPos - 1 * 50;
                    if (this.canIMove(futureX, futureY)) {
                        if (this.yPos / 50 >= 1) {
                            this.yPos = futureY;
                        } else {
                            this.facing = 'down';
                        }
                    } else {
                        this.facing = 'down';
                    }
                }
                break;
        }
    }
    canIMove(futureX, futureY) {
        let myI = [futureX / 50, futureY / 50];
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
}