class Player {
    constructor() {
        this.xPos;
        this.yPos;
    }
    setup(initialXPos,initialYPos) {
        this.xPos = initialXPos || 0;
        this.yPos = initialYPos || 0;
    }

    draw() {
        image(game.playerImage, this.xPos, this.yPos, 50, 50)
        //console.log('player draw called')
    }
}