
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

window.onload = function() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
}
