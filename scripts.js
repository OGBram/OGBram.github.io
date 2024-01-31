const toggleBtn = document.getElementById("toggleBtn");
const mainNav = document.getElementById("mainNav");

toggleBtn.addEventListener("mouseover", () => {
    mainNav.style.display = "block";
 });

toggleBtn.addEventListener("mouseout", () => {
    setTimeout(() => {
     mainNav.style.display = "none";
   }, 3000); // Adjust the delay in milliseconds (e.g., 500ms for half a second)
 }) 
 
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