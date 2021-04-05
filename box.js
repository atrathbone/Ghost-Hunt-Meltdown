class Box {
    constructor() {
    }
    setup(){
        this.indexes = game.levelParser(game.currentLevel, 'b');
    }
    draw() {
        for (let i = 0; i<this.indexes.length; i++) {  
            image(game.boxImage, this.indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
        }
    }
}