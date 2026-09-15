
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
const menuButton = document.querySelector(".menu-button");
const tabsNav = document.querySelector(".tabs");
const brand = document.querySelector(".brand");

function showTab(id) {
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === id));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === id));
  history.replaceState(null, "", "#" + id);
  tabsNav.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});

brand.addEventListener("click", (event) => {
  event.preventDefault();
  showTab("context");
});

menuButton.addEventListener("click", () => {
  tabsNav.classList.toggle("open");
});

const initial = location.hash.replace("#", "");
if (initial && document.getElementById(initial)) showTab(initial);
