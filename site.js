// Show/Hide Modal
// Get the modal that is currently display: none;
var modal = document.getElementById("myModal");
// Get the button that opens the modal
// var btn = document.getElementById("donateButton");
// Get the <span> element that closes the modal
var closer = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal

function showModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// CashApp
let caBtn = document.getElementById("cashAppDonate");

function cashAppSelected() {
  console.log("cash app selected");
}
