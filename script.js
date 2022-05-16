/* Steps:
1. prompt the user for password criteria
    -length of password 8-128 characters?
    -lowercase, uppercase, numeric, special characters?
2. Validate input, one charater type must be selected 
3. Generate password
4. Display password*/

//Variables for prompts wtih strings
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128"
var symbols = "!@#$%&*"


// Arrays for numbers, symbols and letters


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Step 1: prompt user for password length
var userPrompt = function() {
  var userChoice = window.prompt("Please select the length of your password.");
  // If user presses Cancel, go to next prompt
}

//Step 1: prompt user for lowercase
var userPrompt = function() {
  var userChoice = window.prompt("Would you like to include lowercase?");
}
// Step 1: prompt user for uppercase
var userPrompt = function() {
    var userChoice = window.prompt("Would you like to include uppercase?");
}






// function generatePassword () {
//   console.log("You clicked the btn");


//   return "generated password will go here!" /*step 4*/
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
