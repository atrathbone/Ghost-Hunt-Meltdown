class Animation {
    constructor(width,height) {
        this.frameCounter = 0;
        this.width = width || 50;
        this.height = height || 50;
    }
    
    animate(loadedAnimationImages, x, y, frames) {
        image(loadedAnimationImages[this.frameCounter], x, y, this.width, this.height);
        if (this.frameCounter < frames) {
            this.frameCounter += 1;
        } else {
            this.frameCounter = 0;
        }
    }
}