//Define Individual sets as arrays
var letters = "abcdefghijklmnopqrstuvwxyz"; // string of letters
var numbers = "0123456789"; //string of numbers
var specials = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //string of special chars

var lettersLower = letters.split(""); //lowercase array
var lettersUpper = letters.toUpperCase().split(""); //uppercase array
var numbers = numbers.split(""); //turn numbers into array
var specials = specials.split(""); //turn special chars into array

console.log(lettersLower); //log lowercase array
console.log(lettersUpper); //log uppercase array
console.log(numbers); //log numbers array
console.log(specials); //log numbers array

//Check for minimum of 2 checked options
//If less than two options selected, display an on page warning and disable the generate button
function ValidateCharSelects() {
  var checkboxes = document.getElementsByName("character_set");
  const warning = document.querySelector(".warning");
  var generate = document.getElementById("generate");
  var numberOfCheckedItems = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) numberOfCheckedItems++;
  }
  if (numberOfCheckedItems < 2) {
    warning.classList.add("show");
    warning.classList.remove("close");
    generate.setAttribute("disabled", "");
  } else {
    warning.classList.add("close");
    warning.classList.remove("show");
    generate.removeAttribute("disabled", "");
  }
}

//Define Empty Password Character Pool
var passPool = [];

//Add to charSet based on user options
// Length Slider
var slider = document.getElementById("myRange");
var length = document.getElementById("length");
length.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  length.innerHTML = this.value;
};

//if lower = true {
//  charSet  = charset + lower
//}
