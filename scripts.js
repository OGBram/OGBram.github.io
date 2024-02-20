window.addEventListener('load', function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 100;

    class Player {
        constructor(game) {
            this.game = game;
            this.dx = 0;
            this.dy = 0;
            this.speedModifier = 1;
            this.spriteWidth = 44;
            this.spriteHeight = 44;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = this.game.width * 0.5 - this.width * 0.5;
            this.y = this.game.height * 0.5 - this.height * 0.5;
            this.image = document.getElementById("femsheet");
            this.frameX = 0;
            this.frameY = 10;
            this.maxFrame = 2;
        }

        draw(context,) {
            this.frameX <= this.maxFrame ? this.frameX++ : this.frameX = 0;

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

        }

        update(deltaTime) {
            
            

            console.log("deltaTime")
        }

                
        
    }

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.player = new Player(this);
            this.mouse = {
                x: this.width * 0.5,
                y: this.height * 0.5,
                pressed: false
            }

            window.addEventListener('mousedown', e => {
                this.mouse.x = e.offsetX;
                this.mouse.y = e.offsetY;
                this.mouse.pressed = true;
            });

            window.addEventListener('mouseup', e => {
                this.mouse.x = e.offsetX;
                this.mouse.y = e.offsetY;
                this.mouse.pressed = true;
            });

            window.addEventListener('mousemove', e => {
                if (this.mouse.pressed) {
                    this.mouse.x = e.offsetX;
                    this.mouse.y = e.offsetY;
                }
            });
        }

        render(context, deltaTime) {
            
            this.player.update(deltaTime);
            
            this.player.draw(context);
        
            
        }
        
    }
    const game = new Game(canvas);
    
    var lastTime;
    var requiredElapsed = 1000 / 5; // desired interval is 10fps
    
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
