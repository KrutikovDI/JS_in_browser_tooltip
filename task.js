const a = document.getElementsByClassName("has-tooltip");
for (let i = 0; i < a.length; i++) {
  a[i].insertAdjacentHTML("afterEnd", `<div class='tooltip'>${a[i].title}</div>`);
}
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (e) => {
    e.preventDefault();
    const tooltip = document.getElementsByClassName("tooltip");
    for (let j = 0; j < tooltip.length; j++) {
      if (tooltip[j] != e.target.nextSibling) {
        tooltip[j].classList.remove("tooltip_active");
      }
    }
    const domRect = e.target.getBoundingClientRect();
    e.target.nextSibling.style.position = "absolute";
    e.target.nextSibling.style.left = `${domRect.left}px`;
    e.target.nextSibling.classList.toggle("tooltip_active");
  });
}
