class Animation {
    constructor() {
        this.frameCounter = 0;
    }
    animate(loadedAnimationImages, x, y) {
    
    image(loadedAnimationImages[this.frameCounter],x,y,50,50);
    if(this.frameCounter < 5){
        this.frameCounter += 1;
    }
    else {
        this.frameCounter = 0;
    }
   
    
        //   let i;
    //   if(frameCount%2===0){
    //       i+=1;
    //       image(loadedAnimationImages[i], x, y, 50, 50);
    //     }
        // this.frameCounter + 1;
        // // console.log('frameCounter: ' + this.frameCounter)
        // if (this.frameCounter === 5) {
        //     this.frameCounter = 0;
        // }
        
    }

}