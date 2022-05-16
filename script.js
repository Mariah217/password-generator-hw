/* Steps:
1. prompt the user for password criteria
    -length of password 8-128 characters?
    -lowercase, uppercase, numeric, special characters?
2. Validate input, one charater type must be selected 
3. Generate password
4. Display password*/



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





// var userOptions = window.prompt ("Would you like to inclue lowercase?", "Would you like to include uppercase?","Would you like to include numerics?", "Would you like to include special characters?");



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
