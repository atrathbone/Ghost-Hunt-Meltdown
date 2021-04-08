class DemonicGhost {
    constructor() {
        this.xPos = 1*50;
        this.yPos = 1*50; 
        this.moveFrameCounter = 0;
        this.animation = new Animation();
        this.dangerArea = [];
        this.spawnPoint = 0;
    }
    draw() {
        this.xPos = game.demonSpawn.indexes[this.spawnPoint][0]*50;
        this.yPos = game.demonSpawn.indexes[this.spawnPoint][1]*50;
        this.lineOfSight();
        this.animation.animate(game.demonicGhostAnim, this.xPos, this.yPos, 3);
        if (this.moveFrameCounter < 47) {
            this.moveFrameCounter += 1;
        } else {
            this.moveFrameCounter = 0;
            game.demonicGhostSFX.play();
            this.spawnPoint = this.randomNumber();
        }
    }
    lineOfSight() {
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
    }
    randomNumber() {
        let thisMax = game.demonSpawn.indexes.length;
        return Math.floor(Math.random() * thisMax);
    }
}