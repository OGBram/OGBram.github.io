let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
    
let backgroud = new Image();
backgroud.src = '/backgrounds/recgoth.jpg'
backgroud.onload = function() {
  init();
}

let img = new Image();
img.src = '/animation/sheet_idle.png';
img.onload = function() {
  init();
};

const scale = 2;
const width = 32;
const height = 32;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}

const cycleLoop = [0, 1, 2, 1];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 45) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.drawImage(backgroud, 0, 0);
  
  drawFrame(cycleLoop[currentLoopIndex], 0, 600, 400);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  
  window.requestAnimationFrame(step);
  }
  
  function init() {
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
  var artwork3 = document.getElementById("artwork3");
  var toggleNav = document.getElementById("toggleNav");


  artwork3.addEventListener("mouseenter", function() {
    toggleNav.style.color = "red";
  });
