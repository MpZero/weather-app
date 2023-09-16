import "./style.css";
let darkMode = localStorage.getItem("darkMode");
const darkModeBtn = document.querySelector("#dark-mode");
const lightModeBtn = document.querySelector("#light-mode");

darkModeBtn.addEventListener("click", () => {
  enableDarkMode();
});

lightModeBtn.addEventListener("click", () => {
  disableDarkMode();
});
if (darkMode === "enabled") {
  enableDarkMode();
}

function enableDarkMode() {
  darkModeBtn.style.display = "none";
  lightModeBtn.style.display = "inline-block";

  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  lightModeBtn.style.display = "none";
  darkModeBtn.style.display = "inline-block";

  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
}
