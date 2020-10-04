//buttons variable for addeventlistener
const rollButton = document.querySelector("#rollButton");
const showAllButton = document.querySelector("#showAll");
const reset = document.querySelector("#reset");
const diceShapes = document.querySelector("#diceShapes");
let click = 0; //to stop show all rolls from adding numbers from arrays.

let dieRolls = [];

rollButton.addEventListener("click", function () {
  //variable declearation
  dieRolls = [];
  let rollsInput = document.querySelector("#numRoll").value;
  let sidesInput = document.querySelector("#rollSides").value;
  let total = document.querySelector("#total");
  let num = 0;
  click = 0; // reset the clicks from show all rolls button
  let arrTotal = 0;

  diceShapes.innerHTML = "";
  //converting string to number
  rollsInput = Number(rollsInput);
  sidesInput = Number(sidesInput);
  document.querySelector("#allRolls").innerHTML = "";
  //input validation as well as rolling dice as many times user wants and dice sides
  if (
    rollsInput === 0 ||
    sidesInput === 0 ||
    sidesInput % 2 === 1 ||
    rollsInput >= 11 ||
    sidesInput > 20
  ) {
    total.innerHTML =
      "<mark> Enter values in dice roll <i> less then 10 </i> and dice sides of <i> even numbers </i> are allow upto 20 sides</mark>";
  } else {
    while (num < rollsInput) {
      dieRolls.push(Math.floor(Math.random() * sidesInput) + 1);

      arrTotal += dieRolls[num];
      diceShapes.innerHTML += `<div id='shape'>${dieRolls[num]}</div>`;
      num += 1;
      total.innerHTML = "<u>" + arrTotal + "</u>";
    }
  }
  //displaying results to the users
  console.log(dieRolls);
  console.log(arrTotal);
});

showAllButton.addEventListener("click", function () {
  //variable declearation
  let showAll = document.querySelector("#allRolls");
  let num = 0;
  click++;

  if (dieRolls.length === 0 || click > 1) {
    showAll.innerHTML = "<mark>Roll your dice first!</mark>";
  } else {
    while (num < dieRolls.length) {
      showAll.innerHTML += "<li>" + dieRolls[num] + "</li>";
      num += 1;
    }
  }
});
reset.addEventListener("click", function () {
  document.querySelector("#numRoll").value = "";
  document.querySelector("#rollSides").value = "";
  document.querySelector("#allRolls").value = "";
  document.querySelector("#total").innerHTML = "";
  document.querySelector("#allRolls").innerHTML = "";
  dieRolls = [];
  diceShapes.innerHTML = "";
});
