/*scripts*/

const toggleBtn = document.getElementById('toggleBtn');
const mainNav = document.getElementById('mainNav');

toggleBtn.addEventListener("click", () => {
    mainNav.style.display = (mainNav.style.display === "block") ? "none" : "block";
    toggleBtn.classList.toggle('open');
});

/*toggleBtn.addEventListener("mouseout", () => {
    setTimeout(() => {
     mainNav.style.display = "none";
   }, 15000); // Adjust the delay in milliseconds 
 }) 
*/ 

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