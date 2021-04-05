class Ghost {
    constructor(x,y) {
        this.xPos = x;
        this.Ypos = y;
        // this.indexes;
    }
    setup() {
        // this.indexes = game.levelParser(game.currentLevel, 'gr');
        // console.log(this.indexes);
    }
    draw() {
        image(game.ghostImage, this.xPos, this.Ypos, 50, 50);
        // for (let i = 0; i < this.indexes.length; i++) {
        //     image(game.ghostImage, this.indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
        //     // this.indexes = game.levelParser(game.currentLevel, 'b');
        // }
    }
}