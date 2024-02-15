window.addEventListener('load', function(){
  const canvas = this.document.getElementById('mycanvas')
  const ctx = canvas.getContext('2d');
  const width = canvas.width = 300;
  const height = canvas.height = 300;
});

let img = new Image();
img.src = '/animation/sheet_idle.png';


function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, width, height);

}

const cycleLoop = [0, 1, 2, 1]
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
  
  drawFrame(cycleLoop[currentLoopIndex], 1, 1, 150, 150); 
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
