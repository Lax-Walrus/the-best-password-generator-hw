// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // the variables of to choose from
  var randoChar = [];
  var randoPass = [];
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
    // special char gen

    var specialchar = confirm(
      " would you like special characters? (okay for yes)"
    );
    var numchar = confirm("would you like numbers? (okay for yes)");
    // lower case gen
    var caseSenseLow = confirm("would you like lower (okay for yes)");
    // upper case gen
    var caseSense = confirm("would you like uppercase? (okay for yes)");

    // adds special char
    if (specialchar === true) {
      startPoint = startPoint.concat(special);
    }
    // adds numbers
    if (numchar === true) {
      startPoint = startPoint.concat(num);
    }
    // adds lower case
    if (caseSenseLow === true) {
      startPoint = startPoint.concat(lowerCas);
    }
    // addes uppercase
    if (caseSense === true) {
      startPoint = startPoint.concat(upperCas);
    } else alert("please select ok for at least one of the characters");
  }
  // random pass generator bassed on pass length and confirms

  for (let i = 0; i < passLength; i++) {
    randoChar.push(startPoint[Math.floor(Math.random() * startPoint.length)]);
    randoPass = randoChar.join("");
  }
  // gives the random password
  return randoPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
