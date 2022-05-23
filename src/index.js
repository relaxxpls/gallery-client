const loadNavigation = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();

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
};

document.addEventListener("DOMContentLoaded", loadNavigation);
