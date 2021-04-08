class DemonSpawn {
    constructor() {
        this.indexes = game.levelParser(game.currentLevel, 'dm');
    }
    draw (){
        for (let i = 0; i<this.indexes.length; i++) {  
            image(game.demonSpawnImage, this.indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
    }
}
}