class Ghost {
    constructor() {
        this.indexes;
    }
    setup() {
        this.indexes = game.levelParser(game.currentLevel, 'gr');
        // console.log(this.indexes);
    }
    draw() {
        for (let i = 0; i < this.indexes.length; i++) {
            image(game.ghostImage, this.indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
            // this.indexes = game.levelParser(game.currentLevel, 'b');
        }
    }
}