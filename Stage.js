class Stage {
    constructor(game) {
                this.game = game;
                this.dx = 0;
                this.dy = 0;
                this.speedModifier = 1;
                this.spriteWidth = 600;
                this.spriteHeight = 432;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = this.game.width * 0.5 - this.width * 0.5;
                this.y = this.game.height * 0.5 - this.height * 0.5;
                this.image = document.getElementById("stage");
                this.frameX = 0;
                this.frameY = 0;
                this.maxFrame = 0;
            }
    
            draw(context,) {
                // this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;
                context.save();
                ctx.globalAlpha = .5;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x,
                    this.y,
                    this.width,
                    this.height,
                );
                context.restore();    
            }
    }    
export default Stage;