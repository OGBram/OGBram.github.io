window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 432;

    class Cats {
            constructor(game) {
                this.game = game;
                this.catspeed = 1;
                this.spriteWidth = 32;
                this.spriteHeight = 33;
                this.free = true;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = this.game.width * 0.5 - this.width * 0.5;
                this.y = this.game.height * 0.5 - this.height * 0.5;
                this.image = document.getElementById("catTan");
                this.frameX = 0;
                this.frameY = 2;
                this.maxFrame = 6;
                this.start();
                this.speedX = Math.floor(Math.random()* 5);
                this.speedY = Math.floor(Math.random()* 3);
                this.maxY = 300;
                this.minY = 50;

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
                //bot of screen and jump values//
                if(this.x > 290){
                    
                    this.y += -15;
                    this.x += this.speedX+1;

                }if(this.y >= this.maxY){
                    
                    this.y += this.speedY-15;
                    this.x += this.speedX+5;
                }
                if(!this.free){
                    this.x += this.speedX;
                    this.y += this.speedY;
                }
            }

            reset(){

                this.frameX = 0;
            
            }
            start() {
                if (this.free) {
                    this.x = Math.random() * this.game.width /1.5-100;
                    this.y = Math.random() * this.game.height /1.5+125;
                
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
            this.max = 50;
            this.createCatPool();
            this.getCat();
            
            this.mouse = {
                x: this.width * 0.5,
                y: this.height * 0.5,
                pressed: false            
            };

            window.addEventListener('mousedown', e => {
                game.mouse.x = e.offsetX;
                game.mouse.y = e.offsetY;
                game.mouse.pressed = true;
            });
            
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
        mousedown = (e) => {
            if (e.code === "mousedown") {
                this.mouse.pressed = true;
            }
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
                    if (this.mouse.pressed) {
                    cat.free = true;
                    cat.start();
                    // console.log(this.mouse.x, this.mouse.y)
                    }
                cat.update();
                cat.draw(context);
                }
            });
            this.mouse.pressed = false; 
            this.background.draw(context);
            this.background2.draw(context, 0.5);
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
