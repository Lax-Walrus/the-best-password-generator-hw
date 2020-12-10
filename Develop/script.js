// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // the variables of to choose from

  var upperCas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerCas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var special = ["!", "@", "#", "$", "%", "^", "&"];
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var startPoint = [];
  var passLength = prompt("how long would you like your pass (8-128) ?");

  // length gen
  if (passLength > 128 || passLength < 8) {
    alert("does not meet requirements");
  } else {
    // upper case gen

    var specialchar = confirm(
      " would you like special characters? (okay for yes)"
    );
    var numchar = confirm("would you like numbers? (okay for yes)");
    var caseSenseLow = confirm("would you like lower (okay for yes)");

    var caseSense = confirm("would you like uppercase? (okay for yes)");
    if (specialchar === true) {
      startPoint = startPoint.concat(specialchar);
    }

    for (let i = 0; i < passLength; i++) {
      var caseup = upperCas[Math.floor(Math.random() * upperCas.length)];
      console.log(passLength[caseup[i]]);
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
