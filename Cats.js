class Cats {
    constructor(game) {
        this.game = game;
        this.catspeed = 1;
        this.spriteWidth = 31.3;
        this.spriteHeight = 32;
        this.free = true;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.image = document.getElementById("catsMulti");
        this.frameX = 6;
        this.frameY = 6;
        this.minFrame = 6;
        this.maxFrame = 8;
        this.speedX = 1;
        this.speedY = 1;
        this.maxY = 300;
        this.minY = 100;
        this.selectCat = false;
        this.start();
        
    }

    draw(context) {
        if (!this.free){
        context.drawImage(
            this.image,
            this.frameX * this.spriteWidth,
            this.frameY * this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width*.8,
            this.height*.8,
        );}
    }
    
    update(){
        this.frameX += this.catspeed;
        if(this.frameX > this.maxFrame){
        this.reset(); 
        }
        if(this.y <= 122 && this.x <= 235) {
            game.createHeartPool();
            this.frameX = 6;
        } 
        if(!this.free){
            if(this.y <= 100){
                this.speedY+=5;
                this.speedX = Math.random()*4 -2;
            }
            if(this.x >= 450){
                this.speedX--;

            }
            if(this.x < 50){
                this.speedX++;
 
            }
            if(this.y > 300){
                this.speedY--;
                this.speedX = Math.random()*4 -2;
  
            }
            if(this.speedY > 3){
                this.speedX = 2;
                this.speedY = 2;
            }
            this.x+=this.speedX;
            this.y+=this.speedY;
            if(this.speedX > 0){
                this.frameY = 6;
            }else this.frameY = 5;
        }
    }
    catSleep(cat){ 
        this.free = false;
        this.minFrame = 0;
        this.maxFrame = 2;
        this.frameY = 6;
        this.frameX = 0;
    }
    
    reset(){

        this.frameX = this.minFrame;
        this.free = false;
    
    }
    start() {
        if (this.free) {
            this.x = this.game.width - this.game.width +200 - (Math.random()*100-10);
            this.y = this.game.height - this.game.height - (Math.random()*100-200);
            this.speedX = (Math.random()* 4 - 2);
            this.speedY = (Math.random()* 4 - 2);
            this.frameY = 6;

            this.free = false;

        }           
    }    
}
export default Cats;