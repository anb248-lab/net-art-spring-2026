document.querySelectorAll(".work").forEach(work => {
  work.addEventListener("click", () => {
    const info = work.querySelector(".info");
    info.style.display = info.style.display === "block" ? "none" : "block";
  });
});