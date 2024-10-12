//learned from the youtube tutorial - by Coding Snow - https://www.youtube.com/watch?v=VplDlwLTR50
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//adding parallax effect to the hero section title
//learned this from Youtube Tutorial - by Online Tutorials - https://www.youtube.com/watch?v=1wfeqDyMUx4

let titleOne = document.getElementById("title-one");
let titleTwo = document.getElementById("title-two");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  titleOne.style.right = value * 0.5 + "px";
  titleTwo.style.left = value * 0.5 + "px";
});

//adding responsive nav for mobile screens
//learned this from Youtube Tutorial - by Easy Tutorials - https://www.youtube.com/watch?v=oYRda7UtuhA

function toggleMenu() {
    var x = document.getElementById("nav-links-sub");
    if (x.style.left != "0px") {
      x.style.left = "0px";
      document.body.style.overflowY = "hidden";
    } else {
      x.style.left = "-200px";
      document.body.style.overflowY = "visible";
    }
  }