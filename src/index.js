const nav = document.getElementById("nav");
const previewImage = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");

var activeNavItem = undefined;
var navItems = [];
var data = [];

// ? Generates title displayed in the nav item
// * Add middle ellepsis and replace " " with "&nbsp;"
const getNavItemTitle = (_title) => {
  const title = _title.replace(/ /g, "\u00a0");

  return `
    <span class="firstPart">
      ${title.slice(0, -7)}
    </span>
    <span class="lastPart">
      ${title.slice(-7).replace(/ /g, "\u00a0")}
    </span>
  `;
};

// ? Generates a nav item
const getNavItem = ({ previewImage, title }) => `
  <li class="nav-item">
    <img class="nav-item--img" src="${previewImage}"></img>
    <div class="nav-item--title">${getNavItemTitle(title)}</div>
  </li>
`;

// ? Makes nav item with given index active
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

// ? Initializes the nav from the given JSON data
const loadNavigation = async () => {
  const response = await fetch("./data.json");
  data = await response.json();

  data.forEach((item) => {
    nav.insertAdjacentHTML("beforeend", getNavItem(item));
  });

  navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item, index) => {
    // ? Click event to make nav item active
    item.addEventListener("click", () => makeActive(index));
  });

  // ? By default active nav item is the first one
  makeActive(0);
};

document.addEventListener("DOMContentLoaded", loadNavigation);

// ? if user presses up or down arrow, make nav item active
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key === "ArrowUp") {
    makeActive(activeNavItem - 1);
  } else if (event.key === "ArrowDown") {
    makeActive(activeNavItem + 1);
  }
});

// ? If title editor is active, don't allow user to navigate with arrow keys
previewTitle.addEventListener("keydown", (event) => {
  event.stopPropagation();
});

// ? Change title when user types in the title editor
previewTitle.addEventListener("input", (event) => {
  const title = event.target.value;
  data[activeNavItem].title = title;
  navItems[activeNavItem].querySelector(".nav-item--title").innerHTML =
    getNavItemTitle(title);
});
