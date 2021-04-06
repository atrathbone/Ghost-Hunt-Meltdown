class Ghost {
    constructor(x, y, type, facing) {
        this.xPos = x;
        this.yPos = y;
        this.moveFrameCounter = 0;
        this.ghostType = {
            type: '',
            facing: ''
        };
        this.ghostType.type = type || 'gr';
        this.ghostType.facing = facing || 'left';
        this.animation = new Animation();
        // this.objectFramecounter = new 
    }
    // setup() {

    //     //console.log('ghost is being setup' + this.animation);
    // }
    draw() {
        switch (this.ghostType.facing) {
            case 'left':
                this.animation.animate(game.ghostLeftAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.ghostType.facing = 'right';
                    
                }
                break;
            case 'right':
                this.animation.animate(game.ghostRightAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.ghostType.facing = 'left';
                    
                }
                break;
            case 'down':
                this.animation.animate(game.ghostDownAnim, this.xPos, this.yPos);
                break;
            case 'up':
                this.animation.animate(game.ghostUpAnim, this.xPos, this.yPos);
                break;
        }


    }
}

/*should be two different types of ghost---looking along rows and looking along columns
should be able to walk left and right.
should be able to have a line of sight---so an array of current danger positions for the player
so the two imporant tasks are to render itself/ keep track of its position. keep track of dangerous places for the player
the danger zone will be different depending on which direction the ghost is looking
structure---
variable which keeps track of type of ghost 
another variable which tracks the direction facing (for rendering purposes)*/