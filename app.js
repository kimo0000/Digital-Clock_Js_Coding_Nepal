const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconde = document.querySelector(".seconde");
const mode = document.querySelector(".mode");
const time = document.querySelector(".time");

let dateTime = new Date();
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let secondes = new Date().getSeconds();

console.log(dateTime);

let timer = setInterval(() => {
  secondes++;
  if (secondes === 60) {
    secondes = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
  }

  if (hours >= 12 && hours <= 24) {
    time.textContent = "PM";
  } else {
    time.textContent = "AM";
  }

  hour.textContent = hours < 10 ? "0" + hours : hours;
  minute.textContent = minutes < 10 ? "0" + minutes : minutes;
  seconde.textContent = secondes < 10 ? "0" + secondes : secondes;
}, 1000);

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    mode.className = "fa-solid fa-sun mode";
  } else {
    mode.className = "fa-solid fa-moon mode";
  }
});
