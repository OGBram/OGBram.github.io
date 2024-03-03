window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 432;
    ctx.font = "30px 'Comic Sans MS', cursive, sans-serif";
    ctx.fillStyle = "hsla(125, 100%, 50%, 1.0)";

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
                this.minY = 50;
                this.start();
                
            }

            draw(context) {
                // this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;
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
                    if(this.x > 290 && this.y >200){
                         this.y += -15;
                         this.x += this.speedX;
                        }
                        if(this.y >= this.maxY){
                         this.y += this.speedY-15;
                         this.x += this.speedX++;
                         this.frameY = 6;
                         }
                        if(this.y <= this.minY){
                          this.y += this.speedY+6;
                          this.x += this.speedX+1;  
                        }
                        if(this.x >= 450){
                         this.speedX = Math.random(4) * -2;
                         this.speedY = Math.random(4) * -2;
                         this.speedX --;
                         this.frameY = 5;
                    
                        }
                        if(!this.free){
                          this.x += this.speedX;
                          this.y += this.speedY;
                         }
                        if(this.x < 100){
                        this.speedX = Math.random(4) * 2;
                        this.speedY = Math.random(4) * 2;
                          this.x ++;
                          this.frameY = 6;  
                        }
                    
                    }

             }

            catSleep(cat){ 
                this.free = false;
                this.minFrame = 0;
                this.maxFrame = 2;
            }
            
            reset(){

                this.frameX = this.minFrame;
                this.free = false;
            
            }
            start() {
                if (this.free) {
                    this.x = this.game.width - this.game.width +200;
                    this.y = Math.random() * this.game.height /1.5+50;
                    this.speedX = Math.floor(Math.random()* 3);
                    this.speedY = Math.floor(Math.random()* 3);
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

    class Background2 {
        constructor(game) {
                this.game = game;
                this.dx = 0;
                this.dy = 0;
                this.speedModifier = 1;
                this.spriteWidth = 82;
                this.spriteHeight = 40;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = this.game.width * 0.5 - this.width * 0.5;
                this.y = this.game.height * 0.5 - this.height * 0.5;
                this.image = document.getElementById("waterA2");
                this.frameX = 0;
                this.frameY = 0;
                this.maxFrame = 20;
        }
    
        draw(context,) {
                this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;
                context.save();
                ctx.globalAlpha = 0.3;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x+109,
                    this.y+9,
                    this.width,
                    this.height,
                );
                context.restore();
        }
    }

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.background = new Background(this);
            this.background2 = new Background2(this);
            this.catPool = [];
            this.max = 12;
            this.createCatPool();
            this.getCat();
            this.startCatButton = document.getElementById('Hi');
            this.newCatButton = document.getElementById('catMenuB');

            
            this.mouse = {
                x: this.width * 0.5,
                y: this.height * 0.5,
                pressed: false
            };
            // this.newCatButton = 0;
            // this.newCatButton = document.getElementById('addcatb');
            // this.newCatButton.addEventListener('click', setValues);
            this.newCatButton = document.addEventListener('click', () => {
                this.setValues()
            });

            
            this.startCatButton = document.getElementById('Hi');
            this.startCatButton.addEventListener('click', () => {
                this.catPool.forEach(cat => {
                    cat.free = true;
                    cat.start();
                });
            });

            window.addEventListener('mousedown', e => {
                this.mouse.x = e.offsetX;
                this.mouse.y = e.offsetY;
                this.mouse.pressed = true;
            });
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
        setValues() {
            if(this.newCatButton = "mini"){
                this.max = +1;
                this.catPool.push(new Cats(this))
            }
            
            this.y = this.canvas.height;
            this.x = this.canvas.width;

          }

        render(context) {
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
            this.background2.draw(context, 0.5);
    }}
    //start///
    const game = new Game(canvas);
    startCatButton = document.getElementById("Hi");
    startCatButton.addEventListener('click', e => {
        game.catPool.forEach(cat => {
            cat.free = true;
            cat.start();
            })   
        });
    
    var lastTime;
    var requiredElapsed = 1000 / 10; 
    
    requestAnimationFrame(loop);
    
    function loop(now) {
        requestAnimationFrame(loop);
    
        if (!lastTime) { lastTime = now; }
        var elapsed = now - lastTime;
    
        if (elapsed > requiredElapsed) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText(`cats:${game.catPool.length}`, canvas.width/2 -55, canvas.height,);
            game.render(ctx);
            game.catPool.forEach(cat => {
                cat.update();
            });
    
            lastTime = now;
        }
    } 
});
