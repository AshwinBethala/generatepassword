// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*?=+";



function generatePassword() {

  var allSelectTypes = "";
  var result = "";

  var userchoice = prompt ("How many characters long would you like your password to be?")

  if (userchoice < 8 || userchoice > 128) {
    alert ("invalid selection");
    return generatePassword();
  }

  var isNumber = confirm("password contain numbers?");
  var isLower = confirm("password contain lowercase letters?");
  var isUpper = confirm("password contain uppercase letters?");
  var isSpecial = confirm("password contain special characters?");

  if(isNumber) {
    allSelectTypes = allSelectTypes + number;
  }
  
  if(isLower) {
    allSelectTypes = allSelectTypes + lower;
  }

  if(isUpper) {
    allSelectTypes = allSelectTypes + upper;
  }

  if(isSpecial) {
    allSelectTypes = allSelectTypes + special;
  }

  if (isLower === false && isNumber === false && isUpper === false && isSpecial === false) {
    alert ("retry");
    return generatePassword();
  }

  for(var count = 1; count <= userchoice; count++) {
    var randomIndex = Math.floor(Math.random() * allSelectTypes.length);
    result = result + allSelectTypes.charAt(randomIndex);
  }



  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
