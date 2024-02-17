window.addEventListener("load", updateHeaderNavHeight);
window.addEventListener("resize", updateHeaderNavHeight);

var headerNavElement = document.querySelector("body > header > nav");
var headerNavStyleElement = document.createElement("style");
document.head.appendChild(headerNavStyleElement);

function updateHeaderNavHeight() {
  var h = headerNavElement.offsetHeight;

  headerNavStyleElement.innerText =
    "header::before { height:" +
    h +
    "px }" +
    "header { margin-bottom:" +
    -h +
    "px }" +
    "#main-content { padding-top:" +
    h +
    "px }";
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
    // Toggle menu icon between hamburger and cross
    if (navList.classList.contains("active")) {
      menuIcon.innerHTML = "&#10005;"; // Change to cross icon when menu is open
    } else {
      menuIcon.innerHTML = "&#9776;"; // Change to hamburger icon when menu is closed
    }
  });
});

// Get the info icon element
const infoIcon = document.getElementById("infoIcon");

// Get the info modal dialog element
const infoModal = document.getElementById("infoModal");

// Get the close button element inside the modal
const closeModalBtn = document.getElementById("closeModal");

// Function to open the modal when the info icon is clicked
infoIcon.addEventListener("click", function () {
  infoModal.showModal(); // Open the modal
});

// Function to close the modal when the close button is clicked
closeModalBtn.addEventListener("click", function () {
  infoModal.close(); // Close the modal
});
