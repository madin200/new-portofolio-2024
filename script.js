const menu = document.getElementsByClassName("menu-icon")[0];
const nav = document.getElementsByTagName("nav")[0];
const menuIcon = document.getElementsByClassName("menu-icon")[0];

menu.addEventListener("click", function () {
  navState = nav.classList.toggle("show-menu");
  if (navState == true) {
    menuIcon.src = "/img/exit_icon.png";
  } else {
    menuIcon.src = "/img/menu_icon.png";
  }
});
