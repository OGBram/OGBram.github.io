window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 432;

    class Player {
        constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 125;
            this.spriteHeight = 135;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = this.game.width * 0.5 - this.width * 0.5;
            this.y = this.game.height * 0.5 - this.height * 0.5;
            this.image = document.getElementById("goku");
            this.frameX = 0;
            this.frameY = 2;
            this.maxFrame = 4;
        }

        draw(context,) {
            this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;

            context.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x+50,
                this.y+50,
                this.width /5,
                this.height /5,
            );

        }
    } 
    class Cats {
            constructor(game) {
                this.game = game;
                this.catspeed = 1;
                this.spriteWidth = 32;
                this.spriteHeight = 32;
                this.free = true;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = this.game.width * 0.5 - this.width * 0.5;
                this.y = this.game.height * 0.5 - this.height * 0.5;
                this.image = document.getElementById("catTan");
                this.frameX = 0;
                this.frameY = 1;
                this.maxFrame = 8;
                this.start();
            }

            draw(context,) {
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
                    this.width,
                    this.height,
                );}
            }
            update(){
                if (!this.free){
                    this.frameX += this.catspeed;
                    if(this.frameX >= this.maxFrame){
                     this.reset(); 
                    }
                }
            }        
            reset(){

                this.frameX = 0;
            
            }
            start() {
                if (this.free) {
                    this.x = Math.random() * this.game.width;
                    this.y = Math.random() * this.game.height;
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
            this.player = new Player(this);
            this.background = new Background(this);
            this.background2 = new Background2(this);
            this.catPool = [];
            this.max = 15;
            this.createCatPool();
            this.getCat();
            
            // this.mouse = {
            //     x: this.width * 0.5,
            //     y: this.height * 0.5,
            //     pressed: false            
            // }

            // window.addEventListener('mousedown', e => {
            //     this.mouse.x = e.offsetX;
            //     this.mouse.y = e.offsetY;
            //     this.mouse.pressed = true;
            // });

            // window.addEventListener('mouseup', e => {
            //     this.mouse.x = e.offsetX;
            //     this.mouse.y = e.offsetY;
            //     this.mouse.pressed = true;
            // });

            // window.addEventListener('mousemove', e => {
            //     if (this.mouse.pressed) {
            //         this.mouse.x = e.offsetX;
            //         this.mouse.y = e.offsetY;
            //     }
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

        render(context) {
            this.catPool.forEach(cat => {
                if (!cat.free) {
                    cat.update(); 
                    cat.draw(context);
                }
            });
        
            this.background.draw(context);
            this.background2.draw(context, 0.5);
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

// document.getElementById("toggleNav").addEventListener("click", function() {
//   var nav = document.getElementById("mainNav");
//   var navStyle = window.getComputedStyle(nav);

//   nav.style.display = (navStyle.getPropertyValue("display") === "flex") ? "none" : "flex";
// });

// function openAboutModal() {
//     document.getElementById('aboutModal').style.display = 'block';
// }

// function closeAboutModal() {
//     document.getElementById('aboutModal').style.display = 'none';
// }

// function openContactsModal() {
//     document.getElementById('contactsModal').style.display = 'block';
// }

// function closeContactsModal() {
//     document.getElementById('contactsModal').style.display = 'none';
// }
