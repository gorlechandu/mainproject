var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontact of tabcontents) {
    tabcontact.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// contact login form code in java script  //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-right form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
    alert("Thank you! Your message has been submitted.");
    form.reset(); // optional: clear the form
  });
});

// this is  header part code in java script language //

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
