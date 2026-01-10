const mapTrigger = document.getElementById("mapTrigger");
const mapPopup = document.getElementById("mapPopup");
const closeMap = document.getElementById("closeMap");

mapTrigger.addEventListener("click", () => {
  mapPopup.style.display = "flex";
});

closeMap.addEventListener("click", () => {
  mapPopup.style.display = "none";
});