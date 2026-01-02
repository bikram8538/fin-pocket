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
  const mobileImg = document.querySelector(".mobile-img img");

  mobileImg.addEventListener("mousemove", (e) => {
    const rect = mobileImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // up-down tilt
    const rotateY = ((x - centerX) / centerX) * -10; // left-right tilt

    mobileImg.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  mobileImg.addEventListener("mouseleave", () => {
    mobileImg.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
  