//Define Individual arrays per Character Set
//set chars as strings and use split, less typing this way
var letters = "abcdefghijklmnopqrstuvwxyz"; // string of letters
var numbers = "0123456789"; //string of numbers
var specials = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //string of special chars, note the \ to escape the double quote

//create the arrays that hold the Character Sets
var lettersLower = letters.split(""); //lowercase array
var lettersUpper = letters.toUpperCase().split(""); //uppercase array
var numbers = numbers.split(""); //turn numbers into array
var specials = specials.split(""); //turn special chars into array

//Log arrays to check for accuracy
console.log(lettersLower); //log lowercase array
console.log(lettersUpper); //log uppercase array
console.log(numbers); //log numbers array
console.log(specials); //log numbers array

//Logic to check it at least 2 character sets are selected
//If less than two options selected, display an on page warning and disable the generate button
function ValidateCharSelects() {
  //this function is called whenever a box is checked or unchecked.  called via OnClick in the html.
  var checkboxes = document.getElementsByName("character_set"); //defines checkboxes as a Nodelist comprised of all the elements named character_set in the DOM
  const warning = document.querySelector(".warning"); //defines warning as any element in the DOM with the .warning class
  var generate = document.getElementById("generate"); //defines generate as the element in the DOM with the unique generate ID
  var numberOfCheckedItems = 0; //set number of checked items to 0 before every loop to avoid accidental addition

  //for if loop that is called whenever a box is manipulated, loops through all the items in our Nodelist named checkboxes and counts the checks
  for (var i = 0; i < checkboxes.length; i++) {
    //full loop through checkboxes, the index i will always be less than the length of the due to starting at 0
    if (checkboxes[i].checked) numberOfCheckedItems++; //if we see a true checked attribute, increase the numberOfCheckedItems variable by 1
  }
  //if else conditional that takes action on whether there are less than 2 items check or not
  if (numberOfCheckedItems < 2) {
    warning.classList.add("show"); //add the .show class to elements with the .warning class. .warning class is styled so that it is only visible when it has the .show class as well
    warning.classList.remove("close"); //remove the close class from elements with the .warning class, this ensures that warning will toggle
    generate.setAttribute("disabled", ""); //add the disabled attribute, shuts off the generate password button
    var runGenerator = false; //setting variable for later, main PW generation loop will only run if this is set to true, to avoid folks getting around the disabled button
  } else {
    warning.classList.add("close"); //all of this is just the inverse of the above, to set states the other way if there ARE more than 2 boxes checked
    warning.classList.remove("show");
    generate.removeAttribute("disabled", "");
    var runGenerator = true;
  }
}

//Set up the Correct Character Array to Generate from based on User Preferences
var passPool = []; //empty array to start with, this is what we will add on to

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
