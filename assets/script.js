// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  // TODO: WRITE THE CODE THAT ASKS THE USER ABOUT THE PARAMETERS FOR THEIR PASSWORD
  var text;
  var generateBtn = prompt("How many characters would you like your password to contain:", "enter number");
    generateBtn.addEventListener("click", function() {
     
  
  // TODO: USE THOSE PARAMETERS TO GENERATE A NEW PASSWORD
  
  // TODO: RETURN THAT PASSWORD
  return "Temporary Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// code for first prompt: but remove tagname needs to listen for click generate password
// var tagName = prompt("How many characters would you like your password to contain:", "enter number");