class Ghost {
    constructor(x,y) {
        this.xPos = x;
        this.yPos = y;
    }
    setup() {
        this.animation = new Animation();
        console.log('ghost is being setup' + this.animation);
    }
    draw() {
        this.animation.animate(game.ghostLeftAnim, this.xPos, this.yPos);
    }
}