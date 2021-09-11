//Array that holds alphabet
var letters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
//Array that holds 20 different characters
var specialChar = ["![]{}/-_+='?`~%$#@^&*"];
//Keep track to make sure user selects at least 1 criteria
var validate = 0;

var passLength;
//Contains random letters that were chosen from 'letters' array
var randomLetters = [];
//Contains random letters that were chosen from 'letters' array and turn to lowercase 
var lettersLowercase = [];
//Contains random letters that were chosen from 'letters' array and turn to lowercase 
var lettersUppercase = [];

// Function that begins generating the password
var generatePassword = function () {
  //Asks for length of password
  passLength = prompt('Please enter number for password length.')
  //If character length is within range then continue to next criteria prompt
  if (passLength >= 12 && passLength <= 128) {
    //Number given represents the amount of elements in the password
    for (var i = 0; i < passLength; i++) {
      //Randomly selects a letter from 'letters' and adds them to the 'randomLetters' array
      var x = Math.floor(Math.random() * 26);
      var y = letters[0].charAt(x);
      //randomLetters.push(y);
    }
    console.log(randomLetters);
    passLower();
    validate++;

  } else {
    //If character length is outside range (12-128 characters) then alert should display telling user to try again
    alert('Please select a number between 12 and 128 for password length.')
    return generatePassword();
  }
}

//Turns random letters to lower case
var passLower = function () {
  var response = confirm('Would you like to have lowercase in your password?')
  //If user responds true then password should have lowercase characters
  if (response === true) {
    var randomLoop = Math.floor(Math.random() * 26)
    //Will loop a arbitarary amount of times
    for (var i = 0; i < randomLoop; i++) {
      var x = Math.floor(Math.random() * 26);
      var y = letters[0].charAt(x).toLowerCase();
      //lettersLowercase.push(y);
    }
    console.log(lettersLowercase);
    passUpper();
    validate++;
  }
  else {
    //If response is "No"(False) then continue on to next criteria prompt
    passUpper();
  }
}

//Turns letters to uppercase
var passUpper = function () {
  var response = confirm('Would you like to have uppercase in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (response === true) {
    var randomLoop = Math.floor(Math.random() * 26)
    //Will loop a arbitarary amount of times
    for (var i = 0; i < randomLoop; i++) {
      var x = Math.floor(Math.random() * 26);
      var y = letters[0].charAt(x);
      lettersUppercase.push(y);
    }
    console.log(lettersUppercase);
    passNumeric;
    validate++;
  }
  else {
    //If response is "No"(False) then continue on to next criteria prompt
    passNumeric();
  }
}

//Adds numbers to the password
var passNumeric = function () {
  var response = confirm('Would you like to have numbers in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (response === true) {
    return
  }
  else {
    //If response is "No"(False) then continue on to next criteria prompt
    passSpecial();
  }
}

var passSpecial = function () {
  var response = confirm('Would you like to have special characters in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (response === true) {
    return
  }
  else {
    //If response is "No" then continue to generate password
    return
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
