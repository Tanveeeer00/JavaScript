const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(button);
    console.log(e);
    console.log(e.target);

    // if statement

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "purple") {
    //   body.style.backgroundColor = e.target.id;
    // }

    // switch case

    // const color = "color";
    // switch (color) {
    //   // case "e.target.id === grey":
    //   // body.style.backgroundColor = e.target.id;
    //   // break;

    //   default:
    //     body.style.backgroundColor = e.target.id;
    //     break;
    // }

    // functiom

    body.style.backgroundColor = e.target.id;
  });
});