// Show/Hide Modal
// Get the modal that is currently display: none;
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("donateButton");
// Get the <span> element that closes the modal
var closer = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
closer.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideShow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// CashApp
let caBtn = document.getElementById("cashAppDonate");

function cashAppSelected() {
  console.log("cash app selected");
}
