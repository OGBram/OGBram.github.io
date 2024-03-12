class Heart {
    constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 16;
            this.spriteHeight = 16;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = 50 + Math.random()*100;
            this.y = 75 + Math.random()*100;
            this.image = document.getElementById("hearts");
            this.frameX = 0;
            this.frameY = Math.floor(Math.random()*3);
            this.maxFrame = 0;
            this.speedX = 0;
            this.speedY = 0;

    }
        draw(context,) {

            context.save();
            context.globalAlpha = 1.0;
            context.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x,
                this.y,
                this.width/1.8,
                this.height/1.8,
            );
            context.restore();             
        }
        update(){
            this.speedX = Math.floor(Math.random()*25);
            this.speedY = -3;
            this.x += this.speedX;
            this.y += this.speedY;

        }
        reset(){
            this.x = 0;
            this.y = 0;
        }
    }
export default Heart;