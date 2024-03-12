import Cats from './Cats.js';
import Background from './Background.js';
import Stage from './Stage.js';
import Starfeild from './Starfeild.js';
import FireSheet from './FireSheet.js';
import Heart from './Heart.js';
import StageHeart from './StageHeart.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    ctx.font = "16px monospace"
    ctx.fillStyle = "white";
    ctx.globalAlpha = .75;

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
            this.hearts = new Heart(this);
            this.catPool = [];
            this.heartPool = [];
            this.stageHeartPool = [];
            this.max = 1;
            this.stageHeart = new StageHeart(this);
            this.createCatPool();
            this.createStagePool();
            // this.mouse = {
            //     x: this.width * 0.5,
            //     y: this.height * 0.5,
            //     pressed: false
            // };
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
            for (let i = 0; i < 30; i++){
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
                    // if (this.mouse.pressed && this.isMouseOverCat(cat)) {
                    //     cat.free = true;
                    //     cat.catSleep();
                    // }
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
    var requiredElapsed = 1000 / 9; 
    
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

export default Game;
