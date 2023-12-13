const a = document.getElementsByClassName("has-tooltip")
for (i=0; i<a.length; i++) {
  a[i].insertAdjacentHTML("afterEnd", `<div class='tooltip'>${a[i].title}</div>`)}
for (i=0; i<a.length; i++) {
  a[i].addEventListener("click", (e) => {
    e.preventDefault()
    const tooltip = document.getElementsByClassName("tooltip")
    for (j=0; j<tooltip.length; j++) {
      tooltip[j].className = "tooltip"
    }
    e.target.nextSibling.classList.add("tooltip_active")
  })
}