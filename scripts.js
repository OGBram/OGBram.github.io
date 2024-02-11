/*scripts*/
document.getElementById("toggleNav").addEventListener("click", function() {
    var nav = document.getElementById("mainNav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
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