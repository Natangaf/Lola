let light = document.getElementById("circle");

let eject = document.getElementById("photo");
let imprimir = document.getElementById("imprimir");
let text = document.getElementById("text");

document.getElementById("button").addEventListener("click", () => {
  light.classList.remove("flash-animation");
  setTimeout(() => {
    light.classList.add("flash-animation");
  }, 500);

  eject.classList.remove("eject-photo");
  imprimir.classList.add("disabled");

  setTimeout(() => {
    eject.classList.add("eject-photo");
    text.classList.add("fade-in-text");
    text.classList.remove("disabled");
  }, 500);
});
