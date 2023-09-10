// Assignment code here

function generatePassword() {
   
  var lowercase = 'abcdefghijk';
  var uppercase = 'ABCDEFGHIJK';
  var numbers = '0123456789';
  var specials = '~!@#$%^&*()?<>,.;';
  var combined = '';
  var password = '';
 
  var passwordLength = prompt('How many characters long would you like your password?')
 
  if (passwordLength <= 7) {
      alert('You must enter a valid number of characters!')
      passwordLength = prompt('How many characters would you like?')
  }


  if (passwordLength >= 128) {
      alert('You must enter a valid number of characters!')
      passwordLength = prompt('How many characters would you like?')
  }
 
  if (isNaN(passwordLength)) {
      alert('Your value must be a number!')
      passwordLength = prompt('How many characters long would you like your password?')
  }
 
  var wantsLowercase =confirm('Do you want lowercase letters?')
  var wantsUppercase =confirm('Do you want uppercase letters?')
  var wantsNumbers =confirm('Do you want numbers?')
  var wantsSpecials =confirm('Do you want special characters?')
 
 
  if (wantsLowercase) {
      combined += lowercase
  }
 
  if (wantsUppercase) {
      combined += uppercase
  }
 
  if (wantsNumbers) {
      combined += numbers
  }
 
  if (wantsSpecials) {
      combined += specials
  }
 
 
  for (var count = 0; count < passwordLength; count++) {
      var random = Math.random();
      var index = Math.floor(random * combined.length);
     
      password += combined[index];
  }
  console.log(password)


  return password
 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
