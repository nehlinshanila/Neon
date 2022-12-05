const menu = document.querySelector("#mobile-menu");
// calling mobile-menu just menu and .navbar__menu just menulinks
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// // haha
// const hero = document.querySelector(".hero__heading");
// const herohaha = () => {
//   menu.classList.toggle("active");
// };
// menu.addEventListener("hover", herohaha);
// // haha

// writing a function to display mobile menu
const mM = () => {
  // toggle= active or not active
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
// targetting actual div
menu.addEventListener("click", mM);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const serviceMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  //   adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    serviceMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    serviceMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// close mobile menu when clicking on menu
const hidemobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hidemobileMenu);
navLogo.addEventListener("click", hidemobileMenu);





// popup display on and off
const appearone = document.querySelector("#xone");
const popone = document.querySelector("#popupone");
let appear1toggle = true;

popone.onclick = function () {
  if (appear1toggle) {
    appearone.style.display = "block";
    appear1toggle = !appear1toggle;

    appear2toggle = true;
    appeartwo.style.display = "none";
    appear3toggle = true;
    appearthree.style.display = "none";
    appear4toggle = true;
    appearfour.style.display = "none";
  } else {
    appearone.style.display = "none";
    appear1toggle = !appear1toggle;
  }
};


const appeartwo = document.querySelector("#xtwo");
const poptwo = document.querySelector("#popuptwo");
let appear2toggle = true;

poptwo.onclick = function () {
  if (appear2toggle) {
    appeartwo.style.display = "block";
    appear2toggle = !appear2toggle;

    appear1toggle = true;
    appearone.style.display = "none";
    appear3toggle = true;
    appearthree.style.display = "none";
    appear4toggle = true;
    appearfour.style.display = "none";
  } else {
    appeartwo.style.display = "none";
    appear2toggle = !appear2toggle;
  }
};

const appearthree = document.querySelector("#xthree");
const popthree = document.querySelector("#popupthree");
let appear3toggle = true;

popthree.onclick = function () {
  if (appear3toggle) {
    appearthree.style.display = "block";
    appear3toggle = !appear3toggle;

    appear1toggle = true;
    appearone.style.display = "none";
    appear2toggle = true;
    appeartwo.style.display = "none";
    appear4toggle = true;
    appearfour.style.display = "none";
  } else {
    appearthree.style.display = "none";
    appear3toggle = !appear3toggle;
  }
};

const appearfour = document.querySelector("#xfour");
const popfour = document.querySelector("#popupfour");
// for toggling display
let appear4toggle = true;


popfour.onclick = function () {
  if (appear4toggle) {
    appearfour.style.display = "block";
    appear4toggle = !appear4toggle;
    // so that different div dissappears when another is clicked
    appear1toggle = true;
    appearone.style.display = "none";
    appear3toggle = true;
    appearthree.style.display = "none";
    appear3toggle = true;
    appearthree.style.display = "none";
  } else {
    appearfour.style.display = "none";
    appear4toggle = !appear4toggle;
  }
};




// About popup

const popaboutt = document.querySelector("#popabout")
const abouticon = document.querySelector("#cardtwo");

abouticon.onclick = function(){
  if (popaboutt.style.display == "none")
  {
    popaboutt.style.display = "block";
  }
  else{
    popaboutt.style.display = "none";
  }
  
}
