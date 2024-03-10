window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 500;
    ctx.font = "16px monospace"
    ctx.fillStyle = "white";
    ctx.globalAlpha = .75;

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
                this.minY = 65;
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
                        this.speedX = 1;
                        this.speedY = 1;
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
                ctx.globalAlpha = 0.5;
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

            }
                draw(context,) {
                    if(this.x >= 8000) {
                        reset()
                    }
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
                }
        }    
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
    class Ui {
        constructor(game) {
                this.game = game;
                this.dx = 0;
                this.dy = 0;
                this.speedModifier = 1;
                this.spriteWidth = 320;
                this.spriteHeight = 80;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = 285;
                this.y = 350;
                this.image = document.getElementById("box");
                this.frameX = 0;
                this.frameY = 3;
                this.maxFrame = 0;

        }
            draw(context,) {
                // this.frameX < this.maxFrame ? this.frameX++ : this.frameX = 3;
                context.save();
                ctx.globalAlpha = .7;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x-150,
                    this.y,
                    this.width,
                    this.height,
                );
                context.restore();    
            }
            reset(){
                this.x = 0;
                this.y = 0;
            }
        }

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.ispressed = false;
            this.starFeild = new Starfeild(this);
            this.stage = new Stage(this);
            this.background = new Background(this);
            this.fireSheet = new FireSheet(this);
            // this.Ui = new Ui(this);
            this.catPool = [];
            this.max = 1;
            this.createCatPool();
            // this.getCat();
            // this.startCatButton = document.getElementById('return');
            this.mouse = {
                x: this.width * 0.5,
                y: this.height * 0.5,
                pressed: false
            };
            // this.startCatButton.addEventListener('click', e => {
            //     this.max = 1;
            //     this.catPool.splice(this.max, this.catPool.length);
            //     this.catPool.forEach(cat => {
            //         cat.free = true;
            //         cat.start();
            //     });
            // });

            // window.addEventListener('mousedown', e => {
            //     this.mouse.x = e.offsetX;
            //     this.mouse.y = e.offsetY;
            //     this.mouse.pressed = true;
            //     this.catPool.push(new Cats(this));
                
            // });

        }
        createCatPool(){
            for (let i = 0; i < this.max; i++){
                this.catPool.push(new Cats(this));
            }
        }   

        getCat() {
            for (let i = 0; i < this.catPool.length; i++) {
                if (this.catPool[i].free) {
                    return this.catPool[i];
                }
            }
            return null; 
        }
        
        isMouseOverCat(cat) {
            return (
                this.mouse.x >= cat.x &&
                this.mouse.x <= cat.x + cat.width &&
                this.mouse.y >= cat.y &&
                this.mouse.y <= cat.y + cat.height
            );
        }

        render(context) {
            
            this.starFeild.draw(context);
            this.stage.draw(context);
            this.catPool.forEach(cat => {
                if (!cat.free) {
                    if (this.mouse.pressed && this.isMouseOverCat(cat)) {
                        cat.free = true;
                        cat.catSleep();
                    }
                    cat.update();
                    cat.draw(context);
                }
            });
            this.mouse.pressed = false;
            this.background.draw(context);
            this.fireSheet.draw(context);

            ctx.fillText("\"Birds migrating,", 205, 354);
            ctx.fillText("Ah—where they are headed,", 207, 376);
            ctx.fillText("must be my homeland\"", 232, 397);
            context.save()
            ctx.font = "10px monospace"
            ctx.fillText("-Murakami 1938.", 325, 420);
            context.restore()


        }
    }
    
    const game = new Game(canvas);
    
    var lastTime;
    var requiredElapsed = 1000 / 6; 
    
    requestAnimationFrame(loop);
    
    function loop(now) {
        requestAnimationFrame(loop);
    
        if (!lastTime) { lastTime = now; }
        var elapsed = now - lastTime;
    
        if (elapsed > requiredElapsed) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.render(ctx);
            game.catPool.forEach(cat => {
                cat.update();
            });
            lastTime = now;
        }
    } 
});
