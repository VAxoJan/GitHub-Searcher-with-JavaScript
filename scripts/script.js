import { fetchGitHubUserData } from "./styles.js";

const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const darkIcon = document.getElementById("darkmode");
const sunIcon = document.getElementById("sun");
const modeText = document.getElementById("modeText");

darkIcon.addEventListener("click", toggleDarkMode);
sunIcon.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkIcon.style.display = "none";
    sunIcon.style.display = "inline";
    modeText.textContent = "light";
  } else {
    darkIcon.style.display = "inline";
    sunIcon.style.display = "none";
    modeText.textContent = "dark";
  }
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
