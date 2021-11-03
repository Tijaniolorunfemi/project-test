const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")
const container = document.querySelector(".container")


sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-node");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-node");
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }