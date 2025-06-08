//Initializing counter to 0
let count = 0;

//function for increasing count
function increase() {
  count += 1;
  console.log("Increase button was clicked!");
  let increaseElement = document.getElementById("people-counter");
  increaseElement.textContent = count;
}

//function for decreasing count
function decrease() {
  count -= 1;
  console.log("Decrease button was clicked!");
  let decreaseElement = document.getElementById("people-counter");
  decreaseElement.textContent = count;
}

//function that says what aadesh really is
function aadeshVal() {
  document.getElementById("aadesh").textContent = "GAY!";
}

//code to welcome the user
let welcomeEl = document.getElementById("welcome-el");
let name1 = "Seer";
let greeting1 = "Hello";
let greeting2 = "nice to meet you";

welcomeEl.textContent = greeting1 + " " + name1 + " " + greeting2;

welcomeEl.textContent += "❄️";

//code to save the current entry
let saveEl = document.getElementById("save-el");

//code to store cuurent number of people
let peopleCounter = document.getElementById("people-counter");

//function to log out count

function save() {
  //currentEntry = " " + count + " - ";
  currentEntry = count + "-";
  saveEl.textContent += currentEntry;
  count = 0;
  peopleCounter.textContent = count;
  console.log(count);
}
// let num = 5;

// function logFunction() {
//   console.log(num);
// }

// logFunction();

//initializing laptimes
// let lap1 = 160;
// let lap2 = 157;
// let lap3 = 155;
// function to log total lap time
// function lapTimeTotal() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log("The total lap time is", totalTime);
// }

// lapTimeTotal();

let lapsCompleted = 0;

function incLapFunc() {
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
}
incLapFunc();
incLapFunc();
incLapFunc();
// let count = 10/2;
// console.log("The count is",count);

//Challenge 1
// let myAge = 21; //creating and setting up variable
// console.log(myAge); //printing value in browser

//Challenge 2
// let myAge = 21;
// let humanDogRatio = 2;

// let myDogAge = myAge * humanDogRatio;
// console.log("My dog's age is", myDogAge);

//Challenge 3
// let bonusPoints = 50;

// bonusPoints = bonusPoints + 50;
// console.log("The first bonus points is", bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log("The second bonus points is", bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log("The final bonus points is", bonusPoints);
