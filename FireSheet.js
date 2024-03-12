class FireSheet {
    constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 53;
            this.spriteHeight = 152;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = this.game.width * 0.5 - this.width * 0.5;
            this.y = this.game.height * 0.5 - this.height * 0.5;
            this.image = document.getElementById("fire");
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 6;
        }

        draw(context,) {
            this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;
            context.save();
            ctx.globalAlpha = 0.5;
            context.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x+53,
                this.y+23,
                this.width/3,
                this.height/3,
            );
            context.restore();    
        }
    }
export default FireSheet;