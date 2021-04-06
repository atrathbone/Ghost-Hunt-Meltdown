class Ghost {
    constructor(x, y, type, facing) {
        this.xPos = x;
        this.yPos = y;
        this.moveFrameCounter = 0;
        // this.ghostInfo = {
        //     type: '',
        //     facing: ''
        // };
        this.type = type || 'gr';
        this.facing = facing || 'left';
        this.animation = new Animation();
        this.dangerArea = [];
        // this.objectFramecounter = new 
    }
    // setup() {

    //     //console.log('ghost is being setup' + this.animation);
    // }
    draw() {
        switch (this.facing) {
            case 'left':
                this.lineOfSight();
                this.animation.animate(game.ghostLeftAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'right';
                }
                break;
            case 'right':
                this.lineOfSight();
                this.animation.animate(game.ghostRightAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'left';
                }
                break;
            case 'down':
                this.lineOfSight();
                this.animation.animate(game.ghostDownAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'up';
                }
                break;
            case 'up':
                this.lineOfSight();
                this.animation.animate(game.ghostUpAnim, this.xPos, this.yPos);
                if (this.moveFrameCounter < 23) {
                    this.moveFrameCounter += 1;
                } else {
                    this.moveFrameCounter = 0;
                    this.facing = 'down';
                }
                break;
        }
    }

    lineOfSight() {
        switch (this.facing) {
            case 'down':
                console.log('do something');
                break;
            case 'up':
                console.log('do something');
                break;
            case 'left':
                this.dangerArea = [];
                for (let i = 0; i <= this.xPos / 50; i++) {
                    this.dangerArea.push([
                        [i],
                        [this.yPos / 50]
                    ]);
                }
                break;
            case 'right':
                this.dangerArea = [];
                for (let i = this.xPos / 50; i <= 9; i++) {
                    this.dangerArea.push([
                        [i],
                        [this.yPos / 50]
                    ]);
                }
                break;
        }
        //check facing
        //if right-
        //if left-
        //take this x and y,
        //all positions up to this x become danger  or all positions after the x become danger

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