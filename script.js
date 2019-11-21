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

//Check for checked options
function ValidatePetSelection() {
  var checkboxes = document.getElementsByName("character_set");
  var numberOfCheckedItems = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) numberOfCheckedItems++;
  }
  if (numberOfCheckedItems < 2) {
    alert("You must select at least two!");
    return false;
  }
}

//Define Empty Password Character Pool
var passPool = [];

//Add to charSet based on user options
// Length Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

//if lower = true {
//  charSet  = charset + lower
//}
