const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const omeufi = document.querySelectorAll("#Omeufi");

omeufi.forEach((Omeufi) => {
  Omeufi.addEventListener("click", () => {
    window.alert("O MEU FI MEU FI MEU FI");
  });
});

controls.forEach((control) => {
  control.addEventListener("click", () => {
    isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
    items[currentItem].scrollIntoView({
      block: "center",
    });

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].classList.add("current-item");

    console.log(isLeft, currentItem);
  });
});
