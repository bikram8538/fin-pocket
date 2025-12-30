const toggle = document.querySelector(".billing-toggle");
const options = document.querySelectorAll(".billing-option");

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove active state
    options.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });

    // activate clicked
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    // move slider
    toggle.classList.toggle("yearly", btn.dataset.cycle === "yearly");

    // hook for pricing logic
    const cycle = btn.dataset.cycle;
    console.log("Billing cycle:", cycle);

    // 👉 later you’ll update prices here
    // updatePrices(cycle);
  });
});
const billingToggle = document.querySelector(".billing-toggle");
const prices = document.querySelectorAll(".price");

billingToggle.addEventListener("click", (e) => {
  const btn = e.target.closest(".billing-option");
  if (!btn) return;

  const cycle = btn.dataset.cycle;

  prices.forEach((price) => {
    if (!price.dataset.monthly) return;

    // fade out
    price.classList.add("is-switching");

    setTimeout(() => {
      price.textContent =
        cycle === "yearly" ? price.dataset.yearly : price.dataset.monthly;

      // fade back in
      price.classList.remove("is-switching");
    }, 250);
  });
});
