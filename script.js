//Define Individual Character Sets as strings

var lettersLower = "abcdefghijklmnopqrstuvwxyz"; // string of letters
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"; //string of numbers
var specials = "!#$%&'()*+,-./:;=?@[]^_`{|}~";

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
  } else {
    warning.classList.add("close"); //all of this is just the inverse of the above, to set states the other way if there ARE more than 2 boxes checked
    warning.classList.remove("show");
    generate.removeAttribute("disabled", "");
  }
}
// Length Slider
var slider = document.getElementById("length");
var length = document.getElementById("value");
length.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time the slider handle handle is dragged, it fires off of the oninput event)
slider.oninput = function passLength() {
  length.innerHTML = this.value;
};

//credit to the internet for all the slider stuff, I just really wanted a slider in here, and I didn't want to use jQuery, turns out thats pretty hard.
//ended up using a datalist attribute on the input tag so the html had the number predefined on load, and we just have to set it, rather than setting a number
//thats not defined in the DOM already and then trying to have js parse it, even though its already run...

//Main PW Generation Function
//First we must define the variables we will be needing, 4 looking at the checkboxes, 4 are defining variables to elements on the html, and the last 3 are setting up empty vars
var lowercaseSelect = document.querySelector('input[value="lettersLower"]'),
  uppercaseSelect = document.querySelector('input[value="lettersUpper"]'),
  numbersSelect = document.querySelector('input[value="numbers"]'),
  specialsSelect = document.querySelector('input[value="specials"]'),
  passwordBox = document.getElementById("passBox"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  lengthInput = document.getElementById("length"),
  passLength,
  userPassword,
  passwordPool;
//This is the main generation funtion
function GeneratePassword() {
  userPassword = ""; //first we define 2 of our empty variables as empty strings
  passwordPool = "";
  if (lowercaseSelect.checked) {
    //next we go through a series of 4 if statements, if the value checked is true on the elements we've defined, we add the corresponding character set to the pool
    passwordPool += lettersLower;
  }
  if (uppercaseSelect.checked) {
    passwordPool += lettersUpper;
  }
  if (numbersSelect.checked) {
    passwordPool += numbers;
  }
  if (specialsSelect.checked) {
    passwordPool += specials;
  }
  console.log(passwordPool); //log the final pool to make sure the check buttons got read correctly

  passlength = Number(lengthInput.value); //here we making sure we convert the length value from the slider to a number before attempting to math with it

  for (let i = 0; i < passlength; i++) {
    //same full loop logic as before, the index will always be lower than the length, but its gotta loop through to be sure!  yay dev tricks
    userPassword += passwordPool.charAt(
      Math.floor(Math.random() * passwordPool.length) //so, at the end its pretty simple.  we loop through as many times as was set by the slider, and each loop is picking a
    ); //random character from the pool and adding it to the end of the password variable, while also redefining the variable
  }
  passwordBox.innerHTML = userPassword; //this is where we put the now generated password back on the page
}

//Function to copy the PW out of the text area.  Again, thank the internet for guidance in this realm
function copyClip() {
  //we call this with an OnClick event on a button in the html, just like the password gen
  var copyText = document.getElementById("passBox"); //set the variable
  copyText.select(); //select it with the method specifically for selecting text from a textarea...handy
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/ //I guess safari doesn't like to select things without a range defined?  nice apple, real nice
  document.execCommand("copy"); //and now we just copy it, tada!
}
