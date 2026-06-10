let progressCircle = document.querySelector(".progress");
let number = document.querySelector(".number");

let radius = 65;
let circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

let percent = 0;

function setProgress(value) {
  let offset = circumference - (value / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
  number.innerText = value + "%";
}

setInterval(() => {
  if (percent <= 60) {
    setProgress(percent);
    percent++;
  }
}, 10);
