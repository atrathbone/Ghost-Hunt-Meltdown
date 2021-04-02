class Game {
    constructor() {
        this.animation = new Animation();
        this.player = new Player();
    }
    preLoad() {
        this.animation.preLoad();
    }
    draw() {
        this.player.draw();
    }
}