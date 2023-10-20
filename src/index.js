
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

