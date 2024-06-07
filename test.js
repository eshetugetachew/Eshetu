window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const appContent = document.querySelector(".container");
  setTimeout(function () {
    loadingScreen.style.display = "none";
    appContent.style.display = "block";
  }, 3500);
});

document.querySelector("footer").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btna")) {
    const main = e.target.getAttribute("href");
    document.querySelector(main).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".navlists").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("lin")) {
    const ma = e.target.getAttribute("href");
    document.querySelector(ma).scrollIntoView({ behavior: "smooth" });
  }
});
