window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 432;
    ctx.font = "17px 'math', sans-serif";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 1.0;

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
                    if(this.x > 290 && this.y >220 && this.x <375){
                         this.y += -15;
                         this.x += this.speedX;
                        }
                        
                        if(this.y >= this.maxY){
                         this.y += this.speedY-5;
                         this.x += this.speedX++;
                         this.frameY = 6;
                         }
                        
                         if(this.y <= this.minY && this.x < 490){
                         this.y += this.speedY+12;
                         this.x += this.speedX++;  
                        }
                        
                        if(this.x >= 450){
                         this.speedX = (Math.random() * 4 -2);
                         this.speedY = (Math.random() * 5 -2);
                         this.speedX --;
                         this.frameY = 5;
                    
                        }
                        if(!this.free){
                         this.x += this.speedX;
                         this.y += this.speedY;
                        }
                        
                        if(this.x < 110){
                         this.speedX = (Math.random() * 5 -2);
                         this.speedY = (Math.random() * 4 -2);
                         this.x ++;
                         this.frameY = 6;  
                        }
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
    class Detonate {
        constructor(game) {
                this.game = game;
                this.speedModifier = 1;
                this.spriteWidth = 300;
                this.spriteHeight = 300;
                this.width = this.spriteWidth*2;
                this.height = this.spriteHeight*2;
                this.image = document.getElementById("detonate");
                this.frameX = 23;
                this.frameY = 1;
                this.maxFrame = 22;
                this.x = game.width/10;
                this.y = game.height/10;
                this.ispressed = false;
            }
    
            draw(context,) {
          
                this.frameX <= this.maxFrame ? this.frameX++ :
                
                context.save();
                ctx.globalAlpha = 1.0;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x-75,
                    this.y-150,
                    this.width,
                    this.height,
                );
                context.restore();    
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
                this.maxFrame = 4;
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
                    context.save();
                    ctx.globalAlpha = 1;
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
                    );
                    context.restore();    
                }
                reset(){
                    this.x = 0;
                    this.y = 0;
                }
            }    

    class Background2 {
        constructor(game) {
                this.game = game;
                this.dx = 0;
                this.dy = 0;
                this.speedModifier = 1;
                this.spriteWidth = 82;
                this.spriteHeight = 120;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = this.game.width * 0.5 - this.width * 0.5;
                this.y = this.game.height * 0.5 - this.height * 0.5;
                this.image = document.getElementById("player");
                this.frameX = 2;
                this.frameY = 0;
                this.maxFrame = 2;
            }
    
        draw(context,) {
                // this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;
                context.save();
                ctx.globalAlpha = 0.7;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x-15,
                    this.y+55,
                    this.width,
                    this.height,
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
            this.background2 = new Background2(this);
            this.detonate = new Detonate(this);
            this.Ui = new Ui(this);
            this.catPool = [];
            this.max = 1;
            this.createCatPool();
            this.getCat();
            this.startCatButton = document.getElementById('return');
            this.mouse = {
                x: this.width * 0.5,
                y: this.height * 0.5,
                pressed: false
            };
            this.startCatButton.addEventListener('click', e => {
                this.detonate.frameX = 0;
                this.max = 1;
                this.catPool.splice(this.max, this.catPool.length);
                this.catPool.forEach(cat => {
                    cat.free = true;
                    cat.start();
                });
            });

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
            this.background2.draw(context);
            this.detonate.draw(context);
            this.Ui.draw(context);


        }
    }
    
    const game = new Game(canvas);
    
    var lastTime;
    var requiredElapsed = 1000 / 8; 
    
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
            ctx.fillText("\"Birds migrating,", 200, 375);
            ctx.fillText("Ah-where they are headed,", 200, 395);
            ctx.fillText("must be my homeland\"", 205, 415);
            lastTime = now;
        }
    } 
});
