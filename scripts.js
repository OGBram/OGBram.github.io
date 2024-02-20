class Player {
    constructor(game){
        this.game = game;
        this.collisionX = this.game.width * 0.5;
        this.collisionY = this.game.height * 0.5;
        this.collisionRadius = 30;
        this.dx = 0;
        this.dy = 0;
        this.speedModifier = 1;
        this.spriteWidth = 32;
        this.spriteHeight = 32;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = this.game.width * 0.5 - this.width * 0.5; 
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.image = document.getElementById('idle');
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 1;
        this.spriteUpdate = true;
        this.spriteTimer = 0;
        this.spriteInterval = 50;
        console.log(this.spriteUpdate)
    }
    draw(context){
        
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x +50, this.y +50, this.width, this.height);
        context.beginPath();
        context.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2);
        context.save();
        context.globalAlpha = 0.5;
        context.fill();
        context.restore();
        context.stroke();
    }
    update(){
        if (this.frameX < this.maxFrame){  
            this.frameX++
        } else { this.frameX = 0;}
        
        this.dx = this.game.mouse.x - this.collisionX;
        this.dy = this.game.mouse.y - this.collisionY;
        const distance = Math.hypot(this.dy, this.dx);
        if (distance > this.speedModifier){
            this.speedX = this.dx/distance || 0;
            this.speedY = this.dy/distance || 0;
        } else {
            this.speedX = 0;
            this.speedY = 0;
        }     
        this.collisionX += this.speedX * this.speedModifier;
        this.collisionY += this.speedY * this.speedModifier;
        
    
      }  
}

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this);
        this.numberOfObstacles = 0;
        this.obstacles = [];
        this.mouse = {
          x: this.width * 0.5,
          y: this.height * 0.5,
          pressed : false} 

        
        // event listeneres
        window.addEventListener('mousedown', e => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            this.mouse.pressed = true;
        })
        window.addEventListener('mouseup', e => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            this.mouse.pressed = true;
        })
        window.addEventListener('mousemove', e => {
            if (this.mouse.pressed){
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
          }
        });
    }
    render(context, deltaTime){
            if (this.spriteTimer < this.spriteInterval){
                this.spriteTimer += deltaTime;
                console.log(this.spriteTimer);
            } else {
                this.spriteTimer = 0;
                this.player.draw(context);
            }    
                this.player.update();
            
            
        }
  }
 
window.addEventListener('load', function(){
const canvas = this.document.getElementById('mycanvas')
const ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 300;
ctx.fillStyle = 'white';
ctx.lineWidth = 3;
ctx.strokeStyle = 'white'; 
const game = new Game(canvas);

  
let lastTime = 0;
function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render(ctx, deltaTime);
    requestAnimationFrame(animate);
    }
animate(0);

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
