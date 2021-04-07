class Ghost {
    constructor(x, y, facing) {
        this.xPos = x;
        this.yPos = y;
        this.moveFrameCounter = 0;
        // this.type = type || 'gr';
        this.facing = facing || 'left';
        this.animation = new Animation();
        this.dangerArea = [];
    }
    draw() {
        this.debug();
        switch (this.facing) {
            case 'left':
                this.lineOfSight();
                this.animation.animate(game.ghostLeftAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'right';
                }
                break;
            case 'right':
                this.lineOfSight();
                this.animation.animate(game.ghostRightAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'left';
                }
                break;
            case 'down':
                this.lineOfSight();
                this.animation.animate(game.ghostDownAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'up';
                }
                break;
            case 'up':
                this.lineOfSight();
                this.animation.animate(game.ghostUpAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'down';
                }
                break;
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

                    if (p[0] === this.xPos/50 && p[1] > this.yPos/50) {

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

                    if (p[0] === this.xPos/50 && p[1] < this.yPos/50) {

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

                    if (p[1] === this.yPos/50 && p[0] < this.xPos/50) {

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

                    if (p[1] === this.yPos/50 && p[0] > this.xPos/50) {

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
    debug() {
        //    console.log(this.dangerArea);
    }
}