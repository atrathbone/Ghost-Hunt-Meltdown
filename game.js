class Game {
    constructor() {
        this.animation = new Animation();
        this.player = new Player();
    }
    preLoad() {
        this.animation.preLoad();
    }
    draw() {
        //here the rendering order is established
        this.player.draw();
    }
}