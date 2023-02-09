// our library to create a password 
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsChar = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];  
  

  
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
  var output = "";
  
  var length;
  length = getLength();

  //if length is NULL then the user has clicked cancel so we do not continue any further
  if(length !== null){

    var wantedCharacters;
    
    if(confirm("Do you want lower case characters?"))
      ;
    if(confirm("Do you want upper case character?"))
      ;
    if(confirm("Do you want symbols?"))
      ;
    if(confirm("Do you want numbers"))
      ;

  }


  return output;
}

//will ask the user to enter a password length 
//if the user clicks cancel it will exit, if wrong input gets sent then the user will be asked to try again  
function getLength(){

  var length = prompt("Enter a password length between 8 - 128");

  //if user clicks cancel we exit the function
  if( length === null){
    return null;
  }
  //using parseInt to determine weather our input is a number, if not tell user to try again and recur the function 
  else if(  length != parseInt(length, 10) || length < 8 || length > 128 ){
     alert("Wrong input, try again or click cancel to exit");
     length = null; // so if user clicks cancel it exits 
     getLength(length);
  }
  //we got a correct answer so exit loop 
  else{
    return length;
  }
}

