class StartScreen {
    constructor() {
        this.animation = new Animation(500, 500);
    }
    draw() {
        this.animation.animate(game.titleScreenAnim,0,0);   
    }
}