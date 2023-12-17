console.log("Hello");

const randomColor = function () {
  let hex = "0123456789ABCDEFG";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;

const startChangingColor = function () {
  if (!intervalid) {
    intervalid = setInterval(changeBgColor, 2000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalid);
  console.log("stopped");
  intervalid = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
