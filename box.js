class Box {
    constructor(x,y){ 
        this.xPos = x;
        this.yPos = y;
    }
    draw(){
        image(game.boxImage, this.xPos * 50, this.yPos * 50, 50, 50);
    }    
}