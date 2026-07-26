const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const STORAGE_KEY = "theme";

/* =========================
   APPLY THEME
========================= */
function applyTheme(theme) {
  body.classList.remove("dark-mode", "light-mode");
  body.classList.add(theme);

  if (toggleBtn) {
    // Icon = aksi berikutnya
    toggleBtn.textContent = theme === "dark-mode" ? "☀️" : "🌙";
  }
}

/* =========================
   INITIAL THEME
========================= */
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(prefersDark ? "dark-mode" : "light-mode");
  }
}

/* =========================
   TOGGLE HANDLER
========================= */
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode")
      ? "light-mode"
      : "dark-mode";

    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  });
}

/* =========================
   RUN
========================= */
initTheme();
