const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.onload = drawBackground;
background.src = "/backgrounds/recgoth.jpg";

const character = new Image();
character.onload = drawCharacter;
character.src = "/32x32/female_left.png";

function drawBackground() {
  canvas.width = background.naturalWidth;
  canvas.height = background.naturalHeight;

  ctx.drawImage(background, 0, 0);
}

function drawCharacter() {
  const customWidth = 32;
  const customHeight = 32;

  // Center the character on the canvas
  const x = (canvas.width - customWidth) / 2;
  const y = (canvas.height - customHeight) / 2;

  ctx.drawImage(character, x, y, customWidth, customHeight);
}

if (canvas) {
  
  canvas.addEventListener("click", function (event) {
 
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    ctx.drawImage(character, x, y);
  });
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
