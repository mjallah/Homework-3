// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {

  let passwordString = '';

  let lowerCaseChoice = "abcdefghijklmnopqrstuvwxyz" 
  let lowerCaseChoiceArray = lowerCaseChoice.split("");

  let upperCaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  let upperCaseChoiceArray = upperCaseChoice.split("");

  let numChoice = "0123456789" 
  let numChoiceArray = numChoice.split("");

  let specialChoice = "!@#$%*+" 
  let specialChoiceArray = specialChoice.split("");

  let totalCharacters = prompt("How many characters would you like?");
  let randomLower = confirm ("Do you want lowercase?");
  let randomUpper = confirm ("Do you want uppercase?");
  let randomNumber = confirm ("Do you want numbers?");
  let randomSpecial = confirm ("Do you want special charcters?");

  if (randomLower === true) {
    passwordString = passwordString + lowerCaseChoice
  }
  
  if (randomUpper === true) {
    passwordString = passwordString + upperCaseChoice
  }

  if (randomNumber === true) {
    passwordString = passwordString + numChoice
  }

  if (randomSpecial === true) {
    passwordString = passwordString + specialChoice
  }

  let passwordArray = passwordString.split("");

  let finalPasswordString = "";
  
  for (let i=0; i < totalCharacters; i++) {
    let passwordRandom = Math.floor(Math.random() * passwordArray.length);

    finalPasswordString = finalPasswordString + passwordArray[passwordRandom];

  }

  return finalPasswordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
