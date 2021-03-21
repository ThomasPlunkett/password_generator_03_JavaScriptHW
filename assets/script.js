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
  // I  TYPED OUT THE PROMPT MESSAGES THAT WILL AND MAY APPEAR TO THE USER
  // I NEED TO STORE THE INFORMATION THE USER TYPES, THE NUMBER OF CHARACTERS
  // I NEED THAT TO BE A NUMBER. IF THEY TYPE LETTERS OR OTHER CHARACTERS I NEED AN ERROR MESSAGE TO CORRECT THEM AND LOOP BACK BEFORE PROCEEDING.
  // I NEED AN ONE OF TWO ERROR MESSAGES TO PROMPT ONLY UNDER THE NECESSARY CONDITIONS: NUMBER MUST BE EQUAL TO OR BETWEEN 8-129 CHARACTERS
  // ON THE FOLLOWING 4 QUESTIONS, IF THEY CLICK OK THEN THOSE CHARACTERS WILL BE INCLUDED
  // IF THEY CLICK THE NEGATIVE OPTION, THOSE CHARACTERS REPRESENTED IN THE QUESTION WILL BE ABSENT FROM THE USERS GENERATED PASSWORD
  // I NEED ALL THESE DECISIONS STORED AND APPLIED TO THE PASSWORD
  // I NEED THE RETURN TO MATCH THEIR SELECTIONS WITH A RANDOM SEQUENCE OF CHARACTERS
  // I WOULD LIKE THAT RETURN TO REPLACE THE PLACEHOLDER TEXT 'TEMPORARY PASSWORD" IN THE BOX
  // OR I WOULD LIKE A PROMPT TO DISPLAY THE USER'S GENERATED PASSWORD.
  // OR BOTH?
  //



  var text;
  var generateBtn = prompt("How many characters would you like your password to contain:", "enter number");
  
  var generateBtn = prompt("Password must be at least 8 characters");
  
  var generateBtn = prompt("Password length must not exceed 129 characters");
  
  var generateBtn = prompt("Click OK to contain special characters");
  
  var generateBtn = prompt("Click OK to contain numeric characters");
  
  var generateBtn = prompt("Click OK to contain uppercase characters");
  
  var generateBtn = prompt("Click OK to contain lowercase characters");

  // TODO: USE THOSE PARAMETERS TO GENERATE A NEW PASSWORD
  
  // TODO: RETURN THAT PASSWORD
  return "Temporary Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
generateBtn.add
// code for first prompt: but remove tagname needs to listen for click generate password
// var tagName = prompt("How many characters would you like your password to contain:", "enter number");