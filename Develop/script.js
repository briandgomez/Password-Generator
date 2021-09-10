var letterChar = ['abcdefghijklmnopqrstuvwxyz'];
//Loops through array and prints each letter
for (var i = 0; i < 26; i++) {
  console.log(letterChar[0].charAt(i));
}

var specialChar = ["!\|[]{}/-_+='?`~%$#@^&*"];
//Loops through array and prints character
for (var i = 0; i < 20; i++) {
  console.log(specialChar[0].charAt(i));
}

// Function that begins generating the password
var generatePassword = function () {

  //Asks for length of password
  var passLength = prompt('Please enter number for password length.')
  //If character length is within range then continue to next criteria prompt(call lowercase function)
  if (passLength >= 12 && passLength <= 128) {
    //Number given represents the amount of elements in the password

  } else {
    //If character length is outside range (12-128 characters) then alert should display telling user to try again (call function back)
    alert('Please select a number between 12 and 128 for password length.')
    generatePassword();
  }
}

//Turns letters to lower case
var passLower = function () {
  var lowerResponse = confirm('Would you like to have lowercase in your password?')
  //If user responds with 'Yes'(True) then password should have lowercase(.toLowerCase();) characters in it 
  if (lowerResponse === true) {
    return
  }
  else {
    //If response is "No"(False) then continue on to next criteria prompt
    passUpper();
  }
}

//Turns letters to uppercase
var passUpper = function () {
  var upperResponse = confirm('Would you like to have uppercase in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (upperResponse === true) {
    return
  }
  else {
    //If response is "No"(False) then continue on to next criteria prompt
    passNumeric();
  }
}

//Adds numbers to the password
var passNumeric = function () {
  var numericResponse = confirm('Would you like to have numbers in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (numericResponse === true) {
    return
  }
  else {
    //If response is "No"(False) then continue on to next criteria prompt
    passSpecial();
  }
}

var passSpecial = function () {
  var specialResponse = confirm('Would you like to have special characters in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (specialResponse === true) {
    return
  }
  else {
    //If response is "No" then continue to generate password
    passSpecial();
  }
}

/* Should keeptrack of responses for all conditional statements. If user responds "no" for all conditional statements alert 
should display saying they need to select 'Yes' for at least 1 and try again(call back inner function)*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);