class Box {
    constructor() {}
    draw() {
        let indexes = game.levelParser(game.currentLevel, 'b');
        for (let i = 0; i<indexes.length; i++) {
            
            image(game.boxImage, indexes[i][0] * 50, indexes[i][1] * 50, 50, 50);
        }
    }
}