/* Steps:
1. prompt the user for password criteria
    -length of password 8-128 characters?
    -lowercase, uppercase, numeric, special characters?
2. Validate input, one charater type must be selected 
3. Generate password
4. Display password*/

//Variables for prompts with strings
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
//converts lowercase to uppercase
var uppercase = lowerCase.toUpperCase()
var number = "8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128"
var special = "!@#$%&*"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//user prompt for length of characters
function generatePassword() {
  var finalPwd = "" //using as placeholder
  var size = prompt("Please enter 8 to 128 characters")
  console.log(size)

  //validations for checking if true/false
  if (size >= 8 && size <= 128) {
    var isLowercase = confirm("Would you like to include lowercase?")
    console.log(isLowercase)
    var isUppercase = confirm("Would you like to include uppercase?")
    console.log(isUppercase)
    var isNumber = confirm("Would you like to include numbers?")
    console.log(isNumber)
    var isSpecial = confirm("Would you like to include special characters?")
    console.log(isSpecial)

    //randomly selects the position of the lowercase letter
    if (isLowercase === true) {
      var positionsString = Math.floor(Math.random() * 26) //*26 changes it from decimal to whole # up to 26 for alphabet
      console.log(positionsString)
      finalPwd = finalPwd + lowerCase[positionsString] //assigns final password to get returned below
    }
    else {

    }
    //randomly selects the position of the uppercase letter
    if (isUppercase === true) {
      var positionsString = Math.floor(Math.random() * 26)
      console.log(positionsString)
      finalPwd = finalPwd + uppercase[positionsString]
    }
    else {

    }
    //randomly selects the position of the number
    if (isNumber === true) {
      var positionsString = Math.floor(Math.random() * 120) //*120 changes it from a decimal to whole # up to 120 (range 8-128=120 diff numbers)
      console.log(positionsString)
      finalPwd = finalPwd + number[positionsString]
    }
    else {

    }
    //randomly selects the position of the special character
    if (isSpecial === true) {
      var positionsString = Math.floor(Math.random() * 7) //*7 because there are 7 different special characters
      console.log(positionsString)
      finalPwd = finalPwd + special[positionsString]
    }
  }
  else {
    alert("Invalid entry")
  }
  //displays the final password
  return finalPwd
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
