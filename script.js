console.group("Reference");
console.log(
  "Calendar Fotos",
  "https://www.typecalendar.com/printable-yearly-calendar#google_vignette"
);
console.log("Back1", "https://wallhaven.cc/w/8x8qjj");
console.log("Back2", "https://wallhaven.cc/w/45x9l1");
console.groupEnd();

const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".noRotado")) {
    e.target.classList.remove("noRotado");
    e.target.classList.add("rotar");
  }
  if (e.target.matches(".n12")) {
    location.reload();
  }
});
