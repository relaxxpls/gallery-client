const nav = document.getElementById("nav");
const previewImage = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");

var activeNavItem = undefined;
var navItems = [];
var data = [];

const makeActive = (index) => {
  const itemLen = navItems.length;
  if (index < 0) {
    index += itemLen;
  } else if (index >= navItems.length) {
    index -= itemLen;
  }

  if (activeNavItem !== undefined) {
    navItems[activeNavItem].classList.remove("active");
  }

  activeNavItem = index;
  navItems[activeNavItem].classList.add("active");

  previewImage.src = data[activeNavItem].previewImage;
  previewTitle.value = data[activeNavItem].title;
};

const loadNavigation = async () => {
  const response = await fetch("./data.json");
  data = await response.json();

  data.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.className = "nav-item";
    navItem.innerHTML = `
      <img class="nav-item--img" src="${item.previewImage}"></img>
      <div class="nav-item--title" data-filetype=${item.title.slice(-7)}>
        <span>${item.title}</span>
      </div>
    `;

    nav.appendChild(navItem);
  });

  navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => makeActive(index));
  });

  makeActive(0);
};

document.addEventListener("DOMContentLoaded", loadNavigation);

// ? if user presses up or down arrow, make it active
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    makeActive(activeNavItem - 1);
  } else if (event.key === "ArrowDown") {
    makeActive(activeNavItem + 1);
  }
});

previewTitle.addEventListener("input", (event) => {
  data[activeNavItem].title = event.target.value;
  navItems[activeNavItem].querySelector(".nav-item--title").innerHTML =
    event.target.value;
});
