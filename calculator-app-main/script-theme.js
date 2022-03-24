// Theme settings :
// theme 1 by default
// local storage : when the user comes back into the calculator, display his last theme
// if user toggle to theme 2 then display theme 2
// if user toggle to theme 3 then display theme 3
// if user toggle to theme 1 then display theme 1

const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");

theme1.addEventListener("click", () => {
  if (theme2.hasAttribute("checked")) {
    theme2.removeAttribute("checked");
  }
  if (theme3.hasAttribute("checked")) {
    theme3.removeAttribute("checked");
  }
  theme1.setAttribute("checked", "");
  if (theme1.hasAttribute("checked")) {
    document.documentElement.setAttribute("data-theme", "");
  }
});

theme2.addEventListener("click", () => {
  if (theme1.hasAttribute("checked")) {
    theme1.removeAttribute("checked");
  }
  if (theme3.hasAttribute("checked")) {
    theme3.removeAttribute("checked");
  }
  theme2.setAttribute("checked", "");
  if (theme2.hasAttribute("checked")) {
    document.documentElement.setAttribute("data-theme", "theme2");
  }
});

theme3.addEventListener("click", () => {
  if (theme1.hasAttribute("checked")) {
    theme1.removeAttribute("checked");
  }
  if (theme2.hasAttribute("checked")) {
    theme2.removeAttribute("checked");
  }
  theme3.setAttribute("checked", "");
  if (theme3.hasAttribute("checked")) {
    document.documentElement.setAttribute("data-theme", "theme3");
  }
});
