class Ghost {
    constructor(x, y, type, facing) {
        this.xPos = x;
        this.yPos = y;
        this.moveFrameCounter = 0;
        this.type = type || 'gr';
        this.facing = facing || 'left';
        this.animation = new Animation();
        this.dangerArea = [];
    }
    draw() {
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
                break;
            case 'up':
                this.dangerArea = [];
                for (let i = 0; i <= this.yPos / 50; i++) {
                    this.dangerArea.push([
                        [this.xPos / 50],
                        [i]
                    ]);
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
                // console.log(game.boxes.indexes);
                // tem = [];
                // for (let box of game.boxes.indexes) {
                //     console.log(box);
                //     if (box[1] === this.yPos && box[0] < this.xPos) {

                //         temp.push(box);
                //     }
                // }

                break;
            case 'right':
                this.dangerArea = [];
                for (let i = this.xPos / 50; i <= 9; i++) {
                    this.dangerArea.push([
                        [i],
                        [this.yPos / 50]
                    ]);
                }
                break;
        }
    }
}