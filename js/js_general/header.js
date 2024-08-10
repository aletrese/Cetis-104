var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("content");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    document.getElementById("menu").classList.toggle("open");
    content.style.filter = "blur(2px)";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";
    content.style.filter = "";
  }
}

function closeSidebar() {
  if (showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
  document.getElementById('menu').classList.remove('open');
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 1130 && showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});

const menuItems = document.querySelectorAll('.menu-item > a');

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault(); 
      const submenu = this.nextElementSibling;
      if (submenu) {
          if (submenu.style.maxHeight) {
              submenu.style.maxHeight = null;
          } else {
              submenu.style.maxHeight = submenu.scrollHeight + "px";
          }
      }
  });
});

function menu_top() {
  var nav = document.getElementById('navigation_header');
  nav.classList.toggle('active');
}
