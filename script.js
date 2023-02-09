// our library to create a password 
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersChars = '0123456789';
var symbolsChars = '!@#$%&*()';  
  

  
// Assignment Code
var generateBtn = document.querySelector("#generate");
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//This is where we generate the password
function generatePassword(){
  var output = "Try Again!";
  
  var length;
  length = getLength();

  //if length is NULL then the user has clicked cancel so we do not continue any further
  if(length !== null){

    var wantedCharacters = null; // initialized to null so if its still null after all questions asked then the user said no to all 
    
    //Ask the user what characters they want in their password
    if(confirm("Do you want lower case characters?"))
      wantedCharacters += lowercaseChars;
    if(confirm("Do you want upper case character?"))
      wantedCharacters += uppercaseChars;
    if(confirm("Do you want symbols?"))
      wantedCharacters += symbolsChars;
    if(confirm("Do you want numbers"))
      wantedCharacters += numbersChars;
    if(wantedCharacters === null){
      alert("Warning: you need to select at least one.\n\nAborting!");
      return output;
    }

    //we now have all the necessary requirements to create the password 
    output =  createPassword(wantedCharacters, length);
  
  }

  return output;
}

//will ask the user to enter a password length 
//if the user clicks cancel it will exit, if wrong input gets sent then the user will be asked to try again  
function getLength(){

  var length = prompt("Enter a password length between 8 - 128");

  //if user clicks cancel we exit the function
  if( length === null){
    console.log("I WANT TO GET OUT");
    return null;
  }
  //using parseInt to determine weather our input is a number, if not tell user to try again and recur the function 
  else if( length != parseInt(length, 10) || length < 8 || length > 128 ){
     alert("Wrong input, try again or click cancel to exit");
     length = null; // so if user clicks cancel, it exits 
     return getLength();
  }
  //we got a correct answer so exit loop 
  else{
    return length;
  }
}

//create the password using the length provided using the character list provided
function createPassword(charList, length){
  var buildPassword = '';
  for(var i = 0; i < length; i++){
    buildPassword += charList[Math.floor(Math.random() * charList.length)];
  }

  return buildPassword;
}

