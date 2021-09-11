//Array that holds the alphabet
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Array that holds the alphabet in lowercase
var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Array that holds 11 different characters
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Array that holds 20 different characters
var specialChar = ['!', '[', ']', '{', '}', '/', '-', '_', '+', '=', '?', '~', '%', '$', '#', '@', '^', '&', '*'];

//Keep track to make sure user selects at least 1 of the following criteria
var validate = 0;

//Creates variable for length of the password 
var passLength;
//Contains random letters from 'letters' array
var randomLetters = [];
//Contains random letters from 'letters' array and turn to lowercase 
var lettersLowercase = [];
//Contains random numbers from 'numericChar' array 
var numbers = [];
//Contains random special characters from 'special Char' array 
var special = [];


// Function that begins generating the password
var generatePassword = function () {
  //Asks for length of password
  passLength = prompt('Please enter number for password length.')
  //If character length is within range then continue to next criteria 
  if (passLength >= 8 && passLength <= 128) {
    return passUpper();
  } else {
    //If character length is outside range (12-128 characters) then alert should display 
    alert('Please select a number between 8 and 128 for password length.')
    return generatePassword();
  }
}

//Returns uppercase letters
var passUpper = function () {
  var response = confirm('Would you like to have uppercase in your password?')
  if (response === true) {
    //Number given for 'passLength' represents the amount of elements in the password
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(letters, randomLetters);
    }
    validate++;
  }
  return passLower();
}

//Returns lowercase letters
var passLower = function () {
  var response = confirm('Would you like to have lowercase in your password?')
  if (response === true) {
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(lettersLower, lettersLowercase);
    }
    validate++;
  }
  return passNumeric();
}

//Returns random numbers
var passNumeric = function () {
  var response = confirm('Would you like to have numbers in your password?')
  if (response === true) {
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(numericChar, numbers);
    }
    validate++;
  }
  return passSpecial();
}

//Returns special characters
var passSpecial = function () {
  var response = confirm('Would you like to have special characters in your password?')
  if (response === false) {
    if (validate === 0) {
      alert('Please select at least 1 of options.')
      passUpper();
    }
  } else {
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(specialChar, special);
    }
  }
  return passWord();
}

//Creates password
var passWord = function () {
  passWordArray = [];
  var passWordFinal = passWordArray.concat(randomLetters, lettersLowercase, numbers, special);
  var Final = [];
  for (i = 0; i < passLength; i++) {
    selectRandomChar(passWordFinal, Final);
  }
  return Final.join("");
}

//Function that extracts random elements from exisitng arrays and adds them to empty arrays
var selectRandomChar = function (array, arrayPush) {
  var x = Math.floor(Math.random() * array.length);
  var y = array[x];
  arrayPush.push(y);
}

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
