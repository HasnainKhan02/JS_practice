let clock = document.querySelector(".clock");
let displayDate = document.querySelector(".date");

setInterval(function () {
  let now = new Date();
  console.log(now);

  clock.innerHTML = now.toLocaleTimeString();

  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  let dayStr = day < 10 ? "0" + day : day;
  let monthStr = month < 10 ? "0" + month : month;

  const dateString = `${dayStr}/${monthStr}/${year}`;
  displayDate.innerHTML = dateString;
}, 1000);
