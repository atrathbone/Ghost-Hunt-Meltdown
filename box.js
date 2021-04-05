class Box {
    constructor() {}
    draw() {
        let indexes = game.levelParser(game.currentLevel, 'b');
        console.log(indexes);
        for (i of indexes) {
            
            image(game.boxImage, i[0] * 50, i[1] * 50, 50, 50);
        }
    }
}