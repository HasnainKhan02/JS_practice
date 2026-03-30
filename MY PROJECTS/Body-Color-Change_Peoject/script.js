let bdy = document.body;
let boxes = document.querySelectorAll(".box");

// @@@@@@@@@@@@@@@@@@@@@    NEW  METHOD    @@@@@@@@@@@@@@@@@@@@@@@

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let color = box.textContent;
    bdy.style.backgroundColor = color;
  });
});

// @@@@@@@@@@@@@@@@@@@@@    OLD  METHOD    @@@@@@@@@@@@@@@@@@@@@@@

// box1.addEventListener("click", () => {
//     bdy.style.backgroundColor = "black";
// });
// box2.addEventListener("click", () => {
//     bdy.style.backgroundColor = "red";
// });
// box3.addEventListener("click", () => {
//     bdy.style.backgroundColor = "yellow";
// });
// box4.addEventListener("click", () => {
//     bdy.style.backgroundColor = "green";
// });
