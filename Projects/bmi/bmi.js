const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";
const container = document.querySelector(".container");
container.style.backgroundColor = "#212121";
//
const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  console.log(height);

  const weight = parseInt(document.querySelector("#weight").value);
  //   let type = typeof weight;
  console.log(weight);
  //   console.log(type);

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  const results = document.querySelector("#results");

  const heightError = height < 0 || isNaN(height) || height === "";
  const weightError = weight < 0 || isNaN(weight) || weight === "";
  if (heightError && weightError) {
    results.innerHTML = `Please qive a valid height: ${height} and weight: ${weight}`;
  } else if (weightError) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else if (heightError) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else {
    // const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // //show the result
    bmi;
    results.innerHTML = `<span>${bmi}</span>`;
  }

  //
  //   let under = bmi < 18.6;
  //   let over = bmi > 24.9;

  const weightGuide = document.querySelector("#weight-guide");
  if (bmi < 18.6) {
    // weightGuide.innerHTML = `you are under weight. Under Weight = Less than 18.6`;
    weightGuide.innerHTML = `you are under weight = less than 18.6`;
    console.log("under");
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    weightGuide.innerHTML = `you are normal. Normal Range = 18.6 and 24.9`;
    console.log("normal");
  } else {
    weightGuide.innerHTML = `you are over weight = Greater than 24.9`;
    console.log("over");
  }
});
