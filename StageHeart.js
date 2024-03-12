class StageHeart {
    constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 16;
            this.spriteHeight = 16;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = game.width  - Math.floor(Math.random()*600);
            this.y = game.height * .5 + Math.floor(Math.random()*100-100);
            this.image = document.getElementById("hearts");
            this.frameX = 0;
            this.frameY = Math.floor(Math.random()*3);
            this.maxFrame = 0;
            this.cat = this.game.catPool[0];

    }
        draw(context,) {

            context.save();

            context.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x,
                this.y,
                this.width/1.5,
                this.height/1.5,
            );

        }
        update(){

            const range = 10;
        
            if (
                Math.abs(this.x - this.cat.x-12) <= range &&
                Math.abs(this.y - this.cat.y-12) <= range
            ) {
                this.frameY = 5;
            }
        }
        
        reset(){
            this.x = 0;
            this.y = 0;
        }
    }
export default StageHeart;