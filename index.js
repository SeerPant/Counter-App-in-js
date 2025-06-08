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







