class Levels {
    constructor() {
        //eventually this will recieve an argument for which level is current
        this.currentLevel;
        //this is just to get it working, eventually make an object containing all levels and then
        //refer to them by key
        this.levelOne = [
            ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
            ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'd'],
            ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
            ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'o', 'o', 'b'],
            ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
            ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
            ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
            ['b', 'b', 'b', 'gr', 'b', 'b', 'gr', 'b', 'b', 'b'],
          ];
    }
}
