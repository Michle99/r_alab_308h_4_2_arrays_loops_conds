
document.getElementById("app").innerHTML = `
<h1>Arrays, Loops and conditional assessment</h1>
<div>
  <h4>Solutions are on the page and the rest in the console.</h4>
</div>
`;

////////////////////////////////
// Easy Going
////////////////////////////////
let easy_going_num = "";

for (let i = 0; i <= 20; i++) {
  easy_going_num += "The number is: " + i + "<br>";
}

document.getElementById("easy_going").innerHTML = easy_going_num;



////////////////////////////////
// Fizz Buzz
////////////////////////////////

function fizzbuzz() {
  let fizz_buzz_num = document.getElementById("fizz_buzz");
  let result = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result = "FizzBuzz";
    } else if (i % 5 === 0) {
      result = "Buzz";
    } else if (i % 3 === 0) {
      result = "Fizz";
    } else {
      result = i;
    }
    fizz_buzz_num.innerHTML += "<p>" + result + "</p>";
  }
}

fizzbuzz();



////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// 1
let wild = "";
wild += plantee[2] + 1;

document.getElementById("plantee_age").innerHTML = "Plantee age is: " + wild;

// 2
let wolfy_new_town = "";
wolfy[3] = "Gotham City";
wolfy_new_town += wolfy[3];
document.getElementById("wolfy_hometown").innerHTML =
  "Wolfy's hometown is: " + wolfy_new_town;

// 3
dart.push("Hawkins");
console.log("New dart array after adding Hawkins: ", dart);

document.getElementById("dart_new_town").innerHTML =
  "Added a second Hometown: " + dart;

// 4
let wolfy_new_name = "";
wolfy[0] = "Gameboy";
wolfy_new_name = wolfy[0];

document.getElementById("wolfy_new_name").innerHTML =
  "Wolfy new name: " + wolfy_new_name;
