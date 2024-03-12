class Starfeild {
    constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 9000;
            this.spriteHeight = 630;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = 0;
            this.y = 0;
            this.image = document.getElementById("starFeild");
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 0;
            this.timer = 0;

    }
        draw(context,) {
        
            if(this.timer>7000){
                this.reset();
                this.timer = 0;
            }else this.timer++;
            
            context.save()
            context.globalAlpha = 1.0;
            context.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x--,
                this.y,
                this.width/2,
                this.height/2,
            
            );context.restore();

        }
        reset(){
            this.x = 0;
            this.y = 0;
            this.frameX = 0;
            this.frameY = 0;
        }
}  
export default Starfeild;