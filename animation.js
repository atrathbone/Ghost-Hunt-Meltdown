class Animation {
    constructor() {
        this.frameCounter = 0;
    }
    animate(loadedAnimationImages, x, y) {

        image(loadedAnimationImages[this.frameCounter], x, y, 50, 50);
        if (this.frameCounter < 5) {
            this.frameCounter += 1;
        } else {
            this.frameCounter = 0;
        }
    }
}