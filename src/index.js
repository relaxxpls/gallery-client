var activeNavItem = 0;
var navItems = [];
var data = [];

const loadNavigation = async () => {
  const response = await fetch("./data.json");
  data = await response.json();

  const nav = document.getElementById("nav");

  data.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.className = "nav-item";
    navItem.innerHTML = `
      <img class="nav-item--img" src="${item.previewImage}"></img>
      <span class="nav-item--title">${item.title}</span>
    `;

    nav.appendChild(navItem);
  });

  navItems = document.querySelectorAll(".nav-item");
};

document.addEventListener("DOMContentLoaded", loadNavigation);

const makeActive = (index) => () => {
  const itemLen = navItems.length;
  if (index < 0) {
    index += itemLen;
  } else if (index >= navItems.length) {
    index -= itemLen;
  }

  navItems[activeNavItem].classList.remove("active");
  activeNavItem = index;
  navItems[activeNavItem].classList.add("active");
};

navItems.forEach((item, index) => {
  item.addEventListener("click", (event) => makeActive(index));
});

// ? if user presses up or down arrow, make it active
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    makeActive(activeNavItem - 1)();
  } else if (event.key === "ArrowDown") {
    makeActive(activeNavItem + 1)();
  }
});
