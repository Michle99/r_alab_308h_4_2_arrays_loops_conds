
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
  easy_going_num += "The number is: " + i + "";
}

document.getElementById("easy_going").innerHTML = easy_going_num;

////////////////////////////////
// Get Even
////////////////////////////////
let get_even_num = "";

for (let i = 0; i <= 200; i += 2) {
  get_even_num += "The numbers is: " + i + "<br>";
}
document.getElementById("get_even").innerHTML = get_even_num;


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



////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let ninja_turtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

let ninja_names = "";

for (let i of ninja_turtle) {
  ninja_names += i.toUpperCase() + ", ";
}

document.getElementById("ninja_new_name").innerHTML = ninja_names;



////////////////////////////////
// Methods, Revisited
////////////////////////////////
let method_results = "";

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious"
];

// Index of Titanic
method_results = favMovies.indexOf("Titanic"); //
document.getElementById("method_revisited").innerHTML =
  "Index of Titanic: " + method_results;

// 1
let sorted_favMovies = favMovies.sort();
document.getElementById("sorted_movies").innerHTML =
  "<h5>Sorted favMovies array w/o params: </h5>" + sorted_favMovies;

// 2. The array indices were rearranged, not altered

// 3. Use the method pop
let popped_index = "";
popped_index = favMovies.pop();
console.log("popped index:", popped_index);
document.getElementById("popped_movies").innerHTML =
  "<p>Value of popped index: </p>" + popped_index;

// 4. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
document.getElementById("pushed_movie").innerHTML =
  "<h5>Added Guardian of the Galaxy to array: </h5>" + favMovies;

// 5. Reverse the array.
let reversed_array = "";
reversed_array = favMovies.reverse();
document.getElementById("reverse_array").innerHTML =
  "<h5>Reversed the favMovies array: </h5>" + reversed_array;

// 6. Use the shift method.
let shifted_array = "";
shifted_array = favMovies.shift();
document.getElementById("shift_array").innerHTML =
  "<h5>Value of the favMovies array that got shifted: </h5>" + shifted_array;

// 7. unshift - what does it return? It returns the array length
let unshifted_array = "";
unshifted_array = favMovies.unshift();
document.getElementById("unshift_array").innerHTML =
  "<h5>Result of the unshift method: </h5>" + unshifted_array;

// 8.splice "Django Unchained" and add "Avatar"
//Find the index of "Django Unchained"
let spliced_array = "";
const djangoIndx = favMovies.indexOf("Django Unchained");
console.log("Index of django:", djangoIndx);
spliced_array = favMovies.splice(djangoIndx, 1, "Avatar");
console.log("Spliced Django Unchained: ", spliced_array);
document.getElementById("splice_array").innerHTML = spliced_array;
console.log("Added Avatar: ", favMovies);

// 9.Did this permanently alter our array?
// Array was permanently altered: The value @ index 14 was removed and replaced by "Avatar"
let sliced_array = "";
const middleIndex = Math.floor(favMovies.length / 2);
sliced_array = favMovies.slice(middleIndex);
document.getElementById("slice_array").innerHTML = sliced_array;

// 10. slice the last half of the array
// Programmatically determine the mid array
let midIndex = Math.floor(favMovies.length / 2);
console.log("Slicing array: ", favMovies.slice(midIndex));

// 11. yes, a new array was returned than the original array.

// 12. Store the value of your slice in a variable and console.log it.
let slicedd_array = favMovies.slice(midIndex);
console.log("Sliced array: ", slicedd_array);

// 13. hought Question: What is going on here? A new array was returned.

/// 14. console.log your final results
console.log("Final results: ", sliced_array);

// Index of Fast and Furious
console.log(
  "Fast and Furious index for sliced_array: ",
  sliced_array.indexOf("Fast and Furious")
);

/*** Fast and Furious is present in both arrays: sliced and favMovies arrays */
// Index of Fast and Furious
let fast_furious_index = favMovies.indexOf("Fast and Furious");
document.getElementById("fast_furious_ind").innerHTML = fast_furious_index;
console.log("Checking Movie name @ index: ", favMovies[13]);


////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]]
];

console.log("Index of Eggbert: ", whereIsWaldo.indexOf("Eggbert"));
// Remove "Eggbert"
console.log("Remove Eggbert: ", whereIsWaldo.splice(1, 1));
console.log("After removing eggbert", whereIsWaldo);

// Change "Neff" to "No One"
console.log("Where is Neff: ", whereIsWaldo[1][2]);
whereIsWaldo[1][2] = "No One";
console.log("Change Neff ---> No One: ", whereIsWaldo);

// Access and console.log "Waldo".
console.log("Log Waldo: ", whereIsWaldo[2][1][1]);





////////////////////////////////
// Excited Kitten
////////////////////////////////

const evenPhrases = [
  "...human... why you taking pictures of me...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...?"
];

// Function to get a random even phrase
function getRandomEvenPhrase() {
  const randomIndex = Math.floor(Math.random() * evenPhrases.length);
  return evenPhrases[randomIndex];
}

// Loop to log the phrases
for (let i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");

  // Check if the number is even
  if (i % 2 === 0) {
    const evenPhrase = getRandomEvenPhrase();
    console.log(evenPhrase);
  }
}



////////////////////////////////
// Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// console.log(nums)
// Expected output: 15
function median_index(nums) {
  if (nums.length === 0) {
    return;
  }

  nums = [...nums].sort((a, b) => a - b);
  const numMidIndex = Math.floor(nums.length / 2);
  const median =
    nums.length % 2 === 1
      ? nums[numMidIndex]
      : nums[numMidIndex - 1] + nums[numMidIndex];
  return median;
}

console.log("Median of the array: ", median_index(nums));
