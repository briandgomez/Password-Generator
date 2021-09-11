//Array that holds alphabet
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Array that holds 16 different characters
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Array that holds 20 different characters
var specialChar = ['!', '[', ']', '{', '}', '/', '-', '_', '+', '=', '?', '~', '%', '$', '#', '@', '^', '&', '*'];

//Keep track to make sure user selects at least 1 criteria
var validate = 0;

var passLength;
//Contains random letters from 'letters' array
var randomLetters = [];
//Contains random letters 'letters' array and turn to lowercase 
var lettersLowercase = [];
//Contains random numbers from 'numericChar' array 
var numbers = [];
//Contains random special characters from special Char' array 
var special = [];


// Function that begins generating the password
var generatePassword = function () {
  //Asks for length of password
  passLength = prompt('Please enter number for password length.')
  //If character length is within range then continue to next criteria 
  if (passLength >= 8 && passLength <= 128) {
    return passUpper();
  } else {
    //If character length is outside range (12-128 characters) then alert should display telling user to try again
    alert('Please select a number between 18 and 128 for password length.')
    return generatePassword();
  }
}

var passUpper = function () {
  var response = confirm('Would you like to have uppercase in your password?')
  if (response === true) {
    //Number given represents the amount of elements in the password
    for (var i = 0; i < passLength; i++) {
      //Randomly selects a letter from 'letters' and adds them to the 'randomLetters' array
      /*var x = Math.floor(Math.random() * letters.length);
      var y = letters[x];
      randomLetters.push(y);*/
      selectRandomChar(letters, randomLetters);
    }
    validate++;
    console.log(randomLetters);
  }
  return passLower();

}

//Turns random letters to lower case
var passLower = function () {
  var response = confirm('Would you like to have lowercase in your password?')
  //If user responds true then password should have lowercase characters
  if (response === true) {
    //Will loop a arbitrary amount of times
    for (var i = 0; i < passLength; i++) {
      var x = Math.floor(Math.random() * specialChar.length);
      var y = letters[x].toLowerCase();
      lettersLowercase.push(y);
    }
    validate++;
    console.log(lettersLowercase);
    return passNumeric();

  }
  else {
    //If response is "No' then continue on to next criteria 
    passNumeric();
  }
}

//Adds numbers to the password
var passNumeric = function () {
  var response = confirm('Would you like to have numbers in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (response === true) {
    //Will loop a arbitrary amount of times
    for (var i = 0; i < passLength; i++) {
      var x = Math.floor(Math.random() * numericChar.length);
      var y = numericChar[x];
      numbers.push(y);
    }
    validate++;
    console.log(numbers);
    return passSpecial();

  }
  else {
    //If response is "No"(False) then continue on to next criteria 
    passSpecial();
  }
}

var passSpecial = function () {
  var response = confirm('Would you like to have special characters in your password?')
  //If response is 'Yes'(True) then password should have uppercase(.toUpperCase();) characters in it */
  if (response === false) {
    if (validate === 0) {
      alert('Please select at least 1 of options.')
      passUpper();
    }
  } else {
    //Will loop a arbitrary amount of times
    for (var i = 0; i < passLength; i++) {
      var x = Math.floor(Math.random() * specialChar.length);
      var y = specialChar[x];
      special.push(y);
    }
    console.log(special);
    return passWord();

  }
}

var passWord = function () {
  passWordArray = [];
  var passWordFinal = passWordArray.concat(randomLetters, lettersLowercase, numbers, special);
  var Final = [];
  for (i = 0; i < passLength; i++) {
    var x = Math.floor(Math.random() * passWordFinal.length);
    var y = passWordFinal[x];
    Final.push(y);
  }
  console.log(Final.join(""));
  return Final.join("");
}

var selectRandomChar = function(array, arrayPush) {
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
