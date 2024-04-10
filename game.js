window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    ctx.font = "16px monospace"
    ctx.fillStyle = "white";
    
    class Cats {
            constructor(game) {
                this.game = game;
                this.catspeed = 2;
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
                context.save()
                context.globalAlpha = 1.0;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x,
                    this.y,
                    this.width*.75,
                    this.height*.75,
                );}
                context.restore();
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
    class Footsteps {
        constructor(game) {
            this.game = game;
            this.cat = game.catPool[0];
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 16;
            this.spriteHeight = 16;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = this.game.cat.x+Math.random()*15;
            this.y = this.game.cat.y+Math.random()*15-25;
            this.image = document.getElementById("hearts");
            this.frameX = 0;
            this.frameY = Math.floor(Math.random()*3);
            this.maxFrame = 0;
            this.speedX = Math.random()*1;
            this.speedY = Math.random()*1;
            this.autoPlaying = false;
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
                this.width*.5,
                this.height*.5,
            );
            context.restore();    
            }
            
            update(){
            if(this.cat.speedX>0){
                this.speedX -= Math.random()-.5;
            }else{
                this.speedX =+1;
            }

            this.x += this.speedX;
            this.y += this.speedY;
            
            if(this.x > 250 || this.x < -300){
            this.reset();
            }
            if(this.y+30<this.cat.y || this.y-20>this.cat.y){
                this.reset();
            }
         }

            reset(){
            this.x = this.cat.x;
            this.y = this.cat.y;
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
                this.spriteTimer = 0;
            }
            draw(context,) {
                context.save();
                ctx.globalAlpha = 0.35;
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x-130,
                    this.y+46,
                    this.width,
                    this.height,
                );
                context.restore();    
            }
            update(){
                this.spriteTimer++;
                
                if(this.spriteTimer === 1){
                    this.frameX ++;
                    if(this.frameX > this.maxFrame){
                    this.reset(); 
                }}
                if(this.spriteTimer > 8){
                    this.spriteTimer = 0;
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
                    this.timer++;
                    if(this.timer>20000){
                        this.reset()
                        this.timer=0;
                    }
                    context.save()
                    context.globalAlpha = .99;
                    const sinOffset = Math.sin(Date.now() * 0.001) * 1;
                    const yOffset = sinOffset;
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x+=-.5,
                        this.y,
                        this.width,
                        this.height,
                    
                    );
                    context.restore();
                    context.save()
                    context.globalAlpha = .99;
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x,
                        this.y,
                        this.width/1.3,
                        this.height/1.3,
                    
                    );
                    context.restore();
                }                    
                reset(){
                    this.x+= 9000;
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
                    this.spriteTimer = 0;
                }
                draw(context,) {
                    this.spriteTimer++;
                
                    if(this.spriteTimer === 1){
                        this.frameX ++;
                        if(this.frameX >= this.maxFrame){
                        this.frameX = 0;
                    }}
                    if(this.spriteTimer > 1){
                        this.spriteTimer = 0;
                    }
                    context.save();
                    ctx.globalAlpha = 0.8;
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x+30,
                        this.y+40,
                        this.width/3,
                        this.height/3,
                    );
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x-150,
                        this.y+15,
                        this.width/3,
                        this.height/3,
                    );
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x-85,
                        this.y-15,
                        this.width/3,
                        this.height/3,
                    );
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x-35,
                        this.y+80,
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
                    this.width*.5,
                    this.height*.5,
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
                    this.x = 50 + Math.floor(Math.random()*489);
                    this.y = game.height * .5 + Math.floor(Math.random()*100-100);
                    this.image = document.getElementById("hearts");
                    this.frameX = 0;
                    this.frameY = Math.floor(Math.random()*3);
                    this.maxFrame = 0;
                    this.cat = game.catPool[0];
                    
            }
            draw(context) {
                context.save();
                context.globalAlpha = 1.0;
            

                const sinOffset = Math.sin(Date.now() * 0.003) * 4;
                const newY = this.y + sinOffset;
            
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x,
                    newY,
                    this.width * 0.72,
                    this.height * 0.72,
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
                            for (let i = 0; i < 4; i++) {
                                this.game.flowerPool.push(new Flower(game));
                            }
                            this.game.stageHeartPool.splice(index, 1);
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
    class Flower {
        constructor(game) {
                    this.game = game;
                    this.dx = 0;
                    this.dy = 0;
                    this.speedModifier = 1;
                    this.spriteWidth = 40;
                    this.spriteHeight = 42;
                    this.width = this.spriteWidth;
                    this.height = this.spriteHeight;
                    this.x = game.width  - Math.floor(Math.random()*600);
                    this.y = 500 - Math.floor(Math.random()*400);
                    this.image = document.getElementById("flower");
                    this.frameX = 0;
                    this.frameY = Math.floor(Math.random()*5);
                    this.maxFrame = 5;
                    this.spriteTimer3 = 0;
                }
        
                draw(context,) {
                    context.save();
                    context.globalAlpha = 0.95;
                    context.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        this.frameY * this.spriteHeight,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x,
                        this.y,
                        this.width/2,
                        this.height/2,
                    );
                    context.restore();
                }

        }
    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.starFeild = new Starfeild(this);
            this.stage = new Stage(this);
            this.background = new Background(this);
            this.fireSheet = new FireSheet(this);
            this.hearts = new Heart(this);
            this.flower = new Flower(this);
            this.flowerPool = [];
            this.catPool = [];
            this.heartPool = [];
            this.stageHeartPool = [];
            this.footstepPool = [];
            this.max = 1;
            this.stageHeart = new StageHeart(this);
            this.cat = new Cats(this);
            this.createCatPool();
            this.createFootsteps();
            this.createStagePool();

            setInterval(() => {
                this.stageHeartPool.push(new StageHeart(this));
            }, 4000);
            
            this.button1 = document.getElementById("mute");
            this.ispressed = false;
            this.button1.addEventListener("click", function() {

                window.location.href = "https://ogbram.github.io/gandalf/";
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
        createFootsteps(){
            for (let i = 0; i < 5; i++){
                this.footstepPool.push(new Footsteps(this));
            } 
        }   
        createStagePool(){
            for (let i = 0; i < 40; i++){
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

            this.flowerPool.forEach(flower => {
                flower.draw(context);
                context.save();
                context.fillStyle = "black";
                context.globalAlpha = .35;
                const size = 10;
                context.fillRect(flower.x+12, flower.y+15, size, 3)
                context.restore();
            });

            this.catPool.forEach(cat => {
                if (!cat.free) {
                    cat.update();
                    cat.draw(context);
                }
            });

            this.footstepPool.forEach(footstep => {
                footstep.draw(context);
                footstep.update();
            });
            
            this.stageHeartPool.forEach(stageHeart => {
                stageHeart.draw(context);
                stageHeart.update();
                context.save()
                context.globalAlpha = .35;
                context.fillStyle = "black";
                context.beginPath(); 
                const sinOffset = Math.sin(Date.now() * 0.003) * 4;
                const size = 4 + sinOffset;
                context.arc(stageHeart.x+8, stageHeart.y+20, size*.5, 0, 2 * Math.PI);
                context.fill();
                context.restore();
            });
            
            this.heartPool.forEach(hearts => {
                hearts.draw(context);                                                    
                hearts.update();
            });

            this.background.draw(context);
            this.background.update();
            this.fireSheet.draw(context);
            
            context.save();
            context.globalAlpha = 1.0;
            ctx.font = "20px monospace";
            ctx.drawImage(document.getElementById("flower"),0,0,32,42,0,0,64,84);
            context.restore();    
        }
    }
    
    const game = new Game(canvas);
    
    var lastTime;
    var requiredElapsed = 1000 / 45; 
    
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
