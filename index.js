const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomIntegerFromInterval(0, 5));

const body = document.querySelector(".body");
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const PROMT_DELAY = 1000;

startBtn.addEventListener("click", clickStart);

function clickStart() {
  console.log("Start");
  const intervalId = setInterval(() => {
    console.log("intrerval");
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, PROMT_DELAY);
  startBtn.disabled = true;

  stopBtn.addEventListener("click", clickStop);
  function clickStop() {
    console.log("Stop");
    clearInterval(intervalId);
    startBtn.disabled = false;
  }
}
