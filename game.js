window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    ctx.font = "16px monospace"
    ctx.fillStyle = "white";
    let audio1 = new Audio('data:audio/wav;base64,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');
    let audio2 = new Audio('data:audio/wav;base64,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');
    audio1.autoplay = false;
    audio2.autoplay = false;

    audio1.playbackRate = .75;
    audio2.playbackRate = 1;

    audio1.volume = .5;
    audio2.volume = .5;
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
                this.speedX = 2;
                this.speedY = 2;
                this.maxY = 300;
                this.minY = 100;
                this.spriteTimer = 0
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
                this.spriteTimer++;
                
                if(this.spriteTimer === 1){
                    this.frameX += this.catspeed;
                    if(this.frameX > this.maxFrame){
                    this.reset(); 
                }}
                if(this.spriteTimer > 3){
                    this.spriteTimer = 0;
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
                    
                        this.speedY = 3;
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
                this.spriteTimer2 = 0;
            }
    
            draw(context,) {
                context.save();
                ctx.globalAlpha = 0.4;
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
            update(){
                this.spriteTimer2++;
                
                if(this.spriteTimer2 === 1){
                    this.frameX ++;
                    if(this.frameX > this.maxFrame){
                    this.reset(); 
                }}
                if(this.spriteTimer2 > 5){
                    this.spriteTimer2 = 0;
                }
            }
            reset(){
                this.frameX = 0;
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
                    this.timer = 0;
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
                    this.spriteWidth = 18000;
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
                    if(this.timer>18000){
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
                    
                    );
                    context.restore();
                }                    
   
                reset(){
                    this.x = 0;
                    this.y = 0;
                    this.frameX = 0;
                    this.frameY = 0;
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
                    ctx.globalAlpha = 0.8;
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
    class Heart {
        constructor(game) {
                this.game = game;
                this.dx = 0;
                this.dy = 0;
                this.speedModifier = 1;
                this.spriteWidth = 16;
                this.spriteHeight = 16;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = 50 + Math.random()*100;
                this.y = 75 + Math.random()*100;
                this.image = document.getElementById("hearts");
                this.frameX = 0;
                this.frameY = Math.floor(Math.random()*3);
                this.maxFrame = 0;
                this.speedX = 0;
                this.speedY = 0;
                this.autoPlaying = false;
                this.game.audio1.play();
                this.game.audio2.play();

        }
            draw(context,) {
                context.save();
                context.globalAlpha = 1.0;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x,
                    this.y,
                    this.width/1.8,
                    this.height/1.8,
                );
                context.restore();    
            }
            update(){
                this.speedX = Math.floor(Math.random()*25);
                this.speedY = -3;
                this.x += this.speedX;
                this.y += this.speedY;
                }

        
            reset(){
                this.x = 0;
                this.y = 0;
            }
        }

    class StageHeart {
            constructor(game) {
                    this.game = game;
                    this.dx = 0;
                    this.dy = 0;
                    this.speedModifier = 1;
                    this.spriteWidth = 16;
                    this.spriteHeight = 16;
                    this.width = this.spriteWidth;
                    this.height = this.spriteHeight;
                    this.x = game.width  - Math.floor(Math.random()*600);
                    this.y = game.height * .5 + Math.floor(Math.random()*100-100);
                    this.image = document.getElementById("hearts");
                    this.frameX = 0;
                    this.frameY = Math.floor(Math.random()*3);
                    this.maxFrame = 0;
                    this.cat = this.game.catPool[0];
                    
            }
                draw(context,) {
    
                    context.save();
                    ctx.globalAlpha = 1.0;
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x,
                        this.y,
                        this.width/1.5,
                        this.height/1.5,
                    );
                    context.restore();    
                }
                update() {
                    const range = 10;
                    if (
                        Math.abs(this.x - this.cat.x - 12) <= range &&
                        Math.abs(this.y - this.cat.y - 12) <= range
                    ) {
                        const index = this.game.stageHeartPool.findIndex(item => item === this);

                        if (index !== -1) {
                            this.game.stageHeartPool.splice(index, 1);
                            if(this.game.ispressed){
                                this.game.audio1.play();
                            }
                            
                        }
                    }
                }
                
                
                play() {
                    if (!this.audioPlaying) {
                        this.game.audio1.play();
                        this.audioPlaying = true;
                
                       
                        this.game.audio1.addEventListener('ended', () => {
                            this.audioPlaying = false;
                        });
                    }
                }
                
                reset() {
                    this.x = 0;
                    this.y = 0;

                    this.audioPlaying = false;
                }
                
        }

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.audio1 = audio1;
            this.audio2 = audio2;

            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.starFeild = new Starfeild(this);
            this.stage = new Stage(this);
            this.background = new Background(this);
            this.fireSheet = new FireSheet(this);
            this.hearts = new Heart(this);
            this.catPool = [];
            this.heartPool = [];
            this.stageHeartPool = [];
            this.max = 1;
            this.stageHeart = new StageHeart(this);
            this.createCatPool();
            this.createStagePool();
            setInterval(() => {
                this.stageHeartPool.push(new StageHeart(this));
            }, 5000);
            this.button1 = document.getElementById("mute");
            this.ispressed = false; 
            this.button1.addEventListener('click', () => {
                if (!this.ispressed) {
                    this.ispressed = true;
                    audio1.volume = 0.5;
                    audio2.volume = 0.5;
                } else {
                    this.ispressed = false;
                    audio1.volume = 0.0;
                    audio2.volume = 0.0;
                }
            });
        }
        createHeartPool(){
            for (let i = 0; i < 6; i++){
                this.heartPool.push(new Heart(this));
            }
        }
        createCatPool(){
            for (let i = 0; i < this.max; i++){
                this.catPool.push(new Cats(this));
            }
        }   
        createStagePool(){
            for (let i = 0; i < 60; i++){
                this.stageHeartPool.push(new StageHeart(this));
            }
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
                    cat.update();
                    cat.draw(context);
                }
            });
            
            this.stageHeartPool.forEach(stageHeart => {
                stageHeart.draw(context);
                stageHeart.update()
            })
            


            this.heartPool.forEach(hearts => {
                hearts.draw(context)                                                    
                hearts.update();

            });


            this.background.draw(context);
            this.background.update();
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
    var requiredElapsed = 1000 / 30; 
    
    requestAnimationFrame(loop);
    
    function loop(now) {
        requestAnimationFrame(loop);
    
        if (!lastTime) { lastTime = now; }
        var elapsed = now - lastTime;
    
        if (elapsed > requiredElapsed) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.render(ctx);
            lastTime = now;
        }
    } 
});
