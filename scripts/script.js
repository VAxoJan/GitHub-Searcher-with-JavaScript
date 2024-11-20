import { fetchGitHubUserData } from "./styles.js";

const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const darkIcon = document.getElementById("darkmode");
const sunIcon = document.getElementById("sun");
const modeText = document.getElementById("modeText");

document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("dark-mode") === "true";

  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

darkIcon.addEventListener("click", toggleDarkMode);
sunIcon.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);

  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  darkIcon.style.display = "none";
  sunIcon.style.display = "inline";
  modeText.textContent = "light";
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  darkIcon.style.display = "inline";
  sunIcon.style.display = "none";
  modeText.textContent = "dark";
}

searchButton.addEventListener("click", () => {
  if (search.value === "") {
    search.placeholder = "No result";
    search.style.color = "red";
    search.style.fontWeight = "700";
  } else {
    searchButton.click();
    const searchValue = search.value;
    search.value = "";
    fetchGitHubUserData(searchValue);
    search.placeholder = "Search GitHub Username...";
    search.style.color = "#4B6A9B";
    search.style.fontWeight = "400";
  }
});

search.addEventListener("focusin", () => {
  search.placeholder = "Search GitHub Username...";
  search.style.color = "#4B6A9B";
  search.style.fontWeight = "400";
});

search.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

const definder = document.getElementById("definder");

definder.addEventListener("click", () => {
  location.reload();
});
