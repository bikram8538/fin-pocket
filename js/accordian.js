 const items = document.querySelectorAll(".accordion-item");
  const img = document.getElementById("accordionImage");
  const wrapper = document.getElementById("accordionWrapper");

  // height sync
  function syncHeight() {
    wrapper.style.height = img.offsetHeight + "px";
  }
  window.addEventListener("load", syncHeight);
  window.addEventListener("resize", syncHeight);

  items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // close all
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      });

      // open only if closed
      if (!isOpen) {
        item.classList.add("active");
        icon.textContent = "−";
      }
    });
  });