class Background {
    constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 149;
            this.spriteHeight = 103;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = this.game.width * 0.5 - this.width * 0.5;
            this.y = this.game.height * 0.5 - this.height * 0.5;
            this.image = document.getElementById("waterA");
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 3;
        }

        draw(context,) {
            this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;
            context.save();
            context.globalAlpha = 0.3;
            context.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x-124,
                this.y+46,
                this.width,
                this.height,
            );
            context.restore();
        }
    }
export default Background;