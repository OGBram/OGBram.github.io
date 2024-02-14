let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const width = canvas.width = 300;
const height = canvas.height = 300;

let background = new Image(canvas.width, canvas.height);
background.src = '/backgrounds/smallgoth.jpg';
document.body.appendChild(background);

let img = new Image();
img.src = '/animation/sheet_idle.png';

let imagesLoaded = 0;
background.onload = img.onload = function () {
  imagesLoaded++;
  if (imagesLoaded === 2) {
   
    step();
  }
};

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * 32, frameY, width, height,
                canvasX+115, canvasY-50, width, height);
}

function drawBackground(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(background,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, width, height);

}

const cycleLoop = [0, 1, 2,]
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 40) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  drawBackground();
  
  drawFrame(cycleLoop[currentLoopIndex], 1, 0, 230, 0); 
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }

  window.requestAnimationFrame(step);
  }
  
  document.getElementById("toggleNav").addEventListener("click", function() {
    var nav = document.getElementById("mainNav");
    var navStyle = window.getComputedStyle(nav);

    nav.style.display = (navStyle.getPropertyValue("display") === "flex") ? "none" : "flex";
  });

  function openAboutModal() {
      document.getElementById('aboutModal').style.display = 'block';
  }

  function closeAboutModal() {
      document.getElementById('aboutModal').style.display = 'none';
  }

  function openContactsModal() {
      document.getElementById('contactsModal').style.display = 'block';
  }

  function closeContactsModal() {
      document.getElementById('contactsModal').style.display = 'none';
  }
