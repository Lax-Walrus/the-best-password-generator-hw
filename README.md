![snapshot of final product](https://github.com/Lax-Walrus/the-best-password-generator-hw/blob/main/Assets/PasswordGenSnapShot.PNG?raw=true)

[Click Me](https://lax-walrus.github.io/the-best-password-generator-hw/) to see the deployed website

# The best Password Generator

## Product:

---

this is a password generator that takes the user choices and outputs a randomly generated password based on user input.

## Features:

---

- uppercase and lower case selction
- number selection
- special characters selction
- user is prompted for a password between 8 - 128 characters
- if user doesn't select any critera the program resets

### behind the scenes:

---

this generator uses arrays with the characters and combines them using concat based on the user input for each confirm. the confrims are confirmed it takes the confirms length and creates a for loop with the combined arrarys. From here it will randomly generate inputs from the combined arrays up to the length of the user password input length and returns the value on the screen.
