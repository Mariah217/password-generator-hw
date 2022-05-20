/* Steps:
1. prompt the user for password criteria
    -length of password 8-128 characters?
    -lowercase, uppercase, numeric, special characters?
2. Validate input, one charater type must be selected 
3. Generate password
4. Display password*/

//Variables for prompts with strings
var alpha = "abcdefghijklmnopqrstuvwxyz";
//converts lowercase to uppercase
var uppercase = alpha.toUpperCase();
var number = "0123456789";
var special = "!@#$%&*";
var charTypes = [];

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
  var sizeInput = prompt("Please enter 8 to 128 characters")
  var size = parseInt (sizeInput)
  console.log(typeof size)

  //validations for checking if true/false
  if (size >= 0 && size <= 128) {
    var isLowercase = confirm("Would you like to include lowercase?")
    if (isLowercase === true) {
      charTypes.push("lowercase");
    }
    var isUppercase = confirm("Would you like to include uppercase?")
    if (isUppercase === true) {
      charTypes.push("uppercase");
    }
    var isNumber = confirm("Would you like to include numbers?")
    if (isNumber === true) {
      charTypes.push("number");
    }
    var isSpecial = confirm("Would you like to include special characters?")
    if (isSpecial === true) {
      charTypes.push("special");
    }

    //for loop for remaining characters
    for (var i = 0; i < size; i++) {
      var randomText = charTypes[Math.floor(Math.random() * charTypes.length)];


      // loop for lowercase
      if (randomText === "lowercase") {
        var randomLower = Math.floor(Math.random() * 26);
        finalPwd = finalPwd + alpha[randomLower];
      }
 
      if (randomText === "uppercase") {
        var randomUpper = Math.floor(Math.random() * 26);
        finalPwd = finalPwd + uppercase[randomUpper];
      }
      if (randomText === "number") {
        var randomNumber = Math.floor(Math.random() * 10);
        finalPwd = finalPwd + number[randomNumber];
      }
      if (randomText === "special") {
        var randomSpecial = Math.floor(Math.random() * 7);
        finalPwd = finalPwd + special[randomSpecial];
      }
    }
  }
  else {
    alert("Invalid entry")
  }
  console.log(finalPwd.length)
  //displays the final password
  return finalPwd;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
